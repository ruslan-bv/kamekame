import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Logger } from '@nestjs/common';
import { User, UserDocument } from "../models/user.schema";

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ) {}
        
    async signup(user: User): Promise<User> {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(user.password, salt);
        const reqBody = {
            name: user.name,
            email: user.email,
            password: hash
        }
        const newUser = new this.userModel(reqBody);
        return newUser.save();
    }

    async signin(user: User, jwt: JwtService): Promise<object | string> {
        const isUserInDatabase = await this.userModel.findOne({ email: user.email }).exec();

        if (isUserInDatabase) {
            const { password } = isUserInDatabase;
            if (bcrypt.compare(user.password, password)) {
                const payload = { email: user.email };
                return jwt.sign(payload)
            } else {
                return new HttpException('Incorrect Username Or Password', HttpStatus.UNAUTHORIZED);
            }
        } else {
            return new HttpException('Incorrect Username Or Password', HttpStatus.UNAUTHORIZED);
        }
    }

    async getUserInformation(email: string): Promise<User> {
        return await this.userModel.findOne({ email: email }).exec();
    }

    // async getUsers() {
    //     return await this.userModel.find();
    // }
}

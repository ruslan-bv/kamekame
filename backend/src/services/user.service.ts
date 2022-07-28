import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "../models/user.schema";
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ) {}
        
    async signup(user: User): Promise<User> {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(user.password, salt);
        const reqBody = {
            fullname: user.name,
            email: user.email,
            password: hash
        }
        const newUser = new this.userModel(reqBody);
        return newUser.save();
    }

    async signin(user: User, jwt: JwtService): Promise<object> {
        const isUserInDatabase = await this.userModel.findOne({ email: user.email }).exec();

        if (isUserInDatabase) {
            const { password } = isUserInDatabase;
            if (bcrypt.compare(user.password, password)) {
                const payload = { email: user.email };
                return {
                    token: jwt.sign(payload)
                }
            } else {
                return new HttpException('Incorrect Username Or Password', HttpStatus.UNAUTHORIZED);
            }
        } else {
            return new HttpException('Incorrect Username Or Password', HttpStatus.UNAUTHORIZED);
        }
    }

    async getUserInformation(email): Promise<User> {
        return await this.userModel.findOne({ email }).exec();
    }
}

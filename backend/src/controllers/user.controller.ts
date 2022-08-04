import { Body, Controller, Delete, Get, HttpStatus, Param, Post, UploadedFiles, Put, Req, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../models/user.schema';
import { UserService } from '../services/user.service';

@Controller('/api/v1')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) {}

    @Post('/signup')
    async Signup(@Res() response, @Body() user: User) {
        const newUser = await this.userService.signup(user);
        return response.status(HttpStatus.CREATED).json({
            newUser
        });
    }

    @Post('/signin')
    async Signin(@Res() response, @Body() user: User) {
        const token = await this.userService.signin(user, this.jwtService);
        return response.status(HttpStatus.OK).json(token);
    }
}

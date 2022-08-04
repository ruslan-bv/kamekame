import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';
import { User, UserSchema } from '../models/user.schema';
import { secret } from '../utils/constants';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), 
        JwtModule.register({
            secret,
            signOptions: { expiresIn: '1h' },
          }),
    ],
    controllers: [UserController],
    providers: [UserService],
    exports: [JwtModule]
})

export class UserModule {}

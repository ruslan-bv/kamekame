import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { secret } from './utils/constants';
import { UserModule } from './modules/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/app'),
    JwtModule.register({
      secret,
      signOptions: { expiresIn: '1h' },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'dist'),
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user.module';
import { DeckModule } from './modules/deck.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/app'),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'dist'),
    }),
    UserModule,
    DeckModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}

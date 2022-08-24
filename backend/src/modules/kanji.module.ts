import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';
import { KanjiController } from '../controllers/kanji.controller';
import { KanjiService } from '../services/kanji.service';

@Module({
    // imports: [
    //     MongooseModule.forFeature([{ name: Deck.name, schema: DeckSchema }]), 
    // ],
    imports: [HttpModule],
    controllers: [KanjiController],
    providers: [KanjiService],
    // exports: [JwtModule]
})

export class KanjiModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DeckController } from '../controllers/deck.controller';
import { DeckService } from '../services/deck.service';
import { Deck, DeckSchema } from '../models/deck.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Deck.name, schema: DeckSchema }]), 
    ],
    controllers: [DeckController],
    providers: [DeckService],
    // exports: [JwtModule]
})

export class DeckModule {}

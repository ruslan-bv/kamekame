import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { KanjiCard } from './kanjicard.schema';

@Schema()
export class Deck {
    @Prop({required: true})
    id: string;
    @Prop({required: true})
    name: string;
    @Prop({required: false})
    letter: KanjiCard;
    @Prop({ required: true})
    userEmail: string;
    @Prop({default: Date.now()})
    createdDate: Date;
}

export type DeckDocument = Deck & Document;

export const DeckSchema = SchemaFactory.createForClass(Deck);

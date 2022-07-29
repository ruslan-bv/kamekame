import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { KanjiCard } from './kanjicard.schema';

@Schema()
export class Deck {
    @Prop({required: true})
    title: string;
    @Prop({required: false})
    letter: KanjiCard;
    @Prop({default: Date.now()})
    createdDate: Date;
}

export type DeckDocument = Deck & Document;

export const DeckShema = SchemaFactory.createForClass(Deck);

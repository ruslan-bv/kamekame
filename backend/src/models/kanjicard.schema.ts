import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class KanjiCard {
    @Prop({required: true})
    kanji: string;
    @Prop({required: true})
    grade: number;
    @Prop({required: true})
    heisig_en: string;
    @Prop({required: true})
    jlpt: null | number;
    @Prop({required: true})
    kun_readings: string[];
    @Prop({required: true})
    meanings: string[];
    @Prop({required: true})
    name_readings: string[];
    @Prop({required: true})
    on_readings: string[];
    @Prop({required: true})
    stroke_count: number;
    @Prop({required: true})
    unicode: string;
    @Prop({default: Date.now()})
    createdDate: Date;
}

export const KanjiSchema = SchemaFactory.createForClass(KanjiCard);

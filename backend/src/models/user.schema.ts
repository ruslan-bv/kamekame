import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
    @Prop({required: true})
    name: string;
    @Prop({required: true})
    password: string;
    @Prop({required: true, unique: true, lowercase: true})
    email: string;
    @Prop({default: Date.now()})
    createdDate: Date;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);

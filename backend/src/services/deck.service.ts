import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from '../models/user.schema';
import { Deck, DeckDocument } from '../models/deck.schema';

@Injectable()
export class DeckService {
    constructor(
        @InjectModel(Deck.name) private deckModel: Model<DeckDocument>
    ) {}

    async create(title): Promise<Deck> {
        // const { email } = user;
        const reqBody = {
            title: title
        }

        const newDeck = new this.deckModel(reqBody);

        return newDeck.save();
    }
}
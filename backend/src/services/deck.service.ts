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

    async create(title, email): Promise<Deck> {
        const reqBody = {
            name: title,
            userEmail: email
        };

        const newDeck = new this.deckModel(reqBody);

        return newDeck.save();
    }

    async update(deck: Deck): Promise<object> {
        const { id } = deck;
        const updatedDeck = await this.deckModel.findByIdAndUpdate(id, deck);

        if (!updatedDeck) {
            return new HttpException('No deck found!', HttpStatus.BAD_REQUEST);
        }

        return updatedDeck;
    }

    async delete(deck: Deck): Promise<void> {
        const { id } = deck;
        await this.deckModel.deleteOne({ _id: id });
    }

    async getUserDecks(user: User): Promise<Deck[]> {
        const { email } = user;
        const decks = await this.deckModel.find({ userEmail: email });
        return decks;
    }
}
import { Body, Controller, Delete, HttpStatus, Get, Post, Put, Res, UseGuards } from '@nestjs/common';
import { Deck } from '../models/deck.schema';
import { User } from '../models/user.schema';
import { DeckService } from '../services/deck.service';
import { CreateDeckDto } from '../dtos/createDeck.dto';
import { JwtGuard } from '../guards/jwt.guard';

@UseGuards(JwtGuard)
@Controller('/api/v1/:user/deck')
export class DeckController {
    constructor(
        private readonly deckService: DeckService
    ) {}

    @Get('/get')
    async GetDecksByName(@Res() response, @Body() user: User, name: string) {
        const userDecks = await this.deckService.getDecksByName(user, name);
        return response.status(HttpStatus.ACCEPTED).json({
            userDecks
        });
    }

    @Get('/getall')
    async GetAllDecks(@Res() response, @Body() user: User) {
        const userDecks = await this.deckService.getUserDecks(user);
        return response.status(HttpStatus.ACCEPTED).json({
            userDecks
        });
    }

    @Post('/create')
    async Create(@Res() response, @Body() deck: CreateDeckDto) {
        const { title, email } = deck;
        const newDeck = await this.deckService.create(title, email);
        return response.status(HttpStatus.CREATED).json({
            newDeck
        });
    }

    @Put('/update')
    async Update(@Res() response, @Body() deck: Deck) {
        const updatedDeck = await this.deckService.update(deck);
        return response.status(HttpStatus.ACCEPTED).json({
            updatedDeck
        });
    }

    @Delete('/delete')
    async Delete(@Res() response, @Body() deck: Deck) {
        await this.deckService.delete(deck);
        return response.status(HttpStatus.GONE);
    }
}

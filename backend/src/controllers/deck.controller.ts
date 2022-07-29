import { Body, Controller, Delete, Get, HttpStatus, Param, Post, UploadedFiles, Put, Req, Res } from '@nestjs/common';
import { Deck } from '../models/deck.schema';
import { User } from '../models/user.schema';
import { DeckService } from '../services/deck.service';
import { CreateDeckDto } from '../dtos/createDeck.dto';

@Controller('/api/v1/:user/deck')
export class DeckController {
    constructor(
        private readonly deckService: DeckService
    ) {}

    @Post('/create')
    async Create(@Res() response, @Body() createDeck: CreateDeckDto) {
        const newDeck = await this.deckService.create(createDeck.title);
        return response.status(HttpStatus.CREATED).json({
            newDeck
        });
    }
}

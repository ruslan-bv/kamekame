import { Body, Controller, Delete, HttpStatus, Get, Post, Put, Res, UseGuards } from '@nestjs/common';
import { KanjiService } from '../services/kanji.service';
import { Logger } from '@nestjs/common';

@Controller('/api/v1/')
export class KanjiController {
    constructor(
        private readonly kanjiService: KanjiService
    ) {}

    @Get('/joyo')
    async GetJoyoKanjiList(@Res() response) {
        const list = await this.kanjiService.findJouyouKanji();
        return response.status(HttpStatus.ACCEPTED).json({
            list
        });
    }

    @Get('/jinmeiyo')
    async GetJinmeiyouKanjiList(@Res() response) {
        const list = await this.kanjiService.findJinmeiyouKanji();
        return response.status(HttpStatus.OK).json({
            list
        });
    }
}
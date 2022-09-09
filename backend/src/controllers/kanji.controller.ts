import { Controller, HttpStatus, Get, Res, Query, UseGuards } from '@nestjs/common';
import { KanjiService } from '../services/kanji.service';
import { Logger } from '@nestjs/common';
import { JwtGuard } from '../guards/jwt.guard';

// @UseGuards(JwtGuard)
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

    @Get('/character/kanji')
    async GetKanjiByCharacter(@Res() response, @Query() query: { character: string }) {
        const { character } = query;
        const kanji = await this.kanjiService.findKanjiByCharacter(character);
        return response.status(HttpStatus.OK).json(kanji); 
    }

    @Get('/character/reading')
    async GetKanjiByReading(@Res() response, @Query() query: { reading: string}) {
        const { reading } = query;
        const list = await this.kanjiService.findKanjiByReading(reading);
        return response.status(HttpStatus.OK).json(list);
    }

    @Get('/character/kanji/dict')
    async GetDictEntryByKanji(@Res() response, @Query() query: { character: string}) {
        const { character } = query;
        const list = await this.kanjiService.findDictEntryByKanji(character);
        return response.status(HttpStatus.OK).json(list);
    }
}
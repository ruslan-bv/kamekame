import { Controller, HttpStatus, Get, Res, Query, UseGuards } from '@nestjs/common';
import { DefinitionService } from '../services/definition.service';
// import { Logger } from '@nestjs/common';
// import { JwtGuard } from '../guards/jwt.guard';

// @UseGuards(JwtGuard)
@Controller('/api/v1/')
export class DefinitionController {
    constructor(
        private readonly definitionService: DefinitionService
    ) {}

    @Get('/character/definition')
    async GetDefinition(@Res() response, @Query() query: { word: string }) {
        const { word } = query;
        const definition = await this.definitionService.findMeaning(word);
        return response.status(HttpStatus.OK).json(definition); 
    }
}

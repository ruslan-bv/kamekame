import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';

@Injectable()
export class DefinitionService {
    constructor (
        private readonly httpService: HttpService
    ) {}

    async findMeaning(word: string): Promise<AxiosResponse> {
        return await lastValueFrom(this.httpService
                     .get(`https://jisho.org/api/v1/search/words?keyword=${word}`)
                     .pipe(map(axiosResponse => axiosResponse.data)));
    }
}

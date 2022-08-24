import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, firstValueFrom, lastValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';

@Injectable()
export class KanjiService {
    constructor (
        private readonly httpService: HttpService
    ) {}

    async findJouyouKanji(): Promise<any> {
        return await lastValueFrom(this.httpService
                    .get('https://kanjiapi.dev/v1/kanji/joyo')
                    .pipe(map(axiosResponse => axiosResponse.data)));
    } 
}
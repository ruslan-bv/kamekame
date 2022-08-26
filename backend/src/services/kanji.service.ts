import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';

@Injectable()
export class KanjiService {
    constructor (
        private readonly httpService: HttpService
    ) {}

    async findJouyouKanji(): Promise<AxiosResponse> {
        return await lastValueFrom(this.httpService
                    .get('https://kanjiapi.dev/v1/kanji/joyo')
                    .pipe(map(axiosResponse => axiosResponse.data)));
    }

    async findJinmeiyouKanji(): Promise<AxiosResponse> {
        return await lastValueFrom(this.httpService
            .get('https://kanjiapi.dev/v1/kanji/jinmeiyo')
            .pipe(map(axiosResponse => axiosResponse.data)));
    }

    async findKanjiByCharacter(kanji: string): Promise<AxiosResponse> {
        return await lastValueFrom(this.httpService
            .get(`https://kanjiapi.dev/v1/kanji/${kanji}`)
            .pipe(map(axiosResponse => axiosResponse.data)));
    }

    async findKanjiByReading(reading: string): Promise<AxiosResponse> {
        return await lastValueFrom(this.httpService
            .get(`https://kanjiapi.dev/v1/kanji/${reading}`)
            .pipe(map(axiosResponse => axiosResponse.data)));
    }

    async findDictEntryByKanji(kanji: string): Promise<AxiosResponse> {
        return await lastValueFrom(this.httpService
            .get(`https://kanjiapi.dev/v1/kanji/${kanji}`)
            .pipe(map(axiosResponse => axiosResponse.data)));
    }
 }
 
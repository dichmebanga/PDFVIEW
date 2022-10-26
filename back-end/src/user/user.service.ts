import { Injectable } from '@nestjs/common'
import puppeteer from 'puppeteer'
import * as fs from 'fs'
import { InjectRedis } from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';

@Injectable()
export class UserService {
    constructor(
        @InjectRedis() private readonly redis: Redis
    ) { }

    async get(link: string) {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto(link, { waitUntil: 'networkidle0' });
        const pdf = await page.pdf({ format: 'A4' });
        await browser.close();
        return pdf
    }


    createPDF(url): Promise<Buffer> {
        return new Promise((resolve) => {
            this.get(`https://${url}.com`).then(pdf => {
                resolve(pdf)
            })
        })
    }

}
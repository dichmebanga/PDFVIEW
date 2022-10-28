import { Injectable } from "@nestjs/common";
import puppeteer from 'puppeteer';


@Injectable()
export class PDFService {
    async get(url: string) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(`http://${url}`);
        const pdf = await page.pdf({ format: 'A4' })
        await browser.close()
        return pdf
    }
}
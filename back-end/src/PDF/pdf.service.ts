import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';
import { InjectRepository } from '@nestjs/typeorm';
import { Pdf } from 'src/entity/mongodb.entity';
import { Repository } from 'typeorm';
import "reflect-metadata";

@Injectable()
export class PDFService {
  constructor(
    @InjectRepository(Pdf) private readonly pdfRepository: Repository<Pdf>,
  ) {}
  async get(url: string) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`http://${url}`);
    const pdf = await page.pdf({ format: 'A4' });
    await browser.close();
    return pdf;
  }

  async insertPdf(pdf: any): Promise<any> {
    console.log('da nha', pdf);
    const convertPdf = await this.pdfRepository.save(pdf);
    return convertPdf;
  }
}

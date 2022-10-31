import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { userEntity } from 'src/entity/user.entity';
import { PdfEntity } from 'src/entity/pdf.entity';
import "reflect-metadata";

@Injectable()
export class PDFService {

  constructor(
    // @InjectRepository(userEntity) private readonly userRepository: Repository<userEntity>,
    @InjectRepository(PdfEntity) private readonly pdfthisRepository: Repository<PdfEntity>,
  ) { }

  async get(url: string) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`http://${url}`);
    const pdf = await page.pdf({ format: 'A4' });
    await browser.close();
    return pdf;
  }

  async savePdf(url: any): Promise<any> {
    return new Promise((resolve) => {
      this.get(url).then((pdf) => {
        this.pdfthisRepository.save({url:url, pdf })
        resolve(pdf)
        console.log(pdf)
      })
    })
  }



  /////////////////

  // async insertPdf(data: any): Promise<any> {
  //   return await this.pdfRepository.save(data);
  // }

  // async findAllPdf(){
  //   return await this.pdfRepository.find()
  // }

  /////////////////

  // async insertUser(dataUser: any): Promise<any> {
  //   return await this.userRepository.save(dataUser)
  // }

  // async findAllUser(){
  //   return await this.userRepository.find()
  // }
}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';
import { Connection } from 'mongoose'
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { GridFSBucketReadStream, Repository } from 'typeorm';
import { userEntity } from 'src/entity/user.entity';
import { PdfEntity } from 'src/entity/pdf.entity';
import { MulterEntity } from 'src/entity/multer.entity';
import { MongoGridFS } from 'mongo-gridfs';
import { InjectConnection } from '@nestjs/mongoose'


@Injectable()
export class PDFService {
  private fileModel: MongoGridFS;
  constructor(
    // @InjectRepository(userEntity) private readonly userRepository: Repository<userEntity>,
    // @InjectRepository(PdfEntity) private readonly pdfthisRepository: Repository<PdfEntity>,
    // @InjectRepository(MulterEntity) private readonly multerRepository: Repository<MulterEntity>,
    // @InjectConnection() private readonly connection: Connection
  ) {
    // this.fileModel = new MongoGridFS(this.connection.db, '');
   }


  // async saveFile(file: any): Promise<any> {
  //   return new Promise((resolve) => {
  //     this.multerRepository.save(file)
  //     resolve(file)
  //   })
  // }


  /////////////////

  // async get(url: string) {
  //   const browser = await puppeteer.launch();
  //   const page = await browser.newPage();
  //   await page.goto(`http://${url}`);
  //   const pdf = await page.pdf({ format: 'A4' });
  //   await browser.close();
  //   return pdf;
  // }

  // async savePdf(url: any): Promise<any> {
  //   return new Promise((resolve) => {
  //     console.log('service')
  //     this.get(url).then((pdf) => {
  //       this.pdfthisRepository.save({ url: url, pdf })
  //       resolve(pdf)
  //     })
  //   })
  // }

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

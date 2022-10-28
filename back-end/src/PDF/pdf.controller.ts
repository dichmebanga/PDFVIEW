import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Response,
  UseInterceptors,
} from '@nestjs/common';
import { RedisInterceptor } from 'src/Interceptor/Redis';
import { SendInterceptor } from 'src/Interceptor/Send';
import { PDFService } from './pdf.service';
import "reflect-metadata";

@Controller('/pdf')
export class PDFController {
  constructor(private pdfService: PDFService) {}
  @Get('/:url')
  @UseInterceptors(RedisInterceptor)
  @UseInterceptors(SendInterceptor)
  async create(@Param('url') url: string) {
    return await this.pdfService.get(url);
  }

  @Post('/post/:url')
  async insertPdf(@Param('url') url: string) {
    const getPdf = await this.pdfService.get(url);
    
    const saveMongo = await this.pdfService.insertPdf(getPdf);
    return saveMongo;
  }
}

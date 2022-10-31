import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  Response,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { RedisInterceptor } from 'src/Interceptor/Redis';
import { SendInterceptor } from 'src/Interceptor/Send';
import { PDFService } from './pdf.service';
import "reflect-metadata";
import { FileInterceptor } from '@nestjs/platform-express';
import multer, { diskStorage } from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage'

@Controller('/pdf')
export class PDFController {
  constructor(private pdfService: PDFService) { }
  @Get('/:url')
  //@UseInterceptors(RedisInterceptor)
  @UseInterceptors(SendInterceptor)
  create(@Param('url') url: string) {
    return this.pdfService.savePdf(url);
  }

  /////////////////

  // @Post("/user")
  // async insertUser(@Body() body: any, @Res() res: any) {
  //   const user = await this.pdfService.insertUser(body)
  //   return res.status(200).json(user)
  // }

  // @Get("/user/get")
  // async findAllUser(@Res() res: any) {
  //   const findUser = await this.pdfService.findAllUser()
  //   return res.status(200).json(findUser)
  // }

}

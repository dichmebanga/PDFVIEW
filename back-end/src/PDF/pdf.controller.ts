import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  Req,
  Response,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
  StreamableFile,
} from '@nestjs/common';
import { RedisInterceptor } from 'src/Interceptor/Redis';
import { SendInterceptor } from 'src/Interceptor/Send';
import { PDFService } from './pdf.service';
import "reflect-metadata";
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import multer, { diskStorage } from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage'
import * as fs from 'fs';
import * as path from 'path';

@Controller('/pdf')
export class PDFController {

  constructor(private pdfService: PDFService) { }

  //////////////////

  @Post('/upload')
  @UseInterceptors(FilesInterceptor('file'))
  upload(@UploadedFiles() files) {
    const response = [];
    files.forEach(file => {
      const fileReponse = {
        originalname: file.originalname,
        encoding: file.encoding,
        mimetype: file.mimetype,
        id: file.id,
        filename: file.filename,
        metadata: file.metadata,
        bucketName: file.bucketName,
        chunkSize: file.chunkSize,
        size: file.size,
        md5: file.md5,
        uploadDate: file.uploadDate,
        contentType: file.contentType,
      };
      response.push(fileReponse);
    });
    return response
  }

  @Get("/read/:id")
  readStream(@Req() req, @Response({ passthrough: true }) res){

  }



}

 //////////////////

  // @Get('/:url')
  // @UseInterceptors(RedisInterceptor)
  // @UseInterceptors(SendInterceptor)
  // create(@Param('url') url: string) {
  //   console.log('controller')
  //   const a = this.pdfService.savePdf(url);
  //   return a
  // }

  /////////////////

  // @Post("/user")
  // async insertUser(@Body() body: any, @Res() res: any) {
  //   const user = await this.pdfService.insertUser(body)`
  //   return res.status(200).json(user)
  // }

  // @Get("/user/get")
  // async findAllUser(@Res() res: any) {
  //   const findUser = await this.pdfService.findAllUser()
  //   return res.status(200).json(findUser)
  // }



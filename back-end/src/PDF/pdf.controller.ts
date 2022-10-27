import { Controller, Get, Param, Response, UseInterceptors } from "@nestjs/common";
import { RedisInterceptor } from "src/Interceptor/Redis";
import { SendInterceptor } from "src/Interceptor/Send";
import { PDFService } from "./pdf.service";


@Controller('/pdf')
export class PDFController {
    constructor(private pdfService: PDFService) { }

    @Get('/:url')
    @UseInterceptors(RedisInterceptor)
    @UseInterceptors(SendInterceptor)
    create(@Param('url') url: string) {
        return this.pdfService.get(url)
    }

}
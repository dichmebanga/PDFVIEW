import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PDFController } from "./pdf.controller";
import { PDFService } from "./pdf.service";
import "reflect-metadata";
import { MulterModule } from "@nestjs/platform-express";
import { userEntity } from "src/entity/user.entity";
import { PdfEntity } from "src/entity/pdf.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([userEntity,PdfEntity]),
        MulterModule.register({
            dest:'./uploads',
        })
    ],
    controllers: [PDFController],
    providers: [PDFService]
})
export class PDFModule { }
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Pdf } from "src/entity/mongodb.entity";
import { PDFController } from "./pdf.controller";
import { PDFService } from "./pdf.service";
import "reflect-metadata";

@Module({
    imports:[TypeOrmModule.forFeature([Pdf])],
    controllers: [PDFController],
    providers: [PDFService]
})
export class PDFModule { }
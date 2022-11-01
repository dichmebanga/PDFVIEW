import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PDFController } from "./pdf.controller";
import { PDFService } from "./pdf.service";
import { MulterModule } from "@nestjs/platform-express";
import { userEntity } from "src/entity/user.entity";
import { PdfEntity } from "src/entity/pdf.entity";
import { MulterEntity } from "src/entity/multer.entity";
import { GridFsMulterConfigService } from "./multer-config.service";


@Module({
    imports: [
        TypeOrmModule.forFeature([userEntity,PdfEntity,MulterEntity]),
        MulterModule.registerAsync({
            useClass:GridFsMulterConfigService
        })
    ],
    controllers: [PDFController],
    providers: [PDFService,GridFsMulterConfigService]
})
export class PDFModule { }
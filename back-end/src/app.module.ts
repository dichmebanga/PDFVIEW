import { Module } from '@nestjs/common';
import { PDFModule } from './PDF/pdf.module';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { TypeOrmModule } from '@nestjs/typeorm';
import "reflect-metadata";
import { userEntity } from 'src/entity/user.entity';
import { PdfEntity } from './entity/pdf.entity';
import { MulterEntity } from './entity/multer.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      // url: 'mongodb+srv://admin:admin@cluster0.gphjhaw.mongodb.net/?retryWrites=true&w=majority',
      url: 'mongodb://localhost:27017',
      database:'nestjs',
      useNewUrlParser: true,
      synchronize: true,
      useUnifiedTopology: true,
      entities: [userEntity,PdfEntity,MulterEntity],
    }),
    RedisModule.forRoot({
      config: {
        host: 'localhost',
        port: 6379,
        password: 'authpassword',
      },
    }),
    PDFModule,
  ],
})
export class AppModule {}

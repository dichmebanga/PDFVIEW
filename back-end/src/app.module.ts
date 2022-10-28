import { Module } from '@nestjs/common';
import { PDFModule } from './PDF/pdf.module';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { TypeOrmModule } from '@nestjs/typeorm';
import "reflect-metadata";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://admin:admin@cluster0.gphjhaw.mongodb.net/?retryWrites=true&w=majority',
      database:'nestjs',
      useNewUrlParser: true,
      synchronize: true,
      logging: true,
      entities: [],
      useUnifiedTopology: true,
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

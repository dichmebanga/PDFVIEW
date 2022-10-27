import { Module } from '@nestjs/common';
import { PDFModule } from './PDF/pdf.module';
import { RedisModule } from '@liaoliaots/nestjs-redis';

@Module({
  imports: [
    RedisModule.forRoot({
      config: {
        host: 'localhost',
        port: 6379,
        password: 'authpassword'
      }
    }),
    PDFModule],

})
export class AppModule { }

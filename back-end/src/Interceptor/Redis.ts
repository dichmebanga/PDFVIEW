import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Param,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { InjectRedis } from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';
import "reflect-metadata";

@Injectable()
export class RedisInterceptor implements NestInterceptor {
  constructor(@InjectRedis() private readonly redis: Redis) {}

  sleep = async (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  async intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Promise<Observable<any>> {
    const req = await context.switchToHttp().getRequest();
    const url = await req.param('url');

    const data = await this.redis.getBuffer(url);
    if (data == null) {
      if (await this.redis.set(`${url}_mutex`, url, 'EX', 3, 'NX')) {
        console.log('1');
        return next.handle().pipe(
          tap(async (result) => {
            await this.redis.set(url, result);
            await this.redis.del(`${url}_mutex`);
            return result;
          }),
        );
      }
      console.log('2');
      await this.sleep(100);
      return this.intercept(context, next);
    }
    console.log('3');
    return of(data);

    // const data = await this.redis.getBuffer(url)
    // if (data) {
    //     return of(data)
    // }
    // return next
    // .handle()
    // .pipe(
    //     tap(async (result) => {
    //         console.log('3')
    //         await this.redis.set(url, result)
    //         return result
    //     }),
    // );
  }
}

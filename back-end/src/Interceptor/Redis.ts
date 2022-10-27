import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { InjectRedis } from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';

@Injectable()
export class RedisInterceptor implements NestInterceptor {
    constructor(@InjectRedis() private readonly redis: Redis) { }
    async intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>> {
        let req = context.switchToHttp().getRequest();
        const { url } = req.params
        const data = await this.redis.getBuffer(url)
        if (data) {
            return of(data)
        }
        return next
            .handle()
            .pipe(
                tap((result) => {
                    this.redis.set(url, result)
                }),
            );
    }
}
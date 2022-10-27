import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class SendInterceptor implements NestInterceptor {
    async intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>> {
        const res = context.switchToHttp().getResponse()
        return next
            .handle()
            .pipe(
                tap((result) => {
                    res.send(result)
                }),
            );
    }
}
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import "reflect-metadata";

@Injectable()
export class SendInterceptor implements NestInterceptor {
    async intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>> {
        const res = await context.switchToHttp().getResponse()
        return next
            .handle()
            .pipe(
                tap(async (result) => {
                    console.log('4')
                    await res.setHeader( 'Content-Type', 'application/pdf');
                    await res.send(result)
                    return result
                }),
            );
    }
}
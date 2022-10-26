import { Controller, Get, Param, Response } from '@nestjs/common'
import { UserService } from './user.service';
import { InjectRedis } from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';

@Controller()
export class UserController {
    constructor(private userService: UserService,
        @InjectRedis() private readonly redis: Redis
    ) { }

    @Get('/get/:url')
    async create(@Response() res, @Param('url') url) {
        const a = await this.userService.createPDF(url);
        await this.redis.set('data', a);
        const test = await this.redis.getBuffer('data')
        // res.setHeader('Content-Length', 'Content-Type', 'application/pdf', test.length);
        // res.send(test)
        return test;
    }
}
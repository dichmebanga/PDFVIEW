import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { BullModule } from '@nestjs/bull';

@Module({
    controllers: [UserController],
    providers: [UserService]
})

export class UserModule { }
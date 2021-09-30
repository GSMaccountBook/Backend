import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getMoney(): any {
    console.log(process.env.DATABASE_NAME)
    return this.appService.getHello();
  }
}

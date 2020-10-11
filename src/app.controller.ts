import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Person } from './model/person';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getMe(): Person {
    return this.appService.getMe();
  }
}

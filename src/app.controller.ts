import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  constructor(
    @Inject('xxx') private readonly appService: AppService,
    private readonly UserService: UserService,
    @Inject('yyy') private readonly yyy: string[],
    @Inject('zzz') private readonly zzz: string,
  ) {}

  @Get()
  getHello(): string {
    return this.UserService.findAll();
  }
}

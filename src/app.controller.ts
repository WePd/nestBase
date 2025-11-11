import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger'

@Controller()
  @ApiBearerAuth()
@ApiTags('根接口')
export class AppController {
  constructor(
    @Inject('xxx') private readonly appService: AppService,
    private readonly UserService: UserService,
    @Inject('yyy') private readonly yyy: string[],
    @Inject('zzz') private readonly zzz: string,
  ) {}

  @Get()
  @ApiOperation({summary: '获取所有用户', description: '获取所有用户列表'})
  getHello(): string {
    return this.UserService.findAll();
  }
}

import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { ListService } from './list.service';
import { ListController } from './list.controller';
import { Logger } from '../middleware';

@Module({
  controllers: [ListController],
  providers: [ListService],
})
export class ListModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    // consumer.apply(Logger).forRoutes('list');  // 字符串模式
    // consumer.apply(Logger).forRoutes(ListController);  // 直接传入controller, 会将controller下的所有路由都拦截
    consumer
      .apply(Logger)
      .forRoutes({ path: 'list', method: RequestMethod.POST }); // 对象模式
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppService2 } from './app.service2';
import { UserModule } from './user/user.module';
import { ListModule } from './list/list.module';
import { ConfigModule } from './config/config.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [UserModule, ListModule, ConfigModule.forRoot({ path: '/kb' }), UploadModule],
  controllers: [AppController],
  providers: [
    AppService2,
    // 自定义名称
    {
      provide: 'xxx',
      useClass: AppService,
    },
    {
      provide: 'yyy',
      useValue: ['1', '2', '3'], // 自定义注入值， 数组/对象/字符串/数字 都可以
    },
    // 工厂模式
    {
      provide: 'zzz',
      inject: [AppService2],
      useFactory(appService2: AppService2) {
        return appService2.getHello();
      },
    },
  ],
})
export class AppModule {}

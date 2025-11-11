import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppService2 } from './app.service2';
import { UserModule } from './user/user.module';
import { ListModule } from './list/list.module';
import { ConfigModule } from './config/config.module';
import { UploadModule } from './upload/upload.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestormModule } from './testorm/testorm.module';
import { Testorm } from './testorm/entities/testorm.entity';

// mongodb://localhost:27017/
@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      url: 'mongodb://localhost:27017/',
      // port: 27017,
      // username: 'root',
      // password: '123456',
      database: 'mongodbLearning',
      entities: [Testorm],
      synchronize: true,
      autoLoadEntities: true,
    }),UserModule, ListModule, ConfigModule.forRoot({ path: '/kb' }), UploadModule, TestormModule],
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

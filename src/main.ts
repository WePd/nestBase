import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigModule } from './config/config.module';
import { Request, Response, NextFunction } from 'express';
import * as session from 'express-session';
import * as cors from 'cors';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { CommonResponse } from './common/response';
import { HttpFilter } from './common/filter';

const whiteList = ['/list'];

function globalMiddleWare(req: Request, res: Response, next: NextFunction) {
  console.log('globalMiddleWare...');
  console.log(req.originalUrl);
  // if (whiteList.includes(req.originalUrl)) {
  //   next();
  // } else {
  //   res.send('你没有权限访问');
  // }
  next();
}
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(
    session({
      secret: 'my-secret',
      name: 'kbId',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
      },
    }),
  );
  app.use(cors());
  // 静态资源访问目录
  app.useStaticAssets(join(__dirname, 'images'));
  // 全局中间件
  app.use(globalMiddleWare);

  // 响应拦截器
  app.useGlobalInterceptors(new CommonResponse());

  // 全局异常过滤器
  app.useGlobalFilters(new HttpFilter());
  await app.listen(3000);
}
bootstrap();

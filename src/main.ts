import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigModule } from './config/config.module';
import { Request, Response, NextFunction } from 'express';
import * as session from 'express-session';
import * as cors from 'cors';

const whiteList = ['/list'];

function globalMiddleWare(req: Request, res: Response, next: NextFunction) {
  console.log('globalMiddleWare...');
  console.log(req.originalUrl);
  if (whiteList.includes(req.originalUrl)) {
    next();
  } else {
    res.send('你没有权限访问');
  }
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
  // 全局中间件
  app.use(globalMiddleWare);
  await app.listen(3000);
}
bootstrap();

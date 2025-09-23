import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";


interface Data<T> {
  data: T
}

@Injectable()
export class CommonResponse<T> implements NestInterceptor {
  intercept(content: ExecutionContext, next: CallHandler) :Observable<Data<T>>{
    return next.handle().pipe(map(data => {
      return {
        code: 200,
        msg: 'success',
        data
      }
    }))
  }
}
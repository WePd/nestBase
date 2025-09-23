import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable()
export class AaaInterceptor implements NestInterceptor {
  constructor(private readonly userService: UserService) { }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(this.userService.findAll());

    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => console.log(`After... ${Date.now() - now}ms`)),
      );
  }
}
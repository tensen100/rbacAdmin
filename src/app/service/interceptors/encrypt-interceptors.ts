import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, empty} from 'rxjs';
import {catchError, map} from 'rxjs/internal/operators';
import {environment} from '../../../environments/environment';
import {ERR_MESSAGE, SUCCESS_STATUS, DATA_FIELD_NAME, STATUS_FIELD_NAME, MESSAGE_FIELD_NAME, HOST_URL} from '../../config';

const responseHandle = event => {
  if (event instanceof HttpResponse) {
    const {body, url} = event;
    if (!/\/api\//.test(url)) { // 非接口请求，不处理返回数据
      return event;
    }
    if (body[STATUS_FIELD_NAME] !== SUCCESS_STATUS) {
      throw body[MESSAGE_FIELD_NAME];
    }
    return event.clone({body: body[DATA_FIELD_NAME]});
  }
};

const handleErr = err => {
  let str = err;
  if (typeof err !== 'string') {
    switch (err.status) {
      case 0: {
        str = ERR_MESSAGE.NETWORK;
       break;
      }
      case 404: {
       str = ERR_MESSAGE.NOT_FOUND;
       break;
      }
      default: {
        str = ERR_MESSAGE.DEFAULT;
      }
    }
  }
  console.error(str);
  return empty();
};

@Injectable()
export class EncryptInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // 自动添加请求前缀
    const host = environment.production ? HOST_URL : '';
    const newReq = req.clone({
      url: host + req.url,
    });
    console.log(host + req.url);
    // 拦截响应
    return next.handle(newReq).pipe(
      map(responseHandle),
      catchError(handleErr)
    );
  }
}

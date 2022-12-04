import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/models.interfaces';

Injectable();
export class HtppInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let user: User;
    const userNull: User = { email: '', mdp: '', token: '' };
    let url: string = req.url;
    try {
      user = JSON.parse(localStorage.getItem('user'));
      user = user === null ? userNull : user;
    } catch (error) {
      user = userNull;
    }
    //
    if (url.endsWith('/')) {
      url = url.slice(0, url.length - 1);
    }
    //
    url = `${url}?id=${user.userIdAuth}&em=${user.userEmailAuth}&rl=${user.userRoleAuth}`;

    //
    const newReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + user.token),
      url,
    });

    return next.handle(newReq);
  }
}

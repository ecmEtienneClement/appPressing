import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RoutesNames } from '../routes.config';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class AuthAuthorization implements CanActivate {
  readonly routesNames = RoutesNames;
  constructor(private router: Router, private userService: UserService) {}

  canActivate(): boolean | Promise<boolean> {
    try {
      const token: string = this.userService.getTokenUser();

      if (token === null || token === undefined || token === '') {
        throw new Error('');
      }
      return true;
    } catch (error) {
      this.router.navigate([this.routesNames.home]);
      return false;
    }
  }
}

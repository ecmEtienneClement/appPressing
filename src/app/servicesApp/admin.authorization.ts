import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RoutesNames } from '../routes.config';
import { UserService } from './user.service';
import { EnumUserRole } from '../models/models.interfaces';
@Injectable({ providedIn: 'root' })
export class AdminAuthorization implements CanActivate {
  readonly routesNames = RoutesNames;
  constructor(private router: Router, private userService: UserService) {}
  canActivate(): boolean | Promise<boolean> {
    try {
      const role: string = this.userService.getRoleUser();
      const token: string = this.userService.getTokenUser();

      if (token === null || token === undefined || token === '') {
        this.router.navigate([this.routesNames.home]);
        return false;
      }
      //
      if (role !== EnumUserRole.admin) {
        throw new Error('');
      }

      return true;
    } catch (error) {
      this.router.navigate([this.routesNames.forbiden]);
      return false;
    }
  }
}

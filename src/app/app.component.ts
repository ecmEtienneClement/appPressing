import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EnumUserRole, EnumUserState } from './models/models.interfaces';
import { RoutesNames } from './routes.config';
import { UserService } from './servicesApp/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  sub: Subscription = new Subscription();
  readonly routesNames = RoutesNames;
  isAdmin = false;
  idUser = '';
  islogOut = false;
  constructor(private router: Router, private userService: UserService) {
    this.onIsAdmin();
  }

  ngOnInit() {
    this.onSubUser();
    if (this.userService.getTokenUser() === '') {
      this.islogOut = true;
    }
  }

  //TODO
  onIsAdmin() {
    this.isAdmin =
      this.userService.getRoleUser() === EnumUserRole.admin ? true : false;
    this.idUser = this.userService.getIdUser();
  }
  //TODO
  logOut() {
    this.userService.clearUser();
  }

  //TODO SUB USER
  onSubUser() {
    this.sub.add(
      this.userService.userSub.subscribe({
        next: (dataState) => {
          this.onIsAdmin();
          if (dataState === EnumUserState.logOut) {
            this.islogOut = true;
            this.router.navigate([this.routesNames.home]);
          }
        },
      })
    );
  }
  //TODO
  onNavProfil() {
    if (this.userService.getRoleUser() === EnumUserRole.admin) {
      this.router.navigate([
        this.routesNames.admins +
          this.routesNames.adminsInfo +
          this.userService.getIdUser(),
      ]);
    } else {
      this.router.navigate([
        this.routesNames.employers +
          this.routesNames.employersInfo +
          this.userService.getIdUser(),
      ]);
    }
  }
  //TODO
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

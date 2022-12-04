import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { EnumUserState, User } from '../models/models.interfaces';

@Injectable({ providedIn: 'root' })
export class UserService {
  public userSub: Subject<EnumUserState> = new Subject();

  //TODO
  public emitUserSub(userState: EnumUserState) {
    this.userSub.next(userState);
  }

  //TODO
  public getUser(): User {
    let user: User;
    const userNull: User = {
      email: '',
      mdp: '',
      token: '',
      userEmailAuth: '',
      userRoleAuth: '',
      userIdAuth: '',
      userNomAuth: '',
      userPrenomAuth: '',
    };
    user = JSON.parse(localStorage.getItem('user'));
    user = user === null ? userNull : user;
    return user;
  }
  //TODO
  public getNomUser(): string {
    return this.getUser().userNomAuth;
  }
  //TODO
  public getPrenomUser(): string {
    return this.getUser().userPrenomAuth;
  }
  //TODO
  public getRoleUser(): string {
    return this.getUser().userRoleAuth;
  }
  //TODO
  public getTokenUser(): string {
    return this.getUser().token;
  }
  //TODO
  public getIdUser(): string {
    return this.getUser().userIdAuth;
  }
  //TODO
  public getEmailUser(): string {
    return this.getUser().userEmailAuth;
  }
  //TODO
  public setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    this.emitUserSub(EnumUserState.logIn);
  }
  //TODO
  public clearUser() {
    localStorage.removeItem('user');
    this.emitUserSub(EnumUserState.logOut);
  }
}

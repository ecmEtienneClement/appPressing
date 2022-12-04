import { Injectable } from '@angular/core';
import { NameStateEntities } from 'src/app/appState/app.state';
import { User } from 'src/app/models/models.interfaces';
import { EntitiesSelectors } from 'src/app/modules/servicesModules/modules.ngrx.selectors';
import { ILoginState } from './login.state';

@Injectable({ providedIn: 'root' })
export class LoginSelectors extends EntitiesSelectors<User, ILoginState> {
  constructor() {
    super(NameStateEntities.login);
  }
}

import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/models.interfaces';
import { EntitiesEffects } from 'src/app/modules/servicesModules/modules.ngrx.effects';
import { LoginDataService } from '../services/login.data.service';
import { LoginActions } from '../ngrx/login.actions';

@Injectable()
export class LoginEffects extends EntitiesEffects<User> {
  constructor(
    store: Store,
    action$: Actions,
    loginActions: LoginActions,
    loginDataService: LoginDataService
  ) {
    super(store, action$, loginActions, loginDataService);
  }
}

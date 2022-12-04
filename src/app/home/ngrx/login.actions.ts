import { Injectable } from '@angular/core';
import { EntitiesNameAPI } from 'src/app/api.config';
import { User } from 'src/app/models/models.interfaces';
import { EntitiesActions } from 'src/app/modules/servicesModules/modules.ngrx.actions';

@Injectable({ providedIn: 'root' })
export class LoginActions extends EntitiesActions<User> {
  constructor() {
    super(EntitiesNameAPI.login);
  }
}

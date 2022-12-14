import { Injectable } from '@angular/core';
import { EntitiesNameAPI } from 'src/app/api.config';
import { Admin } from 'src/app/models/models.interfaces';
import { EntitiesActions } from '../../servicesModules/modules.ngrx.actions';

@Injectable()
export class AdminsActions extends EntitiesActions<Admin> {
  constructor() {
    super(EntitiesNameAPI.admins);
  }
}

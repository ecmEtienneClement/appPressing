import { Injectable } from '@angular/core';
import { NameStateEntities } from 'src/app/appState/app.state';
import { Admin } from 'src/app/models/models.interfaces';
import { EntitiesSelectors } from '../../servicesModules/modules.ngrx.selectors';
import { IAdminState } from './admins.state';

@Injectable({ providedIn: 'root' })
export class AdminsSelectors extends EntitiesSelectors<Admin, IAdminState> {
  constructor() {
    super(NameStateEntities.admin);
  }
}

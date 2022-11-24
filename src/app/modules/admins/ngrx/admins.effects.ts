import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Admin } from 'src/app/models/models.interfaces';
import { EntitiesEffects } from '../../servicesModules/modules.ngrx.effects';
import { AdminsDataService } from '../services/admins.data.service';
import { AdminsService } from '../services/admins.service';
import { AdminsActions } from './admins.actions';

@Injectable()
export class AdminsEffects extends EntitiesEffects<Admin> {
  constructor(
    store: Store,
    action$: Actions,
    adminsActions: AdminsActions,
    adminsDataService: AdminsDataService,
    adminsService: AdminsService
  ) {
    super(store, action$, adminsActions, adminsDataService, adminsService);
  }
}

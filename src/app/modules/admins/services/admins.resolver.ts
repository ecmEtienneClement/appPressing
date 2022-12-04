import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appState/app.state';
import { Admin } from 'src/app/models/models.interfaces';
import { EntitiesDataState } from '../../servicesModules/modules.entitiesDataState';
import { EntitiesResolver } from '../../servicesModules/modules.entitiesResolver';
import { AdminsActions } from '../ngrx/admins.actions';
import { AdminsSelectors } from '../ngrx/admins.selectors';
import { IAdminState } from '../ngrx/admins.state';

@Injectable()
export class AdminsResolver extends EntitiesResolver<Admin, IAdminState> {
  constructor(
    store: Store<AppState>,
    adminsActions: AdminsActions,
    adminsSelectors: AdminsSelectors,
    entitiesDataState: EntitiesDataState
  ) {
    super(store, adminsActions, adminsSelectors, entitiesDataState);
  }
}

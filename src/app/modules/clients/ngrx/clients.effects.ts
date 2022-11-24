import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Client } from 'src/app/models/models.interfaces';
import { EntitiesEffects } from '../../servicesModules/modules.ngrx.effects';
import { ClientsDataService } from '../services/clients-data.service';
import { ClientService } from '../services/clients.service';
import { ClientsActions } from './clients.actions';

@Injectable()
export class ClientsEffects extends EntitiesEffects<Client> {
  constructor(
    store: Store,
    action$: Actions,
    entitiesActionsService: ClientsActions,
    entitiesDataService: ClientsDataService,
    entitieservice: ClientService
  ) {
    super(
      store,
      action$,
      entitiesActionsService,
      entitiesDataService,
      entitieservice
    );
  }
}

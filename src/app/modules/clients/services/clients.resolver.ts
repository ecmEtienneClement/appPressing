import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appState/app.state';
import { Client } from 'src/app/models/models.interfaces';
import { EntitiesDataState } from '../../servicesModules/modules.entitiesDataState';
import { EntitiesResolver } from '../../servicesModules/modules.entitiesResolver';
import { ClientsActions } from '../ngrx/clients.actions';
import { ClientsSelectors } from '../ngrx/clients.selectors';
import { IClientsState } from '../ngrx/clients.state';

@Injectable()
export class ClientsResolver extends EntitiesResolver<Client, IClientsState> {
  constructor(
    store: Store<AppState>,
    clientsActions: ClientsActions,
    clientsSelectors: ClientsSelectors,
    entitiesDataState: EntitiesDataState
  ) {
    super(store, clientsActions, clientsSelectors, entitiesDataState);
  }
}

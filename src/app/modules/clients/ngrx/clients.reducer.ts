/* eslint-disable no-underscore-dangle */
import { Action } from '@ngrx/store';
import { Client } from 'src/app/models/models.interfaces';
import { EntitiesReducer } from '../../servicesModules/modules.ngrx.reducer';
import { ClientsActions } from './clients.actions';
import { IClientsState } from './clients.state';

class ClientsReducer extends EntitiesReducer<Client, IClientsState> {
  constructor(clientsActions: ClientsActions) {
    super(clientsActions, 'client');
  }
}

export class GetClientsReducer {
  private static intanceClientReducer: ClientsReducer = null;
  //TODO GET  REDUCER  POUR LE STOOR AVEC PARTERN SINGLETON AFIN D'AVOIR UNE SEULE INSTANCE
  public static getReducer(state: IClientsState, action: Action) {
    if (GetClientsReducer.intanceClientReducer == null) {
      GetClientsReducer.intanceClientReducer = new ClientsReducer(
        new ClientsActions()
      );
    }
    return GetClientsReducer.intanceClientReducer.entitiesFeactureReducer()(
      state,
      action
    );
  }
}

import { Injectable } from '@angular/core';
import { NameStateEntities } from 'src/app/appState/app.state';
import { Client } from 'src/app/models/models.interfaces';
import { EntitiesSelectors } from '../../servicesModules/modules.ngrx.selectors';
import { IClientsState } from './clients.state';

@Injectable()
export class ClientsSelectors extends EntitiesSelectors<Client, IClientsState> {
  constructor() {
    super(NameStateEntities.client);
  }
}

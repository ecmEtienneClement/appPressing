import { Injectable } from '@angular/core';
import { EntitiesNameAPI } from 'src/app/api.config';
import { Client } from 'src/app/models/models.interfaces';
import { EntitiesActions } from '../../servicesModules/modules.ngrx.actions';

@Injectable({ providedIn: 'root' })
export class ClientsActions extends EntitiesActions<Client> {
  constructor() {
    super(EntitiesNameAPI.clients);
  }
}

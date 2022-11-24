import { Injectable } from '@angular/core';
import { EntitiesNameAPI } from 'src/app/api.config';
import { InfoKilo } from 'src/app/models/models.interfaces';
import { EntitiesActions } from 'src/app/modules/servicesModules/modules.ngrx.actions';

@Injectable({ providedIn: 'root' })
export class InfosKiloActions extends EntitiesActions<InfoKilo> {
  constructor() {
    super(EntitiesNameAPI.infosKilo);
  }
}

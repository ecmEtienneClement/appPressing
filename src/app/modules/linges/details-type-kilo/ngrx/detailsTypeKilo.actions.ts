import { Injectable } from '@angular/core';
import { EntitiesNameAPI } from 'src/app/api.config';
import { DetailTypeKilo } from 'src/app/models/models.interfaces';
import { EntitiesActions } from 'src/app/modules/servicesModules/modules.ngrx.actions';

@Injectable({ providedIn: 'root' })
export class DetailsTypeKiloActions extends EntitiesActions<DetailTypeKilo> {
  constructor() {
    super(EntitiesNameAPI.detailsTypeKilo);
  }
}

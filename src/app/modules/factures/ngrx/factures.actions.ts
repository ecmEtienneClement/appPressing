import { Injectable } from '@angular/core';
import { EntitiesNameAPI } from 'src/app/api.config';
import { Facture } from 'src/app/models/models.interfaces';
import { EntitiesActions } from '../../servicesModules/modules.ngrx.actions';

@Injectable({ providedIn: 'root' })
export class FacturesActions extends EntitiesActions<Facture> {
  constructor() {
    super(EntitiesNameAPI.factures);
  }
}

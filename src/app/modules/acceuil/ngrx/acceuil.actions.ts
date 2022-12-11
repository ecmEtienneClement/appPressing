import { Injectable } from '@angular/core';
import { EntitiesNameAPI } from 'src/app/api.config';
import { EtatFinancier } from 'src/app/models/models.interfaces';
import { EntitiesActions } from 'src/app/modules/servicesModules/modules.ngrx.actions';

@Injectable({ providedIn: 'root' })
export class AcceuilActions extends EntitiesActions<EtatFinancier> {
  constructor() {
    super(EntitiesNameAPI.etatFinancier);
  }
}

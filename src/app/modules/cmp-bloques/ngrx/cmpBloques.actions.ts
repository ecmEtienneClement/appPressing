import { Injectable } from '@angular/core';
import { EntitiesNameAPI } from 'src/app/api.config';
import { Compte_bloquer } from 'src/app/models/models.interfaces';
import { EntitiesActions } from '../../servicesModules/modules.ngrx.actions';

@Injectable({ providedIn: 'root' })
export class CmpBloquesActions extends EntitiesActions<Compte_bloquer> {
  constructor() {
    super(EntitiesNameAPI.compteBloquers);
  }
}

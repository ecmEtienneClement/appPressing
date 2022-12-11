import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EtatFinancier } from 'src/app/models/models.interfaces';
import { EntitiesEffects } from 'src/app/modules/servicesModules/modules.ngrx.effects';
import { AcceuilDataService } from '../services/acceuil.data.service';
import { AcceuilService } from '../services/acceuil.service';
import { AcceuilActions } from './acceuil.actions';

@Injectable()
export class AcceuilEffects extends EntitiesEffects<EtatFinancier> {
  constructor(
    store: Store,
    action$: Actions,
    acceuilActions: AcceuilActions,
    acceuilDataService: AcceuilDataService,
    acceuilService: AcceuilService
  ) {
    super(store, action$, acceuilActions, acceuilDataService, acceuilService);
  }
}

import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Compte_bloquer } from 'src/app/models/models.interfaces';
import { EntitiesEffects } from '../../servicesModules/modules.ngrx.effects';
import { CmpBloquesDataService } from '../services/cmpBloques.data.service';
import { CmpBloquesService } from '../services/cmpBloques.service';
import { CmpBloquesActions } from './cmpBloques.actions';

@Injectable()
export class CmpBloquesEffects extends EntitiesEffects<Compte_bloquer> {
  constructor(
    store: Store,
    action$: Actions,
    cmpBloquesActions: CmpBloquesActions,
    cmpBloquesDataService: CmpBloquesDataService,
    cmpBloquesService: CmpBloquesService
  ) {
    super(
      store,
      action$,
      cmpBloquesActions,
      cmpBloquesDataService,
      cmpBloquesService,
    );
  }
}

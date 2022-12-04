import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appState/app.state';
import { Compte_bloquer } from 'src/app/models/models.interfaces';
import { EntitiesDataState } from '../../servicesModules/modules.entitiesDataState';
import { EntitiesResolver } from '../../servicesModules/modules.entitiesResolver';
import { CmpBloquesActions } from '../ngrx/cmpBloques.actions';
import { CmpBloquesSelectors } from '../ngrx/cmpBloques.selectors';
import { ICmpBloquesState } from '../ngrx/cmpBloques.state';

@Injectable()
export class CmpBloquesResolver extends EntitiesResolver<
  Compte_bloquer,
  ICmpBloquesState
> {
  constructor(
    store: Store<AppState>,
    cmpbloquesActions: CmpBloquesActions,
    cmpbloquesSelectors: CmpBloquesSelectors,
    entitiesDataState: EntitiesDataState
  ) {
    super(store, cmpbloquesActions, cmpbloquesSelectors, entitiesDataState);
  }
}

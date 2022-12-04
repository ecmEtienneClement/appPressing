import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appState/app.state';
import { DemandeDepense } from 'src/app/models/models.interfaces';
import { EntitiesDataState } from '../../servicesModules/modules.entitiesDataState';
import { EntitiesResolver } from '../../servicesModules/modules.entitiesResolver';
import { DmdDepensesActions } from '../ngrx/dmdDepenses.actions';
import { DmdDepensesSelectors } from '../ngrx/dmdDepenses.selectors';
import { IDmdDepenseState } from '../ngrx/dmdDepenses.state';

@Injectable()
export class DmdDepensesResolver extends EntitiesResolver<
  DemandeDepense,
  IDmdDepenseState
> {
  constructor(
    store: Store<AppState>,
    cmpbloquesActions: DmdDepensesActions,
    cmpbloquesSelectors: DmdDepensesSelectors,
    entitiesDataState: EntitiesDataState
  ) {
    super(store, cmpbloquesActions, cmpbloquesSelectors, entitiesDataState);
  }
}

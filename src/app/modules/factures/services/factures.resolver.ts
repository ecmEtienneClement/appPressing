import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appState/app.state';
import { Facture } from 'src/app/models/models.interfaces';
import { EntitiesDataState } from '../../servicesModules/modules.entitiesDataState';
import { EntitiesResolver } from '../../servicesModules/modules.entitiesResolver';
import { FacturesActions } from '../ngrx/factures.actions';
import { FacturesSelectors } from '../ngrx/factures.selectors';
import { IFactureState } from '../ngrx/factures.state';

@Injectable()
export class FacturesResolver extends EntitiesResolver<Facture, IFactureState> {
  constructor(
    store: Store<AppState>,
    facturesActions: FacturesActions,
    facturesSelectors: FacturesSelectors,
    entitiesDataState: EntitiesDataState
  ) {
    super(store, facturesActions, facturesSelectors, entitiesDataState);
  }
}

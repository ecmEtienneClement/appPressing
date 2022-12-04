import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appState/app.state';
import { Linge } from 'src/app/models/models.interfaces';
import { EntitiesDataState } from '../../servicesModules/modules.entitiesDataState';
import { EntitiesResolver } from '../../servicesModules/modules.entitiesResolver';
import { LingesActions } from '../ngrx/linges.actions';
import { LingesSelectors } from '../ngrx/linges.selectors';
import { ILingesState } from '../ngrx/linges.state';

@Injectable()
export class LingesResolver extends EntitiesResolver<Linge, ILingesState> {
  constructor(
    store: Store<AppState>,
    lingesActions: LingesActions,
    lingesSelectors: LingesSelectors,
    entitiesDataState: EntitiesDataState
  ) {
    super(store, lingesActions, lingesSelectors, entitiesDataState);
  }
}

import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { DemandeDepense } from 'src/app/models/models.interfaces';
import { EntitiesEffects } from '../../servicesModules/modules.ngrx.effects';
import { DmdDepensesDataService } from '../services/factures.data.service';
import { DmdDepensesService } from '../services/factures.service';
import { DmdDepensesActions } from './factures.actions';

@Injectable()
export class DmdDepensesEffects extends EntitiesEffects<DemandeDepense> {
  constructor(
    store: Store,
    action$: Actions,
    dmdDepensesActions: DmdDepensesActions,
    dmdDepensesDataService: DmdDepensesDataService,
    dmdDepensesService: DmdDepensesService,

  ) {
    super(
      store,
      action$,
      dmdDepensesActions,
      dmdDepensesDataService,
      dmdDepensesService,
    );
  }
}

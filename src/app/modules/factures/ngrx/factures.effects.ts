import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Facture } from 'src/app/models/models.interfaces';
import { EntitiesEffects } from '../../servicesModules/modules.ngrx.effects';
import { FacturesDataService } from '../services/factures.data.service';
import { FacturesService } from '../services/factures.service';
import { FacturesActions } from './factures.actions';

@Injectable()
export class FacturesEffects extends EntitiesEffects<Facture> {
  constructor(
    store: Store,
    action$: Actions,
    facturesActions: FacturesActions,
    facturesDataService: FacturesDataService,
    facturesService: FacturesService,
  ) {
    super(
      store,
      action$,
      facturesActions,
      facturesDataService,
      facturesService,
    );
  }
}

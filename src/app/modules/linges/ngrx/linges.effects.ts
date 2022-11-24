import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Linge } from 'src/app/models/models.interfaces';
import { EntitiesEffects } from 'src/app/modules/servicesModules/modules.ngrx.effects';
import { LingesDataService } from '../services/linges.data.service';
import { LingesService } from '../services/linges.service';
import { LingesActions } from './linges.actions';

@Injectable()
export class LingesEffects extends EntitiesEffects<Linge> {
  constructor(
    store: Store,
    action$: Actions,
    lingesActions: LingesActions,
    lingesDataService: LingesDataService,
    lingesService: LingesService
  ) {
    super(store, action$, lingesActions, lingesDataService, lingesService);
  }
}

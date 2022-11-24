import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { DetailTypeKilo } from 'src/app/models/models.interfaces';
import { EntitiesEffects } from 'src/app/modules/servicesModules/modules.ngrx.effects';
import { DetailsTypeKiloDataService } from '../services/detailsTypeKilo.data.service';
import { DetailsTypeKiloActions } from './detailsTypeKilo.actions';

@Injectable()
export class DetailsTypeKiloEffects extends EntitiesEffects<DetailTypeKilo> {
  constructor(
    store: Store,
    action$: Actions,
    detailsTypeKiloActions: DetailsTypeKiloActions,
    detailsTypeKiloDataService: DetailsTypeKiloDataService
  ) {
    super(store, action$, detailsTypeKiloActions, detailsTypeKiloDataService);
  }
}

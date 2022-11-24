import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { DetailTypePiece } from 'src/app/models/models.interfaces';
import { EntitiesEffects } from 'src/app/modules/servicesModules/modules.ngrx.effects';
import { DetailsTypePieceActions } from './detailsTypePiece.actions';
import { DetailsTypePieceDataService } from '../services/detailsTypePiece.data.service';

@Injectable()
export class DetailsTypePieceEffects extends EntitiesEffects<DetailTypePiece> {
  constructor(
    store: Store,
    action$: Actions,
    detailsTypePieceActions: DetailsTypePieceActions,
    detailsTypePieceDataService: DetailsTypePieceDataService
  ) {
    super(store, action$, detailsTypePieceActions, detailsTypePieceDataService);
  }
}

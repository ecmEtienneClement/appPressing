import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { DetailPiece } from 'src/app/models/models.interfaces';
import { EntitiesEffects } from 'src/app/modules/servicesModules/modules.ngrx.effects';
import { DetailsPieceDataService } from '../services/detailsPiece.data.service';
import { DetailsPieceActions } from './detailsPiece.actions';

@Injectable()
export class DetailsPieceEffects extends EntitiesEffects<DetailPiece> {
  constructor(
    store: Store,
    action$: Actions,
    detailsPieceActions: DetailsPieceActions,
    detailsPieceDataService: DetailsPieceDataService
  ) {
    super(store, action$, detailsPieceActions, detailsPieceDataService);
  }
}

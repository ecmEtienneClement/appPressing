import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { InfoPiece } from 'src/app/models/models.interfaces';
import { EntitiesEffects } from 'src/app/modules/servicesModules/modules.ngrx.effects';
import { InfosPiecesDataService } from '../services/infosPieces.data.service';
import { InfosPiecesService } from '../services/infosPieces.service';
import { InfosPiecesActions } from './infosPieces.actions';

@Injectable()
export class InfosPiecesEffects extends EntitiesEffects<InfoPiece> {
  constructor(
    store: Store,
    action$: Actions,
    infosPiecesActions: InfosPiecesActions,
    infosPiecesDataService: InfosPiecesDataService,
    infosPiecesService: InfosPiecesService
  ) {
    super(
      store,
      action$,
      infosPiecesActions,
      infosPiecesDataService,
      infosPiecesService
    );
  }
}

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appState/app.state';
import { InfoPiece } from 'src/app/models/models.interfaces';
import { EntitiesDataState } from 'src/app/modules/servicesModules/modules.entitiesDataState';
import { EntitiesResolver } from 'src/app/modules/servicesModules/modules.entitiesResolver';
import { InfosPiecesActions } from '../ngrx/infosPieces.actions';
import { InfosPiecesSelectors } from '../ngrx/infosPieces.selectors';
import { IInfosPiecesState } from '../ngrx/infosPieces.state';

@Injectable()
export class InfosPiecesResolver extends EntitiesResolver<
  InfoPiece,
  IInfosPiecesState
> {
  constructor(
    store: Store<AppState>,
    infospieceActions: InfosPiecesActions,
    infospieceSelectors: InfosPiecesSelectors,
    entitiesDataState: EntitiesDataState
  ) {
    super(store, infospieceActions, infospieceSelectors, entitiesDataState);
  }
}

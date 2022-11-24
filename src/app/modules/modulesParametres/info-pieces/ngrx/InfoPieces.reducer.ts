import { Action } from '@ngrx/store';
import { InfoPiece } from 'src/app/models/models.interfaces';
import { EntitiesReducer } from 'src/app/modules/servicesModules/modules.ngrx.reducer';
import { InfosPiecesActions } from './infosPieces.actions';
import { IInfosPiecesState } from './infosPieces.state';

class InfosPiecesReducer extends EntitiesReducer<InfoPiece, IInfosPiecesState> {
  constructor(infosPiecesActions: InfosPiecesActions) {
    super(infosPiecesActions, 'infos piece');
  }
}

//TODO GET  REDUCER  POUR LE STOOR AVEC PARTERN SINGLETON AFIN D'AVOIR UNE SEULE INSTANCE
export class GetInfosPiecesReducer {
  private static intanceInfosPiecesReducer: InfosPiecesReducer = null;
  public static getReducer(state: IInfosPiecesState, action: Action) {
    if (GetInfosPiecesReducer.intanceInfosPiecesReducer == null) {
      GetInfosPiecesReducer.intanceInfosPiecesReducer = new InfosPiecesReducer(
        new InfosPiecesActions()
      );
    }
    return GetInfosPiecesReducer.intanceInfosPiecesReducer.entitiesFeactureReducer()(
      state,
      action
    );
  }
}

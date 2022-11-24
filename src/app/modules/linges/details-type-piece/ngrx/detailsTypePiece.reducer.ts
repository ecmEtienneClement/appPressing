import { Action } from '@ngrx/store';
import { DetailTypePiece, Linge } from 'src/app/models/models.interfaces';
import { EntitiesReducer } from 'src/app/modules/servicesModules/modules.ngrx.reducer';
import { DetailsTypePieceActions } from './detailsTypePiece.actions';
import { IDetailsTypePieceState } from './detailsTypePiece.state';

class DetailsTypePieceReducer extends EntitiesReducer<
  DetailTypePiece,
  IDetailsTypePieceState
> {
  constructor(detailsTypePieceActions: DetailsTypePieceActions) {
    super(detailsTypePieceActions, 'details type piece');
  }
}

//TODO GET  REDUCER  POUR LE STOOR AVEC PARTERN SINGLETON AFIN D'AVOIR UNE SEULE INSTANCE
export class GetDetailsTypePieceReducer {
  private static intanceDetailsTypePieceReducer: DetailsTypePieceReducer = null;
  public static getReducer(state: IDetailsTypePieceState, action: Action) {
    if (GetDetailsTypePieceReducer.intanceDetailsTypePieceReducer == null) {
      GetDetailsTypePieceReducer.intanceDetailsTypePieceReducer =
        new DetailsTypePieceReducer(new DetailsTypePieceActions());
    }
    return GetDetailsTypePieceReducer.intanceDetailsTypePieceReducer.entitiesFeactureReducer()(
      state,
      action
    );
  }
}

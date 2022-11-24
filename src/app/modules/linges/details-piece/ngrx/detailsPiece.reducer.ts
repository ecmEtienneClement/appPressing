import { Action } from '@ngrx/store';
import { DetailPiece } from 'src/app/models/models.interfaces';
import { EntitiesReducer } from 'src/app/modules/servicesModules/modules.ngrx.reducer';
import { DetailsPieceActions } from './detailsPiece.actions';
import { IDetailsPieceState } from './detailsPiece.state';


class DetailsPieceReducer extends EntitiesReducer<
  DetailPiece,
  IDetailsPieceState
> {
  constructor(detailsPieceActions: DetailsPieceActions) {
    super(detailsPieceActions, 'details piece');
  }
}

//TODO GET  REDUCER  POUR LE STOOR AVEC PARTERN SINGLETON AFIN D'AVOIR UNE SEULE INSTANCE
export class GetDetailsPieceReducer {
  private static intanceDetailsPieceReducer: DetailsPieceReducer = null;
  public static getReducer(state: IDetailsPieceState, action: Action) {
    if (GetDetailsPieceReducer.intanceDetailsPieceReducer == null) {
      GetDetailsPieceReducer.intanceDetailsPieceReducer =
        new DetailsPieceReducer(new DetailsPieceActions());
    }
    return GetDetailsPieceReducer.intanceDetailsPieceReducer.entitiesFeactureReducer()(
      state,
      action
    );
  }
}

import { Action } from '@ngrx/store';
import { Linge } from 'src/app/models/models.interfaces';
import { EntitiesReducer } from 'src/app/modules/servicesModules/modules.ngrx.reducer';
import { LingesActions } from './linges.actions';
import { ILingesState } from './linges.state';

class LingesReducer extends EntitiesReducer<Linge, ILingesState> {
  constructor(lingesActions: LingesActions) {
    super(lingesActions, 'linge');
  }
}

//TODO GET  REDUCER  POUR LE STOOR AVEC PARTERN SINGLETON AFIN D'AVOIR UNE SEULE INSTANCE
export class GetLingesReducer {
  private static intanceLingesReducer: LingesReducer = null;
  public static getReducer(state: ILingesState, action: Action) {
    if (GetLingesReducer.intanceLingesReducer == null) {
      GetLingesReducer.intanceLingesReducer = new LingesReducer(
        new LingesActions()
      );
    }
    return GetLingesReducer.intanceLingesReducer.entitiesFeactureReducer()(
      state,
      action
    );
  }
}

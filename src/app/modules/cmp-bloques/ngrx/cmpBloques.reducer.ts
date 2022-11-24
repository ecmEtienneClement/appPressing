import { Action } from '@ngrx/store';
import { Compte_bloquer } from 'src/app/models/models.interfaces';
import { EntitiesReducer } from '../../servicesModules/modules.ngrx.reducer';
import { CmpBloquesActions } from './cmpBloques.actions';
import { ICmpBloquesState } from './cmpBloques.state';

class CmpBloquesReducer extends EntitiesReducer<
  Compte_bloquer,
  ICmpBloquesState
> {
  constructor(cmpBloquesActions: CmpBloquesActions) {
    super(cmpBloquesActions, 'compte');
  }
}

//TODO GET  REDUCER  POUR LE STOOR AVEC PARTERN SINGLETON AFIN D'AVOIR UNE SEULE INSTANCE
export class GetCmpBloquesReducer {
  private static intanceCmpBloquesReducer: CmpBloquesReducer = null;
  public static getReducer(state: ICmpBloquesState, action: Action) {
    if (GetCmpBloquesReducer.intanceCmpBloquesReducer == null) {
      GetCmpBloquesReducer.intanceCmpBloquesReducer = new CmpBloquesReducer(
        new CmpBloquesActions()
      );
    }
    return GetCmpBloquesReducer.intanceCmpBloquesReducer.entitiesFeactureReducer()(
      state,
      action
    );
  }
}

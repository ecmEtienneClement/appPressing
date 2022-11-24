import { Action } from '@ngrx/store';
import { Facture } from 'src/app/models/models.interfaces';
import { EntitiesReducer } from '../../servicesModules/modules.ngrx.reducer';
import { FacturesActions } from './factures.actions';
import { IFactureState } from './factures.state';

class FacturesReducer extends EntitiesReducer<Facture, IFactureState> {
  constructor(facturesActions: FacturesActions) {
    super(facturesActions, 'facture');
  }
}

//TODO GET  REDUCER  POUR LE STOOR AVEC PARTERN SINGLETON AFIN D'AVOIR UNE SEULE INSTANCE
export class GetFacturesReducer {
  private static intanceFactureReducer: FacturesReducer = null;
  public static getReducer(state: IFactureState, action: Action) {
    if (GetFacturesReducer.intanceFactureReducer == null) {
      GetFacturesReducer.intanceFactureReducer = new FacturesReducer(
        new FacturesActions()
      );
    }
    return GetFacturesReducer.intanceFactureReducer.entitiesFeactureReducer()(
      state,
      action
    );
  }
}

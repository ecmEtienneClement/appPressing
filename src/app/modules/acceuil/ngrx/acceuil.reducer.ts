import { Action } from '@ngrx/store';
import { EtatFinancier } from 'src/app/models/models.interfaces';
import { EntitiesReducer } from 'src/app/modules/servicesModules/modules.ngrx.reducer';
import { AcceuilActions } from './acceuil.actions';
import { IEtatFinancierState } from './acceuil.state';

class AcceuilReducer extends EntitiesReducer<
  EtatFinancier,
  IEtatFinancierState
> {
  constructor(acceuilActions: AcceuilActions) {
    super(acceuilActions, 'etat financier');
  }
}

//TODO GET  REDUCER  POUR LE STOOR AVEC PARTERN SINGLETON AFIN D'AVOIR UNE SEULE INSTANCE
export class GetAcceuilReducer {
  private static intanceAcceuilReducer: AcceuilReducer = null;
  public static getReducer(state: IEtatFinancierState, action: Action) {
    if (GetAcceuilReducer.intanceAcceuilReducer == null) {
      GetAcceuilReducer.intanceAcceuilReducer = new AcceuilReducer(
        new AcceuilActions()
      );
    }
    return GetAcceuilReducer.intanceAcceuilReducer.entitiesFeactureReducer()(
      state,
      action
    );
  }
}

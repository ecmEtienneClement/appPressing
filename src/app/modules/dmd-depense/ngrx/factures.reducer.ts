import { Action } from '@ngrx/store';
import { DemandeDepense } from 'src/app/models/models.interfaces';
import { EntitiesReducer } from '../../servicesModules/modules.ngrx.reducer';
import { DmdDepensesActions } from './factures.actions';
import { IDmdDepenseState } from './factures.state';

class DmdDepensesReducer extends EntitiesReducer<
  DemandeDepense,
  IDmdDepenseState
> {
  constructor(dmdDepensesActions: DmdDepensesActions) {
    super(dmdDepensesActions, 'demande depense');
  }
}

//TODO GET  REDUCER  POUR LE STOOR AVEC PARTERN SINGLETON AFIN D'AVOIR UNE SEULE INSTANCE
export class GetDmdDepensesReducer {
  private static intanceDmdDepensesReducer: DmdDepensesReducer = null;
  public static getReducer(state: IDmdDepenseState, action: Action) {
    if (GetDmdDepensesReducer.intanceDmdDepensesReducer == null) {
      GetDmdDepensesReducer.intanceDmdDepensesReducer = new DmdDepensesReducer(
        new DmdDepensesActions()
      );
    }
    return GetDmdDepensesReducer.intanceDmdDepensesReducer.entitiesFeactureReducer()(
      state,
      action
    );
  }
}

import { Action } from '@ngrx/store';
import { Employe } from 'src/app/models/models.interfaces';
import { EntitiesReducer } from '../../servicesModules/modules.ngrx.reducer';
import { EmployersActions } from './employer.action';
import { IEmployersState } from './employers.state';

class EmployersReducer extends EntitiesReducer<Employe, IEmployersState> {
  constructor(employersActions: EmployersActions) {
    super(employersActions, 'employer');
  }
}
export class GetEmployersReducer {
  private static intanceEmployerReducer: EmployersReducer = null;
  //TODO GET  REDUCER  POUR LE STOOR AVEC PARTERN SINGLETON AFIN D'AVOIR UNE SEULE INSTANCE
  public static getReducer(state: IEmployersState, action: Action) {
    if (GetEmployersReducer.intanceEmployerReducer == null) {
      GetEmployersReducer.intanceEmployerReducer = new EmployersReducer(
        new EmployersActions()
      );
    }
    return GetEmployersReducer.intanceEmployerReducer.entitiesFeactureReducer()(
      state,
      action
    );
  }
}

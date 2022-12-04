import { Action } from '@ngrx/store';
import { User } from 'src/app/models/models.interfaces';
import { EntitiesReducer } from 'src/app/modules/servicesModules/modules.ngrx.reducer';
import { LoginActions } from './login.actions';
import { ILoginState } from './login.state';

class LoginReducer extends EntitiesReducer<User, ILoginState> {
  constructor(detailsTypeKiloActions: LoginActions) {
    super(detailsTypeKiloActions, 'user');
  }
}

//TODO GET  REDUCER  POUR LE STOOR AVEC PARTERN SINGLETON AFIN D'AVOIR UNE SEULE INSTANCE
export class GetLoginReducer {
  private static intanceLoginReducer: LoginReducer = null;
  public static getReducer(state: ILoginState, action: Action) {
    if (GetLoginReducer.intanceLoginReducer == null) {
      GetLoginReducer.intanceLoginReducer = new LoginReducer(
        new LoginActions()
      );
    }
    return GetLoginReducer.intanceLoginReducer.entitiesFeactureReducer()(
      state,
      action
    );
  }
}

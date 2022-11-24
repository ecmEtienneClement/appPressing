import { Action } from '@ngrx/store';
import { Admin } from 'src/app/models/models.interfaces';
import { EntitiesReducer } from '../../servicesModules/modules.ngrx.reducer';
import { AdminsActions } from './admins.actions';
import { IAdminState } from './admins.state';

class AdminsReducer extends EntitiesReducer<Admin, IAdminState> {
  constructor(adminsActions: AdminsActions) {
    super(adminsActions, 'admin');
  }
}

//TODO GET  REDUCER  POUR LE STOOR AVEC PARTERN SINGLETON AFIN D'AVOIR UNE SEULE INSTANCE
export class GetAdminsReducer {
  private static intanceAdminReducer: AdminsReducer = null;
  public static getReducer(state: IAdminState, action: Action) {
    if (GetAdminsReducer.intanceAdminReducer == null) {
      GetAdminsReducer.intanceAdminReducer = new AdminsReducer(
        new AdminsActions()
      );
    }
    return GetAdminsReducer.intanceAdminReducer.entitiesFeactureReducer()(
      state,
      action
    );
  }
}

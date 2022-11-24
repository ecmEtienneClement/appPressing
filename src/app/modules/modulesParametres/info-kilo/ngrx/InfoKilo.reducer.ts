import { Action } from '@ngrx/store';
import { InfoKilo } from 'src/app/models/models.interfaces';
import { EntitiesReducer } from 'src/app/modules/servicesModules/modules.ngrx.reducer';
import { InfosKiloActions } from './infosKilo.actions';
import { IInfosKiloState } from './infosKilo.state';

class InfosKiloReducer extends EntitiesReducer<InfoKilo, IInfosKiloState> {
  constructor(infosKiloActions: InfosKiloActions) {
    super(infosKiloActions, 'infos kilo');
  }
}

//TODO GET  REDUCER  POUR LE STOOR AVEC PARTERN SINGLETON AFIN D'AVOIR UNE SEULE INSTANCE
export class GetInfosKiloReducer {
  private static intanceInfosKiloReducer: InfosKiloReducer = null;
  public static getReducer(state: IInfosKiloState, action: Action) {
    if (GetInfosKiloReducer.intanceInfosKiloReducer == null) {
      GetInfosKiloReducer.intanceInfosKiloReducer = new InfosKiloReducer(
        new InfosKiloActions()
      );
    }
    return GetInfosKiloReducer.intanceInfosKiloReducer.entitiesFeactureReducer()(
      state,
      action
    );
  }
}

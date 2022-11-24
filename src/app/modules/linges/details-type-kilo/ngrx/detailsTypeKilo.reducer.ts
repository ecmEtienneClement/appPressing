import { Action } from '@ngrx/store';
import { DetailTypeKilo } from 'src/app/models/models.interfaces';
import { EntitiesReducer } from 'src/app/modules/servicesModules/modules.ngrx.reducer';
import { DetailsTypeKiloActions } from './detailsTypeKilo.actions';
import { IDetailsTypeKiloState } from './detailsTypeKilo.state';

class DetailsTypeKiloReducer extends EntitiesReducer<
  DetailTypeKilo,
  IDetailsTypeKiloState
> {
  constructor(detailsTypeKiloActions: DetailsTypeKiloActions) {
    super(detailsTypeKiloActions, 'details type kilo');
  }
}

//TODO GET  REDUCER  POUR LE STOOR AVEC PARTERN SINGLETON AFIN D'AVOIR UNE SEULE INSTANCE
export class GetDetailsTypeKiloReducer {
  private static intanceDetailsTypeKiloReducer: DetailsTypeKiloReducer = null;
  public static getReducer(state: IDetailsTypeKiloState, action: Action) {
    if (GetDetailsTypeKiloReducer.intanceDetailsTypeKiloReducer == null) {
      GetDetailsTypeKiloReducer.intanceDetailsTypeKiloReducer =
        new DetailsTypeKiloReducer(new DetailsTypeKiloActions());
    }
    return GetDetailsTypeKiloReducer.intanceDetailsTypeKiloReducer.entitiesFeactureReducer()(
      state,
      action
    );
  }
}

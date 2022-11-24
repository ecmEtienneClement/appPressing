import { Action } from '@ngrx/store';
import { TypeLinge } from 'src/app/models/models.interfaces';
import { EntitiesReducer } from 'src/app/modules/servicesModules/modules.ngrx.reducer';
import { TypesLingesActions } from './typesLinges.actions';
import { ITypesLingesState } from './typesLinges.state';

class TypesLingesReducer extends EntitiesReducer<TypeLinge, ITypesLingesState> {
  constructor(typesLingesActions: TypesLingesActions) {
    super(typesLingesActions, 'type linge');
  }
}

//TODO GET  REDUCER  POUR LE STOOR AVEC PARTERN SINGLETON AFIN D'AVOIR UNE SEULE INSTANCE
export class GetTypesLingesReducer {
  private static intanceTypesLingesReducer: TypesLingesReducer = null;
  public static getReducer(state: ITypesLingesState, action: Action) {
    if (GetTypesLingesReducer.intanceTypesLingesReducer == null) {
      GetTypesLingesReducer.intanceTypesLingesReducer = new TypesLingesReducer(
        new TypesLingesActions()
      );
    }
    return GetTypesLingesReducer.intanceTypesLingesReducer.entitiesFeactureReducer()(
      state,
      action
    );
  }
}

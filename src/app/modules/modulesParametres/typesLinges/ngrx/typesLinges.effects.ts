import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TypeLinge } from 'src/app/models/models.interfaces';
import { EntitiesEffects } from 'src/app/modules/servicesModules/modules.ngrx.effects';
import { TypesLingesDataService } from '../services/typesLinges.data.service';
import { TypesLingesService } from '../services/typesLinges.service';
import { TypesLingesActions } from './typesLinges.actions';

@Injectable()
export class TypesLingesEffects extends EntitiesEffects<TypeLinge> {
  constructor(
    store: Store,
    action$: Actions,
    typesLingesActions: TypesLingesActions,
    typesLingesDataService: TypesLingesDataService,
    typesLingesService: TypesLingesService
  ) {
    super(
      store,
      action$,
      typesLingesActions,
      typesLingesDataService,
      typesLingesService
    );
  }
}

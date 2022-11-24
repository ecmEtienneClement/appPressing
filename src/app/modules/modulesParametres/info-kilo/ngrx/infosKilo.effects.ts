import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { InfoKilo } from 'src/app/models/models.interfaces';
import { EntitiesEffects } from 'src/app/modules/servicesModules/modules.ngrx.effects';
import { InfosKiloDataService } from '../services/infosKilo.data.service';
import { InfosKiloService } from '../services/infosKilo.service';
import { InfosKiloActions } from './infosKilo.actions';

@Injectable()
export class InfosKiloEffects extends EntitiesEffects<InfoKilo> {
  constructor(
    store: Store,
    action$: Actions,
    infosKilosActions: InfosKiloActions,
    infosKilosDataService: InfosKiloDataService,
    infosKilosService: InfosKiloService
  ) {
    super(
      store,
      action$,
      infosKilosActions,
      infosKilosDataService,
      infosKilosService
    );
  }
}

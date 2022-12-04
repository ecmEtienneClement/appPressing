import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Employe } from 'src/app/models/models.interfaces';
import { EntitiesEffects } from '../../servicesModules/modules.ngrx.effects';
import { EmployerService } from '../services.ts/employers.service';
import { EmployesDataService } from '../services.ts/employers.data.service';
import { EmployersActions } from './employer.action';

@Injectable()
export class EmployersEffects extends EntitiesEffects<Employe> {
  constructor(
    store: Store,

    action$: Actions,
    employersActions: EmployersActions,
    employersDataService: EmployesDataService,
    employerService: EmployerService,
  ) {
    super(
      store,
      action$,
      employersActions,
      employersDataService,
      employerService,
    );
  }
}

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appState/app.state';
import { Employe } from 'src/app/models/models.interfaces';
import { EntitiesDataState } from '../../servicesModules/modules.entitiesDataState';
import { EntitiesResolver } from '../../servicesModules/modules.entitiesResolver';
import { EmployersActions } from '../ngrx/employer.action';
import { EmployersSelectors } from '../ngrx/employers.selectors';
import { IEmployersState } from '../ngrx/employers.state';

@Injectable()
export class EmployersResolver extends EntitiesResolver<
  Employe,
  IEmployersState
> {
  constructor(
    store: Store<AppState>,
    employersActions: EmployersActions,
    employersSelectors: EmployersSelectors,
    entitiesDataState: EntitiesDataState
  ) {
    super(store, employersActions, employersSelectors, entitiesDataState);
  }
}

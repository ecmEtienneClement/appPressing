import { Injectable } from '@angular/core';
import { NameStateEntities } from 'src/app/appState/app.state';
import { Employe } from 'src/app/models/models.interfaces';
import { EntitiesSelectors } from '../../servicesModules/modules.ngrx.selectors';
import { IEmployersState } from './employers.state';

@Injectable({ providedIn: 'root' })
export class EmployersSelectors extends EntitiesSelectors<
  Employe,
  IEmployersState
> {
  constructor() {
    super(NameStateEntities.employer);
  }
}

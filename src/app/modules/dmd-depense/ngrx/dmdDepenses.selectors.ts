import { Injectable } from '@angular/core';
import { NameStateEntities } from 'src/app/appState/app.state';
import { DemandeDepense } from 'src/app/models/models.interfaces';
import { EntitiesSelectors } from '../../servicesModules/modules.ngrx.selectors';
import { IDmdDepenseState } from './dmdDepenses.state';

@Injectable({ providedIn: 'root' })
export class DmdDepensesSelectors extends EntitiesSelectors<
  DemandeDepense,
  IDmdDepenseState
> {
  constructor() {
    super(NameStateEntities.dmdDepense);
  }
}

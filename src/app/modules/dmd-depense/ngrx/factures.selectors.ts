import { Injectable } from '@angular/core';
import { NameStateEntities } from 'src/app/appState/app.state';
import { DemandeDepense } from 'src/app/models/models.interfaces';
import { EntitiesSelectors } from '../../servicesModules/modules.ngrx.selectors';
import { IDmdDepenseState } from './factures.state';

@Injectable()
export class DmdDepensesSelectors extends EntitiesSelectors<
  DemandeDepense,
  IDmdDepenseState
> {
  constructor() {
    super(NameStateEntities.dmdDepense);
  }
}

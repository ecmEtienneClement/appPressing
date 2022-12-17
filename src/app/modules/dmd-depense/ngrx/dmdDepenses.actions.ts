import { Injectable } from '@angular/core';
import { EntitiesNameAPI } from 'src/app/api.config';
import { DemandeDepense } from 'src/app/models/models.interfaces';
import { EntitiesActions } from '../../servicesModules/modules.ngrx.actions';

@Injectable({ providedIn: 'root' })
export class DmdDepensesActions extends EntitiesActions<DemandeDepense> {
  constructor() {
    super(EntitiesNameAPI.dmdDepenses);
  }
}

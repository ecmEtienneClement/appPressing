import { Injectable } from '@angular/core';
import { EntitiesNameAPI } from 'src/app/api.config';
import { Employe } from 'src/app/models/models.interfaces';
import { EntitiesActions } from '../../servicesModules/modules.ngrx.actions';

@Injectable({ providedIn: 'root' })
export class EmployersActions extends EntitiesActions<Employe> {
  constructor() {
    super(EntitiesNameAPI.employers);
  }
}

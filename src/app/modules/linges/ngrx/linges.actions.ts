import { Injectable } from '@angular/core';
import { EntitiesNameAPI } from 'src/app/api.config';
import { Linge } from 'src/app/models/models.interfaces';
import { EntitiesActions } from 'src/app/modules/servicesModules/modules.ngrx.actions';

@Injectable({ providedIn: 'root' })
export class LingesActions extends EntitiesActions<Linge> {
  constructor() {
    super(EntitiesNameAPI.linges);
  }
}

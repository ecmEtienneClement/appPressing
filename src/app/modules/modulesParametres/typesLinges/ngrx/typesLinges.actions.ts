import { Injectable } from '@angular/core';
import { EntitiesNameAPI } from 'src/app/api.config';
import { TypeLinge } from 'src/app/models/models.interfaces';
import { EntitiesActions } from 'src/app/modules/servicesModules/modules.ngrx.actions';

@Injectable({ providedIn: 'root' })
export class TypesLingesActions extends EntitiesActions<TypeLinge> {
  constructor() {
    super(EntitiesNameAPI.typesLinges);
  }
}

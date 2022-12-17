import { Injectable } from '@angular/core';
import { NameStateEntities } from 'src/app/appState/app.state';
import { Compte_bloquer } from 'src/app/models/models.interfaces';
import { EntitiesSelectors } from '../../servicesModules/modules.ngrx.selectors';
import { ICmpBloquesState } from './cmpBloques.state';

@Injectable({ providedIn: 'root' })
export class CmpBloquesSelectors extends EntitiesSelectors<
  Compte_bloquer,
  ICmpBloquesState
> {
  constructor() {
    super(NameStateEntities.cmpBloque);
  }
}

import { Injectable } from '@angular/core';
import { NameStateEntities } from 'src/app/appState/app.state';
import { TypeLinge } from 'src/app/models/models.interfaces';
import { EntitiesSelectors } from 'src/app/modules/servicesModules/modules.ngrx.selectors';
import { ITypesLingesState } from './typesLinges.state';

@Injectable({ providedIn: 'root' })
export class TypesLingesSelectors extends EntitiesSelectors<
  TypeLinge,
  ITypesLingesState
> {
  constructor() {
    super(NameStateEntities.typeLinge);
  }
}

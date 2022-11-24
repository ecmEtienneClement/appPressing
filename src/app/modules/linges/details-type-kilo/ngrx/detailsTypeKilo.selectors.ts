import { Injectable } from '@angular/core';
import { NameStateEntities } from 'src/app/appState/app.state';
import { DetailTypeKilo } from 'src/app/models/models.interfaces';
import { EntitiesSelectors } from 'src/app/modules/servicesModules/modules.ngrx.selectors';
import { IDetailsTypeKiloState } from './detailsTypeKilo.state';

@Injectable({ providedIn: 'root' })
export class DetailsTypeKiloSelectors extends EntitiesSelectors<
  DetailTypeKilo,
  IDetailsTypeKiloState
> {
  constructor() {
    super(NameStateEntities.detailsTypeKilo);
  }
}

import { Injectable } from '@angular/core';
import { NameStateEntities } from 'src/app/appState/app.state';
import { Facture } from 'src/app/models/models.interfaces';
import { EntitiesSelectors } from '../../servicesModules/modules.ngrx.selectors';
import { IFactureState } from './factures.state';

@Injectable()
export class FacturesSelectors extends EntitiesSelectors<
  Facture,
  IFactureState
> {
  constructor() {
    super(NameStateEntities.facture);
  }
}

import { Injectable } from '@angular/core';
import { NameStateEntities } from 'src/app/appState/app.state';
import { EtatFinancier } from 'src/app/models/models.interfaces';
import { EntitiesSelectors } from 'src/app/modules/servicesModules/modules.ngrx.selectors';
import { IEtatFinancierState } from './acceuil.state';

@Injectable({ providedIn: 'root' })
export class AcceuilSelectors extends EntitiesSelectors<
  EtatFinancier,
  IEtatFinancierState
> {
  constructor() {
    super(NameStateEntities.etatFinancier);
  }
}

import { Injectable } from '@angular/core';
import { NameStateEntities } from 'src/app/appState/app.state';
import { InfoKilo } from 'src/app/models/models.interfaces';
import { EntitiesSelectors } from 'src/app/modules/servicesModules/modules.ngrx.selectors';
import { IInfosKiloState } from './infosKilo.state';

@Injectable({ providedIn: 'root' })
export class InfosKiloSelectors extends EntitiesSelectors<
  InfoKilo,
  IInfosKiloState
> {
  constructor() {
    super(NameStateEntities.infosKilo);
  }
}

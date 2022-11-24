import { Injectable } from '@angular/core';
import { NameStateEntities } from 'src/app/appState/app.state';
import { Linge } from 'src/app/models/models.interfaces';
import { EntitiesSelectors } from 'src/app/modules/servicesModules/modules.ngrx.selectors';
import { ILingesState } from './linges.state';

@Injectable({ providedIn: 'root' })
export class LingesSelectors extends EntitiesSelectors<Linge, ILingesState> {
  constructor() {
    super(NameStateEntities.linges);
  }
}

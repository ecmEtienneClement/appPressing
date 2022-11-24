import { Injectable } from '@angular/core';
import { NameStateEntities } from 'src/app/appState/app.state';
import { InfoPiece } from 'src/app/models/models.interfaces';
import { EntitiesSelectors } from 'src/app/modules/servicesModules/modules.ngrx.selectors';
import { IInfosPiecesState } from './infosPieces.state';

@Injectable({ providedIn: 'root' })
export class InfosPiecesSelectors extends EntitiesSelectors<
  InfoPiece,
  IInfosPiecesState
> {
  constructor() {
    super(NameStateEntities.infosPiece);
  }
}

import { Injectable } from '@angular/core';
import { NameStateEntities } from 'src/app/appState/app.state';
import { DetailTypePiece } from 'src/app/models/models.interfaces';
import { EntitiesSelectors } from 'src/app/modules/servicesModules/modules.ngrx.selectors';
import { IDetailsTypePieceState } from './detailsTypePiece.state';

@Injectable({ providedIn: 'root' })
export class DetailsTypePieceSelectors extends EntitiesSelectors<
  DetailTypePiece,
  IDetailsTypePieceState
> {
  constructor() {
    super(NameStateEntities.detailsTypePiece);
  }
}

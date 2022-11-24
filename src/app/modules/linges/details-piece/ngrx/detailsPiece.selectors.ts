import { Injectable } from '@angular/core';
import { NameStateEntities } from 'src/app/appState/app.state';
import { DetailPiece } from 'src/app/models/models.interfaces';
import { EntitiesSelectors } from 'src/app/modules/servicesModules/modules.ngrx.selectors';
import { IDetailsPieceState } from './detailsPiece.state';

@Injectable({ providedIn: 'root' })
export class DetailsPieceSelectors extends EntitiesSelectors<
  DetailPiece,
  IDetailsPieceState
> {
  constructor() {
    super(NameStateEntities.detailsPiece);
  }
}

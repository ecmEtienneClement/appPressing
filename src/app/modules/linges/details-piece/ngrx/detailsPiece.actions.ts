import { Injectable } from '@angular/core';
import { EntitiesNameAPI } from 'src/app/api.config';
import { DetailPiece } from 'src/app/models/models.interfaces';
import { EntitiesActions } from 'src/app/modules/servicesModules/modules.ngrx.actions';

@Injectable({ providedIn: 'root' })
export class DetailsPieceActions extends EntitiesActions<DetailPiece> {
  constructor() {
    super(EntitiesNameAPI.detailsPiece);
  }
}

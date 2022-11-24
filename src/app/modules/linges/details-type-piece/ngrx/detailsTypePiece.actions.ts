import { Injectable } from '@angular/core';
import { EntitiesNameAPI } from 'src/app/api.config';
import { DetailTypePiece } from 'src/app/models/models.interfaces';
import { EntitiesActions } from 'src/app/modules/servicesModules/modules.ngrx.actions';

@Injectable({ providedIn: 'root' })
export class DetailsTypePieceActions extends EntitiesActions<DetailTypePiece> {
  constructor() {
    super(EntitiesNameAPI.detailsTypePiece);
  }
}

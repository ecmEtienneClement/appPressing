import { Injectable } from '@angular/core';
import { EntitiesNameAPI } from 'src/app/api.config';
import { InfoPiece } from 'src/app/models/models.interfaces';
import { EntitiesActions } from 'src/app/modules/servicesModules/modules.ngrx.actions';

@Injectable({ providedIn: 'root' })
export class InfosPiecesActions extends EntitiesActions<InfoPiece> {
  constructor() {
    super(EntitiesNameAPI.infosPieces);
  }
}

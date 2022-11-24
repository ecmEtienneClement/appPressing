/* eslint-disable no-underscore-dangle */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NameUrlEntitiesAPI } from 'src/app/api.config';
import { DetailPiece } from 'src/app/models/models.interfaces';
import { EntitiesDataService } from 'src/app/modules/servicesModules/modules.data.service';

@Injectable()
export class DetailsPieceDataService extends EntitiesDataService<DetailPiece> {
  constructor(httpClient: HttpClient) {
    super(httpClient, NameUrlEntitiesAPI.detailPieces);
  }
}

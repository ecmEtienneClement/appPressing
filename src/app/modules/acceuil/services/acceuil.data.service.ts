/* eslint-disable no-underscore-dangle */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NameUrlEntitiesAPI } from 'src/app/api.config';
import { EtatFinancier } from 'src/app/models/models.interfaces';
import { EntitiesDataService } from 'src/app/modules/servicesModules/modules.data.service';

@Injectable()
export class AcceuilDataService extends EntitiesDataService<EtatFinancier> {
  constructor(httpClient: HttpClient) {
    super(httpClient, NameUrlEntitiesAPI.acceuil);
  }
}

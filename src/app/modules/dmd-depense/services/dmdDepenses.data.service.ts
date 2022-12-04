/* eslint-disable no-underscore-dangle */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NameUrlEntitiesAPI } from 'src/app/api.config';
import { DemandeDepense } from 'src/app/models/models.interfaces';
import { EntitiesDataService } from '../../servicesModules/modules.data.service';

@Injectable()
export class DmdDepensesDataService extends EntitiesDataService<DemandeDepense> {
  constructor(httpClient: HttpClient) {
    super(httpClient, NameUrlEntitiesAPI.dmdDepenses);
  }
}

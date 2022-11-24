import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NameUrlEntitiesAPI } from 'src/app/api.config';
import { Employe } from 'src/app/models/models.interfaces';
import { EntitiesDataService } from '../../servicesModules/modules.data.service';

@Injectable()
export class EmployesDataService extends EntitiesDataService<Employe> {
  constructor(httpClient: HttpClient) {
    super(httpClient, NameUrlEntitiesAPI.employers);
  }
}

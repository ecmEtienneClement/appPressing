import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesNames } from 'src/app/routes.config';
import { EntitiesDataState } from '../../servicesModules/modules.entitiesDataState';
import { EntitiesService } from '../../servicesModules/modules.service';

@Injectable()
export class AdminsService extends EntitiesService {
  constructor(router: Router, entitiesDataState: EntitiesDataState) {
    super(router, RoutesNames.admins, entitiesDataState);
    this.setRouteParam(RoutesNames.adminsInfo);
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesNames } from 'src/app/routes.config';
import { EntitiesDataState } from '../../servicesModules/modules.entitiesDataState';
import { EntitiesService } from '../../servicesModules/modules.service';

@Injectable()
export class FacturesService extends EntitiesService {
  constructor(router: Router, entitiesDataState: EntitiesDataState) {
    super(router, RoutesNames.factures, entitiesDataState);
    this.setRouteParam(RoutesNames.facturesInfo);
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesNames } from 'src/app/routes.config';
import { EntitiesDataState } from '../../servicesModules/modules.entitiesDataState';
import { EntitiesService } from '../../servicesModules/modules.service';

@Injectable()
export class EmployerService extends EntitiesService {
  constructor(router: Router, entitiesDataState: EntitiesDataState) {
    //RoutesNames.clients definition de la route de base
    super(router, RoutesNames.employers, entitiesDataState);
    //setRoute definition de la route pour la redirection
    this.setRouteParam(RoutesNames.employersInfo);
  }
}

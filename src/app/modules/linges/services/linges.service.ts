import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EntitiesDataState } from 'src/app/modules/servicesModules/modules.entitiesDataState';
import { EntitiesService } from 'src/app/modules/servicesModules/modules.service';
import { RoutesNames } from 'src/app/routes.config';

@Injectable()
export class LingesService extends EntitiesService {
  constructor(router: Router, entitiesDataState: EntitiesDataState) {
    super(router, RoutesNames.linges, entitiesDataState);
  }
}

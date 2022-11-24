import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { Employe } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { WhereNavEntities } from '../../servicesModules/modules.service';
import { EmployersSelectors } from '../ngrx/employers.selectors';
import { EmployerService } from '../services.ts/employer.service';

@Component({
  selector: 'app-employer-info',
  templateUrl: './employer-info.component.html',
  styleUrls: ['./employer-info.component.scss'],
})
export class EmployerInfoComponent implements OnInit {
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  employe$: Observable<Employe> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  readonly routesNames = RoutesNames;
  readonly whereNav = WhereNavEntities;
  constructor(
    private store: Store<AppState>,
    private employerService: EmployerService,
    private employersSelectores: EmployersSelectors
  ) {}

  ngOnInit() {
    this.dataState$ = this.store.select(
      this.employersSelectores.getDataState()
    );
    this.notification$ = this.store.select(
      this.employersSelectores.getNotification()
    );
    this.errorMessage$ = this.store.select(
      this.employersSelectores.getMessageError()
    );
    this.employe$ = this.store.select(
      this.employersSelectores.getEntitieById()
    );
  }

  //TODO NAV
  onNav(
    whereNav: WhereNavEntities,
    routeParam?: RoutesNames,
    idEmploye?: string
  ) {
    this.employerService.onNav(whereNav, routeParam, idEmploye);
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { Client } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { WhereNavEntities } from '../../servicesModules/modules.service';
import { ClientsSelectors } from '../ngrx/clients.selectors';
import { ClientService } from '../services/clients.service';

@Component({
  selector: 'app-clients-info',
  templateUrl: './clients-info.component.html',
  styleUrls: ['./clients-info.component.scss'],
})
export class ClientsInfoComponent implements OnInit {
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  client$: Observable<Client> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  readonly routesNames = RoutesNames;
  readonly whereNav = WhereNavEntities;
  constructor(
    private store: Store<AppState>,
    private clientService: ClientService,
    private clientsSelectorsService: ClientsSelectors
  ) {}

  ngOnInit() {
    this.dataState$ = this.store.select(
      this.clientsSelectorsService.getDataState()
    );
    this.notification$ = this.store.select(
      this.clientsSelectorsService.getNotification()
    );
    this.errorMessage$ = this.store.select(
      this.clientsSelectorsService.getMessageError()
    );
    this.client$ = this.store.select(
      this.clientsSelectorsService.getEntitieById()
    );
  }

  //TODO NAV
  onNav(
    whereNav: WhereNavEntities,
    routeParam?: RoutesNames,
    idEmploye?: string
  ) {
    this.clientService.onNav(whereNav, routeParam, idEmploye);
  }
}

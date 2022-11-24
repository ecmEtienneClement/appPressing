import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { Client } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { ClientsSelectors } from '../ngrx/clients.selectors';

@Component({
  selector: 'app-client-linges',
  templateUrl: './client-linges.component.html',
  styleUrls: ['./client-linges.component.scss'],
})
export class ClientLingesComponent implements OnInit {
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  client$: Observable<Client> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  readonly routesNames = RoutesNames;
  constructor(
    private store: Store<AppState>,
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
}

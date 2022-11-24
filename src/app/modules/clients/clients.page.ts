import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { Client } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { WhereNavEntities } from '../servicesModules/modules.service';
import { ClientsActions } from './ngrx/clients.actions';
import { ClientsSelectors } from './ngrx/clients.selectors';
import { ClientService } from './services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit, OnDestroy {
  @ViewChild(IonContent) content: IonContent;

  clientsInit: Client[];
  clients: Client[];
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  sub: Subscription = new Subscription();
  readonly routesNames = RoutesNames;
  readonly whereNavClient = WhereNavEntities;

  constructor(
    public store: Store<AppState>,
    private clientsActionsService: ClientsActions,
    private clientsSelectorsService: ClientsSelectors,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    this.store.dispatch(this.clientsActionsService.getAllEntities()());
    this.subClients();
    this.dataState$ = this.store.select(
      this.clientsSelectorsService.getDataState()
    );
    this.notification$ = this.store.select(
      this.clientsSelectorsService.getNotification()
    );
    this.errorMessage$ = this.store.select(
      this.clientsSelectorsService.getMessageError()
    );
  }

  //TODO SUBS AUX DATA CLIENTS
  subClients() {
    this.sub.add(
      this.store.select(this.clientsSelectorsService.getEntities()).subscribe({
        next: (clients) => {
          this.clientsInit = clients;
          this.clients = clients;
        },
      })
    );
  }
  //TODO SEARCH
  handleChange(event: any) {
    const querySearch = event.target.value.toLowerCase();
    this.clients = this.clientsInit.filter(
      (client) => client.prenom.toLowerCase().indexOf(querySearch) > -1
    );
  }
  //TODO SCROLL
  scrollToTop() {
    this.content.scrollToTop(500);
  }
  //TODO NAV
  onNav(
    whereNav: WhereNavEntities,
    routeParam?: RoutesNames,
    idClient?: string
  ) {
    this.clientService.onNav(whereNav, routeParam, idClient);
  }
  //TODO DELETE CLIENT
  onDeleteClient(idClient: string) {
    this.store.dispatch(
      this.clientsActionsService.deleteEntitie()({ idEntitie: idClient })
    );
  }
  //TODO
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

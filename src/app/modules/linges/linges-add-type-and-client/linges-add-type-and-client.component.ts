/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonContent } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { Client } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { UserService } from 'src/app/servicesApp/user.service';
import { ClientsActions } from '../../clients/ngrx/clients.actions';
import { ClientsSelectors } from '../../clients/ngrx/clients.selectors';
import {
  EntititeNativeStorage,
  NameItemNativeStorage,
} from '../../servicesModules/module.nativeStorage';
import { EntitiesEmit } from '../../servicesModules/modules.emit';
import { WhereNavEntities } from '../../servicesModules/modules.service';
import { LingeDataState } from '../services/linges.data.state';
import { LingesService } from '../services/linges.service';

@Component({
  selector: 'app-linges-add-type-and-client',
  templateUrl: './linges-add-type-and-client.component.html',
  styleUrls: ['./linges-add-type-and-client.component.scss'],
})
export class LingesAddTypeAndClientComponent implements OnInit, OnDestroy {
  @ViewChild(IonContent) content: IonContent;
  sub: Subscription = new Subscription();
  clientsInit: Client[];
  clients: Client[];
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  newClient = false;
  selectClient = false;
  readonly routesNames = RoutesNames;
  readonly itemName = NameItemNativeStorage;
  readonly whereNav = WhereNavEntities;

  clientUpd: Client = {
    nom: '',
    prenom: '',
    adresse: '',
    numero: '',
    nbrLinge: 1,
    EmployeId: '',
    codeFidelite: 1,
  };
  //
  formClient: FormGroup;
  constructor(
    private clientsActionsService: ClientsActions,
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private clientsSelectorsService: ClientsSelectors,
    private lingesService: LingesService,
    private lingesDataState: LingeDataState,
    private entititeNativeStorage: EntititeNativeStorage,
    private userService: UserService
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
    this.initForm();
    //
    this.subEntitieEmit();
  }

  //TODO
  onClient(event: any) {
    const value = event.target.value;
    switch (value) {
      case 'select':
        this.store.dispatch(this.clientsActionsService.getAllEntities()());
        this.subClients();
        this.newClient = false;
        this.selectClient = true;
        break;
      case 'new':
        this.selectClient = false;
        this.newClient = true;
        break;
    }
  }
  //TODO
  onSelectClient(idClient: string) {
    //FOR NATIVE CORDOVA
    this.entititeNativeStorage.setItem(this.itemName.idClient, idClient);
    /* FOR BROWSER je suis obliger d'utiliser les services pour la persitence et passage de donnée
    entre cmp lors du dev car native cordova ne marchera pas avec le browser ionic serve...
    */
    this.lingesDataState.setIdClientLinge(idClient);
    this.onNav(this.whereNav.addEntitie, this.routesNames.lingesAddDetailsType);
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
  //TODO INIT FORM
  initForm() {
    this.formClient = this.formBuilder.group({
      nom: [null, [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      prenom: [null, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      adresse: [
        null,
        [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')],
      ],
      numero: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }
  //TODO SUBMIT
  submitForm() {
    const formAddValues = this.formClient.value;
    const newClient: Client = {
      nom: formAddValues.nom,
      prenom: formAddValues.prenom,
      adresse: formAddValues.adresse,
      numero: formAddValues.numero,
      nbrLinge: 1,
      codeFidelite: 0,
      EmployeId: this.userService.getIdUser(),
    };

    this.store.dispatch(
      this.clientsActionsService.addEntitie()({
        entitie: newClient,
        onNavAfterAdd: false,
      })
    );
  }
  //TODO ON SUB ENTITIE EMIT
  subEntitieEmit() {
    //
    this.sub.add(
      EntitiesEmit.entitieSub.subscribe({
        next: (dataEmit) => {
          const client = <Client>dataEmit.entitie;
          this.onSelectClient(client.id);
        },
      })
    );
  }
  //TODO NAV
  onNav(
    whereNav: WhereNavEntities,
    routeParam?: RoutesNames,
    idLinge?: string
  ) {
    this.lingesService.onNav(whereNav, routeParam, idLinge);
  }
  //TODO
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

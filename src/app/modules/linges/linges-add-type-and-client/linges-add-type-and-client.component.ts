import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { Client } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { ClientsActions } from '../../clients/ngrx/clients.actions';
import { ClientsSelectors } from '../../clients/ngrx/clients.selectors';
import { EntitiesDataState } from '../../servicesModules/modules.entitiesDataState';

@Component({
  selector: 'app-linges-add-type-and-client',
  templateUrl: './linges-add-type-and-client.component.html',
  styleUrls: ['./linges-add-type-and-client.component.scss'],
})
export class LingesAddTypeAndClientComponent implements OnInit {
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  readonly routesNames = RoutesNames;

  clientUpd: Client = {
    nom: '',
    prenom: '',
    adresse: '',
    numero: '',
    nbrLinge: 1,
    codeFidelite: 1,
  };
  //
  formClient: FormGroup;
  constructor(
    private clientsActionsService: ClientsActions,
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private clientDataState: EntitiesDataState,
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
    this.initForm();
    //
  }

  onClient(event: any) {}
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
      codeFidelite: 1,
    };
    this.store.dispatch(
      this.clientsActionsService.addEntitie()({ entitie: newClient })
    );
  }
}

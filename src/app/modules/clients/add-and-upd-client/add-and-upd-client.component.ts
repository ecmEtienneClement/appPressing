/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { Client } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import {
  EntitiesDataState,
  EnumAddOrUpdFormEntitie,
} from '../../servicesModules/modules.entitiesDataState';
import { ClientsActions } from '../ngrx/clients.actions';
import { ClientsSelectors } from '../ngrx/clients.selectors';

@Component({
  selector: 'app-add-and-upd-client',
  templateUrl: './add-and-upd-client.component.html',
  styleUrls: ['./add-and-upd-client.component.scss'],
})
export class AddAndUpdClientComponent implements OnInit {
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  readonly routesNames = RoutesNames;

  clientUpd: Client = {
    nom: '',
    prenom: '',
    adresse: '',
    numero: '',
    EmployeId: '',
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
    console.log('action==>' + this.clientDataState.getAddOrUpdFormEntitie());
    this.switchNameRoute(this.clientDataState.getAddOrUpdFormEntitie());
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

  //TODO
  switchNameRoute(nameRouter: EnumAddOrUpdFormEntitie) {
    switch (nameRouter) {
      case EnumAddOrUpdFormEntitie.updEntitie:
        this.store
          .select(this.clientsSelectorsService.getEntitieById())
          .subscribe({
            next: (dataClient) => {
              if (dataClient) {
                this.clientUpd = dataClient;
                this.formClient.patchValue({
                  nom: dataClient.nom,
                  prenom: dataClient.prenom,
                  adresse: dataClient.adresse,
                  numero: dataClient.numero,
                });
              }
            },
            error: (error) => {
              this.store.dispatch(
                this.clientsActionsService.errorEntities()({ error })
              );
            },
          });
        break;
    }
  }

  //TODO SUBMIT
  submitForm() {
    switch (this.clientDataState.getAddOrUpdFormEntitie()) {
      //ADD
      case EnumAddOrUpdFormEntitie.addEntitie:
        const formAddValues = this.formClient.value;
        const newClient: Client = {
          nom: formAddValues.nom,
          prenom: formAddValues.prenom,
          adresse: formAddValues.adresse,
          numero: formAddValues.numero,
          nbrLinge: 1,
          codeFidelite: 1,
          EmployeId: '',
        };
        this.store.dispatch(
          this.clientsActionsService.addEntitie()({
            entitie: newClient,
            onNavAfterAdd: true,
          })
        );
        break;
      //UPD
      case EnumAddOrUpdFormEntitie.updEntitie:
        const formUpdValues = this.formClient.value;
        const updClient: Client = {
          id: this.clientUpd.id,
          nom: formUpdValues.nom,
          prenom: formUpdValues.prenom,
          adresse: formUpdValues.adresse,
          numero: formUpdValues.numero,
          nbrLinge: this.clientUpd.nbrLinge,
          codeFidelite: this.clientUpd.codeFidelite,
          createdAt: this.clientUpd.createdAt,
          updatedAt: this.clientUpd.updatedAt,
          Employe: this.clientUpd.Employe,
          EmployeId: this.clientUpd.EmployeId,
          Linges: this.clientUpd.Linges,
        };
        this.store.dispatch(
          this.clientsActionsService.updEntitie()({
            entitie: updClient,
          })
        );
        break;
      //DEF
      default:
        this.store.dispatch(
          this.clientsActionsService.errorEntities()({
            error: 'Erreur critique! Veillez nous le signaler',
          })
        );
        break;
    }
  }
}

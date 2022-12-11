/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { Admin } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import {
  EntitiesDataState,
  EnumAddOrUpdFormEntitie,
} from '../../servicesModules/modules.entitiesDataState';
import { AdminsActions } from '../ngrx/admins.actions';
import { AdminsSelectors } from '../ngrx/admins.selectors';

@Component({
  selector: 'app-admins-add-and-upd',
  templateUrl: './admins-add-and-upd.component.html',
  styleUrls: ['./admins-add-and-upd.component.scss'],
})
export class AdminsAddAndUpdComponent implements OnInit {
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  readonly routesNames = RoutesNames;
  updatePwd = false;
  isUpdate = false;
  nomAdmin = '...';
  prenomAdmin = '';
  AdminUpd: Admin = {
    nom: '',
    prenom: '',
    numero: '',
    email: '',
    mdp: '',
  };
  //
  formAdmin: FormGroup;
  constructor(
    private store: Store<AppState>,
    private adminsActions: AdminsActions,
    private adminsSelectores: AdminsSelectors,
    private entitiesDataState: EntitiesDataState,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.dataState$ = this.store.select(this.adminsSelectores.getDataState());
    this.notification$ = this.store.select(
      this.adminsSelectores.getNotification()
    );
    this.errorMessage$ = this.store.select(
      this.adminsSelectores.getMessageError()
    );
    this.initForm();
    //
    this.switchNameRoute(this.entitiesDataState.getAddOrUpdFormEntitie());
  }
  //TODO INIT FORM
  initForm() {
    this.formAdmin = this.formBuilder.group({
      nom: [null, [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      prenom: [null, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      numero: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      email: [null, [Validators.required, Validators.email]],
      mdp: [
        null,
        [
          Validators.required,
          Validators.pattern('(?=.*[A-z])(?=.*[A-Z])(?=.*[0-9])^[a-zA-Z0-9]*$'),
        ],
      ],
    });
  }

  //TODO
  switchNameRoute(nameRouter: EnumAddOrUpdFormEntitie) {
    switch (nameRouter) {
      case EnumAddOrUpdFormEntitie.updEntitie:
        this.store.select(this.adminsSelectores.getEntitieById()).subscribe({
          next: (dataEmploye) => {
            if (dataEmploye) {
              this.AdminUpd = dataEmploye;
              this.formAdmin.patchValue({
                nom: dataEmploye.nom,
                prenom: dataEmploye.prenom,
                numero: dataEmploye.numero,
                email: dataEmploye.email,
                mdp: dataEmploye.mdp,
              });
              this.nomAdmin = dataEmploye.nom;
              this.prenomAdmin = dataEmploye.prenom;
              this.isUpdate = true;
            }
          },
          error: (error) => {
            this.store.dispatch(this.adminsActions.errorEntities()({ error }));
          },
        });
        break;
    }
  }
  //TODO
  onUpdatePwd() {
    this.updatePwd = true;
    this.isUpdate = false;
  }

  //TODO SUBMIT
  submitForm() {
    switch (this.entitiesDataState.getAddOrUpdFormEntitie()) {
      //ADD
      case EnumAddOrUpdFormEntitie.addEntitie:
        const formAddValues = this.formAdmin.value;
        const newAdmin: Admin = {
          nom: formAddValues.nom,
          prenom: formAddValues.prenom,
          numero: formAddValues.numero,
          email: formAddValues.email,
          mdp: formAddValues.mdp,
        };
        this.store.dispatch(
          this.adminsActions.addEntitie()({
            entitie: newAdmin,
            onNavAfterAdd: true,
          })
        );
        break;
      //UPD
      case EnumAddOrUpdFormEntitie.updEntitie:
        const formUpdValues = this.formAdmin.value;
        const updAdmin: Admin = {
          id: this.AdminUpd.id,
          nom: formUpdValues.nom,
          prenom: formUpdValues.prenom,
          numero: formUpdValues.numero,
          email: formUpdValues.email,
          mdp: formUpdValues.mdp,
          role: this.AdminUpd.role,
          Compte_bloquers: this.AdminUpd.Compte_bloquers,
          Demande_depenses: this.AdminUpd.Demande_depenses,
          Factures: this.AdminUpd.Factures,
          createdAt: this.AdminUpd.createdAt,
          updatedAt: this.AdminUpd.updatedAt,
        };
        this.store.dispatch(
          this.adminsActions.updEntitie()({
            entitie: updAdmin,
          })
        );
        break;
      //DEF
      default:
        this.store.dispatch(
          this.adminsActions.errorEntities()({
            error: 'Erreur critique! Veillez nous le signaler',
          })
        );
        break;
    }
  }
}

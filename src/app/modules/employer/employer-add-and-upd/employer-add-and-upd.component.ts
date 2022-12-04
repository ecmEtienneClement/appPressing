/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { Employe } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { UserService } from 'src/app/servicesApp/user.service';
import {
  EntitiesDataState,
  EnumAddOrUpdFormEntitie,
} from '../../servicesModules/modules.entitiesDataState';
import { EmployersActions } from '../ngrx/employer.action';
import { EmployersSelectors } from '../ngrx/employers.selectors';

@Component({
  selector: 'app-employer-add-and-upd',
  templateUrl: './employer-add-and-upd.component.html',
  styleUrls: ['./employer-add-and-upd.component.scss'],
})
export class EmployerAddAndUpdComponent implements OnInit {
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  readonly routesNames = RoutesNames;

  employeUpd: Employe = {
    nom: '',
    prenom: '',
    adresse: '',
    numero: '',
    email: '',
    mdp: '',
    salaire: 0,
    AdminId: '',
  };
  //
  formEmployer: FormGroup;
  constructor(
    private store: Store<AppState>,
    private employersActions: EmployersActions,
    private employersSelectores: EmployersSelectors,
    private entitiesDataState: EntitiesDataState,
    private formBuilder: FormBuilder,
    private userService: UserService
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
    this.initForm();
    //
    this.switchNameRoute(this.entitiesDataState.getAddOrUpdFormEntitie());
  }
  //TODO INIT FORM
  initForm() {
    this.formEmployer = this.formBuilder.group({
      nom: [null, [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      prenom: [null, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      adresse: [
        null,
        [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')],
      ],
      numero: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      salaire: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      email: [null, [Validators.required, Validators.email]],
      //   mdp: [null, [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]],
    });
  }

  //TODO
  switchNameRoute(nameRouter: EnumAddOrUpdFormEntitie) {
    switch (nameRouter) {
      case EnumAddOrUpdFormEntitie.updEntitie:
        this.store.select(this.employersSelectores.getEntitieById()).subscribe({
          next: (dataEmploye) => {
            if (dataEmploye) {
              this.employeUpd = dataEmploye;
              this.formEmployer.patchValue({
                nom: dataEmploye.nom,
                prenom: dataEmploye.prenom,
                adresse: dataEmploye.adresse,
                numero: dataEmploye.numero,
                salaire: dataEmploye.salaire,
                email: dataEmploye.email,
              });
            }
          },
          error: (error) => {
            this.store.dispatch(
              this.employersActions.errorEntities()({ error })
            );
          },
        });
        break;
    }
  }

  //TODO SUBMIT
  submitForm() {
    switch (this.entitiesDataState.getAddOrUpdFormEntitie()) {
      //ADD
      case EnumAddOrUpdFormEntitie.addEntitie:
        const formAddValues = this.formEmployer.value;
        const newEmployer: Employe = {
          AdminId: this.userService.getIdUser(),
          nom: formAddValues.nom,
          prenom: formAddValues.prenom,
          adresse: formAddValues.adresse,
          numero: formAddValues.numero,
          salaire: formAddValues.salaire,
          email: formAddValues.email,
          mdp: 'Motdepasse01',
        };
        this.store.dispatch(
          this.employersActions.addEntitie()({
            entitie: newEmployer,
            onNavAfterAdd: true,
          })
        );
        break;
      //UPD
      case EnumAddOrUpdFormEntitie.updEntitie:
        const formUpdValues = this.formEmployer.value;
        const updClient: Employe = {
          AdminId: this.employeUpd.AdminId,
          id: this.employeUpd.id,
          nom: formUpdValues.nom,
          prenom: formUpdValues.prenom,
          adresse: formUpdValues.adresse,
          numero: formUpdValues.numero,
          email: formUpdValues.email,
          //  mdp: formAddValues.mdp,
          mdp: this.employeUpd.mdp,
          salaire: formUpdValues.salaire,
          role: this.employeUpd.role,
          Clients: this.employeUpd.Clients,
          Linges: this.employeUpd.Linges,
          Demande_depenses: this.employeUpd.Demande_depenses,
          createdAt: this.employeUpd.createdAt,
          updatedAt: this.employeUpd.updatedAt,
        };
        this.store.dispatch(
          this.employersActions.updEntitie()({
            entitie: updClient,
          })
        );
        break;
      //DEF
      default:
        this.store.dispatch(
          this.employersActions.errorEntities()({
            error: 'Erreur critique! Veillez nous le signaler',
          })
        );
        break;
    }
  }
}

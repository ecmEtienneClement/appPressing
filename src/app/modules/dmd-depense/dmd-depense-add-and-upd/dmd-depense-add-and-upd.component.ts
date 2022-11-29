/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { DemandeDepense } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import {
  EntitiesDataState,
  EnumAddOrUpdFormEntitie,
} from '../../servicesModules/modules.entitiesDataState';
import { DmdDepensesActions } from '../ngrx/factures.actions';
import { DmdDepensesSelectors } from '../ngrx/factures.selectors';

@Component({
  selector: 'app-dmd-depense-add-and-upd',
  templateUrl: './dmd-depense-add-and-upd.component.html',
  styleUrls: ['./dmd-depense-add-and-upd.component.scss'],
})
export class DmdDepenseAddAndUpdComponent implements OnInit {
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  readonly routesNames = RoutesNames;

  dmdDepenseUpd: DemandeDepense = {
    EmployeId: '',
    description: '',
    rejeter: false,
    valider: false,
    montant: 0,
  };
  //
  formDemandeDepense: FormGroup;
  constructor(
    private store: Store<AppState>,
    private dmdDepensesActions: DmdDepensesActions,
    private dmdDepensesSelectores: DmdDepensesSelectors,
    private entitiesDataState: EntitiesDataState,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.dataState$ = this.store.select(
      this.dmdDepensesSelectores.getDataState()
    );
    this.notification$ = this.store.select(
      this.dmdDepensesSelectores.getNotification()
    );
    this.errorMessage$ = this.store.select(
      this.dmdDepensesSelectores.getMessageError()
    );
    this.initForm();
    //
    this.switchNameRoute(this.entitiesDataState.getAddOrUpdFormEntitie());
  }
  //TODO INIT FORM
  initForm() {
    this.formDemandeDepense = this.formBuilder.group({
      description: [null, Validators.required],
      montant: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  //TODO
  switchNameRoute(nameRouter: EnumAddOrUpdFormEntitie) {
    switch (nameRouter) {
      case EnumAddOrUpdFormEntitie.updEntitie:
        this.store
          .select(this.dmdDepensesSelectores.getEntitieById())
          .subscribe({
            next: (dataDemandeDepense) => {
              if (dataDemandeDepense) {
                this.dmdDepenseUpd = dataDemandeDepense;
                this.formDemandeDepense.patchValue({
                  description: dataDemandeDepense.description,
                  montant: dataDemandeDepense.montant,
                });
              }
            },
            error: (error) => {
              this.store.dispatch(
                this.dmdDepensesActions.errorEntities()({ error })
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
        const formAddValues = this.formDemandeDepense.value;
        const newDemandeDepense: DemandeDepense = {
          description: formAddValues.description,
          montant: formAddValues.montant,
          rejeter: false,
          valider: false,
          EmployeId: '0dc16262-e0c0-4b35-8d96-60d77319d0cd',
        };
        this.store.dispatch(
          this.dmdDepensesActions.addEntitie()({
            entitie: newDemandeDepense,
            onNavAfterAdd: true,
          })
        );
        break;
      //UPD
      case EnumAddOrUpdFormEntitie.updEntitie:
        const formUpdValues = this.formDemandeDepense.value;
        const updDemandeDepense: DemandeDepense = {
          id: this.dmdDepenseUpd.id,
          description: formUpdValues.description,
          montant: formUpdValues.montant,
          createdAt: this.dmdDepenseUpd.createdAt,
          updatedAt: this.dmdDepenseUpd.updatedAt,
          rejeter: this.dmdDepenseUpd.rejeter,
          valider: this.dmdDepenseUpd.valider,
          Depense: this.dmdDepenseUpd.Depense,
          Admin: this.dmdDepenseUpd.Admin,
          AdminId: this.dmdDepenseUpd.AdminId,
          EmployeId: this.dmdDepenseUpd.EmployeId,
          Employe: this.dmdDepenseUpd.Employe,
        };
        this.store.dispatch(
          this.dmdDepensesActions.updEntitie()({
            entitie: updDemandeDepense,
          })
        );
        break;
      //DEF
      default:
        this.store.dispatch(
          this.dmdDepensesActions.errorEntities()({
            error: 'Erreur critique! Veillez nous le signaler',
          })
        );
        break;
    }
  }
}

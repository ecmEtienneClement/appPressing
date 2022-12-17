/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import {
  Facture,
  EnumTypeFacture,
  EtatFinancier,
  Employe,
} from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { UserService } from 'src/app/servicesApp/user.service';
import { AcceuilActions } from '../../acceuil/ngrx/acceuil.actions';
import { AcceuilSelectors } from '../../acceuil/ngrx/acceuil.selectors';
import { EmployersActions } from '../../employer/ngrx/employer.action';
import { EmployersSelectors } from '../../employer/ngrx/employers.selectors';
import {
  EntitiesDataState,
  EnumAddOrUpdFormEntitie,
} from '../../servicesModules/modules.entitiesDataState';
import { FacturesActions } from '../ngrx/factures.actions';
import { FacturesSelectors } from '../ngrx/factures.selectors';

@Component({
  selector: 'app-factures-add-and-upd',
  templateUrl: './factures-add-and-upd.component.html',
  styleUrls: ['./factures-add-and-upd.component.scss'],
})
export class FacturesAddAndUpdComponent implements OnInit, OnDestroy {
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  sub: Subscription = new Subscription();
  readonly routesNames = RoutesNames;
  readonly enumTypeFacture = EnumTypeFacture;
  employes: Employe[];
  salaire = 0;
  idEtatFinancier = '';
  caisse = 0;
  depense = 0;
  factureUpd: Facture = {
    type: EnumTypeFacture.eau,
    AdminId: '',
    montant: 0,
  };
  //
  formFacture: FormGroup;
  constructor(
    private store: Store<AppState>,
    private facturesActions: FacturesActions,
    private facturesSelectores: FacturesSelectors,
    private entitiesDataState: EntitiesDataState,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private etatFinancierActions: AcceuilActions,
    private etatFinancierSelectores: AcceuilSelectors,
    private employersActions: EmployersActions,
    private employerSelectors: EmployersSelectors
  ) {}

  ngOnInit() {
    this.store.dispatch(this.employersActions.getAllEntities()());
    this.store.dispatch(this.etatFinancierActions.getAllEntities()());
    this.subEmployes();
    this.dataState$ = this.store.select(this.facturesSelectores.getDataState());
    this.notification$ = this.store.select(
      this.facturesSelectores.getNotification()
    );
    this.errorMessage$ = this.store.select(
      this.facturesSelectores.getMessageError()
    );
    this.initForm();
    //
    this.switchNameRoute(this.entitiesDataState.getAddOrUpdFormEntitie());
    this.onSubEtatFinancier();
  }
  //TODO INIT FORM
  initForm() {
    this.formFacture = this.formBuilder.group({
      type: [null, [Validators.required, Validators.pattern('^[a-zA-Zé]*$')]],
      montant: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  //TODO SUBS AUX DATA EMPLOYER
  subEmployes() {
    this.sub.add(
      this.store.select(this.employerSelectors.getEntities()).subscribe({
        next: (employes) => {
          if (employes) {
            this.employes = employes;
          }
        },
      })
    );
  }
  //TODO FILTER
  onSelectType($whereContainerEvent: any) {
    switch ($whereContainerEvent.target.value) {
      case EnumTypeFacture.salaire:
        if (this.employes) {
          this.employes.forEach((employer) => {
            this.salaire += employer.salaire;
          });
          this.formFacture.patchValue({
            montant: this.salaire,
          });
        }
        break;
    }
  }
  //TODO SUB ETAT
  onSubEtatFinancier() {
    this.store.select(this.etatFinancierSelectores.getEntities()).subscribe({
      next: (data) => {
        if (data) {
          if (data.length > 0) {
            this.caisse = data[0].caisse;
            this.depense = data[0].depense;
            this.idEtatFinancier = data[0].id;
          }
        }
      },
    });
  }

  //TODO
  switchNameRoute(nameRouter: EnumAddOrUpdFormEntitie) {
    switch (nameRouter) {
      case EnumAddOrUpdFormEntitie.updEntitie:
        this.store.select(this.facturesSelectores.getEntitieById()).subscribe({
          next: (dataFacture) => {
            if (dataFacture) {
              this.factureUpd = dataFacture;
              this.formFacture.patchValue({
                type: dataFacture.type,
                montant: dataFacture.montant,
              });
            }
          },
          error: (error) => {
            this.store.dispatch(
              this.facturesActions.errorEntities()({ error })
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
        const formAddValues = this.formFacture.value;
        const newFacture: Facture = {
          type: formAddValues.type,
          montant: formAddValues.montant,
          AdminId: this.userService.getIdUser(),
        };
        const etat: EtatFinancier = {
          caisse: this.caisse - formAddValues.montant,
          depense: this.depense + formAddValues.montant,
          id: this.idEtatFinancier,
        };
        this.store.dispatch(
          this.etatFinancierActions.updEntitie()({
            entitie: etat,
            onNavAfterUpd: false,
          })
        );
        this.store.dispatch(
          this.facturesActions.addEntitie()({
            entitie: newFacture,
            onNavAfterAdd: true,
          })
        );
        break;
      //UPD
      case EnumAddOrUpdFormEntitie.updEntitie:
        const formUpdValues = this.formFacture.value;
        const updFacture: Facture = {
          id: this.factureUpd.id,
          type: formUpdValues.type,
          montant: formUpdValues.montant,
          AdminId: this.factureUpd.AdminId,
          Admin: this.factureUpd.Admin,
          createdAt: this.factureUpd.createdAt,
          updatedAt: this.factureUpd.updatedAt,
        };
        this.store.dispatch(
          this.facturesActions.updEntitie()({
            entitie: updFacture,
          })
        );
        break;
      //DEF
      default:
        this.store.dispatch(
          this.facturesActions.errorEntities()({
            error: 'Erreur critique! Veillez nous le signaler',
          })
        );
        break;
    }
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

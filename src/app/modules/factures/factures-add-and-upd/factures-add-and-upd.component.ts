/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { Facture, EnumTypeFacture } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
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
export class FacturesAddAndUpdComponent implements OnInit {
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  readonly routesNames = RoutesNames;
  readonly enumTypeFacture = EnumTypeFacture;

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
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
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
  }
  //TODO INIT FORM
  initForm() {
    this.formFacture = this.formBuilder.group({
      type: [null, [Validators.required, Validators.pattern('^[a-zA-Zé]*$')]],
      montant: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
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
          AdminId: '1d1fa24c-226e-44ef-9d89-47d68e49a030',
        };
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
}

/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { Compte_bloquer, Employe } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { EmployersActions } from '../../employer/ngrx/employer.action';
import { EmployersSelectors } from '../../employer/ngrx/employers.selectors';
import { CmpBloquesActions } from '../ngrx/cmpBloques.actions';
import { CmpBloquesSelectors } from '../ngrx/cmpBloques.selectors';

@Component({
  selector: 'app-cmp-bloques-add',
  templateUrl: './cmp-bloques-add.component.html',
  styleUrls: ['./cmp-bloques-add.component.scss'],
})
export class CmpBloquesAddComponent implements OnInit, OnDestroy {
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  sub: Subscription = new Subscription();

  readonly routesNames = RoutesNames;
  employes: Employe[];
  factureUpd: Compte_bloquer = {
    byAdmin: true,
    email: '',
    EmployeId: '',
  };
  //
  formCmpBloque: FormGroup;
  constructor(
    private store: Store<AppState>,
    private cmpBloquesActions: CmpBloquesActions,
    private cmpBloquesSelectores: CmpBloquesSelectors,
    private formBuilder: FormBuilder,
    private employersActions: EmployersActions,
    private employerSelectors: EmployersSelectors
  ) {}

  ngOnInit() {
    this.dataState$ = this.store.select(
      this.cmpBloquesSelectores.getDataState()
    );
    this.notification$ = this.store.select(
      this.cmpBloquesSelectores.getNotification()
    );
    this.errorMessage$ = this.store.select(
      this.cmpBloquesSelectores.getMessageError()
    );
    this.store.dispatch(this.employersActions.getAllEntities()());

    this.initForm();
    this.subEmployes();
  }
  //TODO INIT FORM
  initForm() {
    this.formCmpBloque = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
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

  //TODO SUBMIT
  submitForm() {
    const email = this.formCmpBloque.value.email;
    const employer: Employe = this.employes.find(
      (employe) => employe.email === email
    );
    if (employer === undefined) {
      this.store.dispatch(
        this.employersActions.errorEntities()({
          // eslint-disable-next-line @typescript-eslint/quotes
          error: "Une erreur s'est produit veillez réessayer",
        })
      );
    } else {
      const newCmpBloque: Compte_bloquer = {
        byAdmin: true,
        email,
        EmployeId: employer.id,
      };
      this.store.dispatch(
        this.cmpBloquesActions.addEntitie()({
          entitie: newCmpBloque,
          onNavAfterAdd: true,
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

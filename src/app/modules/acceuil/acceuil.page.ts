import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { RoutesNames } from 'src/app/routes.config';
import { AdminsActions } from '../admins/ngrx/admins.actions';
import { AdminsSelectors } from '../admins/ngrx/admins.selectors';
import { ClientsActions } from '../clients/ngrx/clients.actions';
import { ClientsSelectors } from '../clients/ngrx/clients.selectors';
import { CmpBloquesActions } from '../cmp-bloques/ngrx/cmpBloques.actions';
import { CmpBloquesSelectors } from '../cmp-bloques/ngrx/cmpBloques.selectors';
import { DmdDepensesActions } from '../dmd-depense/ngrx/dmdDepenses.actions';
import { DmdDepensesSelectors } from '../dmd-depense/ngrx/dmdDepenses.selectors';
import { EmployersActions } from '../employer/ngrx/employer.action';
import { EmployersSelectors } from '../employer/ngrx/employers.selectors';
import { FacturesActions } from '../factures/ngrx/factures.actions';
import { FacturesSelectors } from '../factures/ngrx/factures.selectors';
import { LingesActions } from '../linges/ngrx/linges.actions';
import { LingesSelectors } from '../linges/ngrx/linges.selectors';
import { AcceuilActions } from './ngrx/acceuil.actions';
import { AcceuilSelectors } from './ngrx/acceuil.selectors';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit, OnDestroy {
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  sub: Subscription = new Subscription();
  readonly routesNames = RoutesNames;
   readonly dataStateEnum = AppStateEnum;
  caisse = 0;
  depense = 0;
  nbrAdmin = 0;
  nbrEmployer = 0;
  nbrClient = 0;
  nbrLinge = 0;
  nbrDmd = 0;
  nbrFacture = 0;
  nbrCmp = 0;
  isAdmin = false;
  isEmployer = false;
  isClient = false;
  isLinge = false;
  isDmd = false;
  isFacture = false;
  isCmp = false;
  constructor(
    private store: Store<AppState>,
    private etatFinancierActions: AcceuilActions,
    private etatFinancierSelectores: AcceuilSelectors,
    private clientsActionsService: ClientsActions,
    private clientsSelectorsService: ClientsSelectors,
    private adminsActions: AdminsActions,
    private adminsSelectors: AdminsSelectors,
    private cmpBloquesActionsService: CmpBloquesActions,
    private cmpBloquesSelectorsService: CmpBloquesSelectors,
    private dmdDepensesActions: DmdDepensesActions,
    private dmdDepensesSelectors: DmdDepensesSelectors,
    private employersActions: EmployersActions,
    private employerSelectors: EmployersSelectors,
    private facturesActions: FacturesActions,
    private facturesSelectors: FacturesSelectors,
    private lingesActions: LingesActions,
    private lingesSelectors: LingesSelectors
  ) {}

  ngOnInit() {
    this.store.dispatch(this.clientsActionsService.getAllEntities()());
    this.store.dispatch(this.adminsActions.getAllEntities()());
    this.store.dispatch(this.cmpBloquesActionsService.getAllEntities()());
    this.store.dispatch(this.dmdDepensesActions.getAllEntities()());
    this.store.dispatch(this.employersActions.getAllEntities()());
    this.store.dispatch(this.facturesActions.getAllEntities()());
    this.store.dispatch(this.lingesActions.getAllEntities()());

    this.store.dispatch(this.etatFinancierActions.getAllEntities()());
    this.dataState$ = this.store.select(
      this.etatFinancierSelectores.getDataState()
    );
    this.notification$ = this.store.select(
      this.etatFinancierSelectores.getNotification()
    );
    this.errorMessage$ = this.store.select(
      this.etatFinancierSelectores.getMessageError()
    );
    //
    this.onSubEtatFinancier();
    this.subAdmins();
    this.subClients();
    this.subCompteBloquers();
    this.subDmdDepenses();
    this.subEmployes();
    this.subFactures();
    this.subLinges();
  }

  //TODO SUB ETAT
  onSubEtatFinancier() {
    this.sub.add(
      this.store.select(this.etatFinancierSelectores.getEntities()).subscribe({
        next: (data) => {
          if (data) {
            if (data.length > 0) {
              this.caisse = data[0].caisse;
              this.depense = data[0].depense;
            }
          }
        },
      })
    );
  }
  //TODO SUBS AUX DATA ADMIN
  subAdmins() {
    this.sub.add(
      this.store.select(this.adminsSelectors.getEntities()).subscribe({
        next: (admins) => {
          if (admins) {
            this.isAdmin = true;
            this.nbrAdmin = admins.length;
          }
        },
      })
    );
  }
  //TODO SUBS AUX DATA CLIENTS
  subClients() {
    this.sub.add(
      this.store.select(this.clientsSelectorsService.getEntities()).subscribe({
        next: (clients) => {
          if (clients) {
            this.isClient = true;
            this.nbrClient = clients.length;
          }
        },
      })
    );
  }
  //TODO SUBS AUX DATA COMPTE
  subCompteBloquers() {
    this.sub.add(
      this.store
        .select(this.cmpBloquesSelectorsService.getEntities())
        .subscribe({
          next: (cmpBloquesDate) => {
            if (cmpBloquesDate) {
              this.isCmp = true;
              this.nbrCmp = cmpBloquesDate.length;
            }
          },
        })
    );
  }
  //TODO SUBS AUX DATA DMD_DEPENSE
  subDmdDepenses() {
    this.sub.add(
      this.store.select(this.dmdDepensesSelectors.getEntities()).subscribe({
        next: (dmdDepenses) => {
          if (dmdDepenses) {
            this.isDmd = true;
            this.nbrDmd = dmdDepenses.length;
          }
        },
      })
    );
  }
  //TODO SUBS AUX DATA EMPLOYER
  subEmployes() {
    this.sub.add(
      this.store.select(this.employerSelectors.getEntities()).subscribe({
        next: (employes) => {
          if (employes) {
            this.isEmployer = true;
            this.nbrEmployer = employes.length;
          }
        },
      })
    );
  }
  //TODO SUBS AUX DATA FACTURE
  subFactures() {
    this.sub.add(
      this.store.select(this.facturesSelectors.getEntities()).subscribe({
        next: (factures) => {
          if (factures) {
            this.isFacture = true;
            this.nbrFacture = factures.length;
          }
        },
      })
    );
  }
  //TODO SUBS AUX DATA LINGE
  subLinges() {
    this.sub.add(
      this.store.select(this.lingesSelectors.getEntities()).subscribe({
        next: (linges) => {
          if (linges) {
            this.isLinge = true;
            this.nbrLinge = linges.length;
          }
        },
      })
    );
  }
  //TODO
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

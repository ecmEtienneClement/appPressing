import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { Admin, DemandeDepense } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { WhereNavEntities } from '../../servicesModules/modules.service';
import { AdminsSelectors } from '../ngrx/admins.selectors';

@Component({
  selector: 'app-admins-fac-dmd-dep',
  templateUrl: './admins-fac-dmd-dep.component.html',
  styleUrls: ['./admins-fac-dmd-dep.component.scss'],
})
export class AdminsFacDmdDepComponent implements OnInit {
  demande = false;
  depense = false;
  facture = true;

  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  admin$: Observable<Admin> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  depenses: DemandeDepense[];
  readonly routesNames = RoutesNames;
  readonly whereNav = WhereNavEntities;
  readonly appStateEnum = AppStateEnum;
  constructor(
    private store: Store<AppState>,
    private adminsSelectorsService: AdminsSelectors
  ) {}

  ngOnInit() {
    this.dataState$ = this.store.select(
      this.adminsSelectorsService.getDataState()
    );
    this.notification$ = this.store.select(
      this.adminsSelectorsService.getNotification()
    );
    this.errorMessage$ = this.store.select(
      this.adminsSelectorsService.getMessageError()
    );
    this.admin$ = this.store.select(
      this.adminsSelectorsService.getEntitieById()
    );
    this.onSubAdminDmd();
  }

  //TODO SUB DMD
  onSubAdminDmd() {
    this.store.select(this.adminsSelectorsService.getEntitieById()).subscribe({
      next: (dataAdmin) => {
        if (dataAdmin) {
          this.depenses = dataAdmin.Demande_depenses.filter(
            (dmd) => dmd.valider === true
          );
        }
      },
    });
  }
  //TODO
  onSegement(whereContainer: string) {
    switch (whereContainer) {
      case 'dmd':
        this.demande = true;
        this.depense = false;
        this.facture = false;
        break;
      case 'dep':
        this.depense = true;
        this.demande = false;
        this.facture = false;
        break;
      case 'fac':
        this.facture = true;
        this.demande = false;
        this.depense = false;
        break;

      default:
        this.demande = true;
        this.depense = false;
        this.facture = false;
        break;
    }
  }
}

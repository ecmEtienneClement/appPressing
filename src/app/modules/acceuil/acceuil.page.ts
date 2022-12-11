import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { RoutesNames } from 'src/app/routes.config';
import { EntitiesDataState } from '../servicesModules/modules.entitiesDataState';
import { AcceuilActions } from './ngrx/acceuil.actions';
import { AcceuilSelectors } from './ngrx/acceuil.selectors';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  readonly routesNames = RoutesNames;
  caisse = 0;
  depense = 0;
  constructor(
    private store: Store<AppState>,
    private etatFinancierActions: AcceuilActions,
    private etatFinancierSelectores: AcceuilSelectors,
    private entitiesDataState: EntitiesDataState
  ) {}

  ngOnInit() {
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
  }

  //TODO SUB ETAT
  onSubEtatFinancier() {
    this.store.select(this.etatFinancierSelectores.getEntities()).subscribe({
      next: (data) => {
        if (data) {
          if (data.length > 0) {
            this.caisse = data[0].caisse;
            this.depense = data[0].depense;
          }
        }
      },
    });
  }
}

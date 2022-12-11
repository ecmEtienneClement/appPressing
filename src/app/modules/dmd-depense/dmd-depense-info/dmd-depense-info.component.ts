import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import {
  DemandeDepense,
  EtatFinancier,
} from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { AcceuilActions } from '../../acceuil/ngrx/acceuil.actions';
import { AcceuilSelectors } from '../../acceuil/ngrx/acceuil.selectors';
import { WhereNavEntities } from '../../servicesModules/modules.service';
import { DmdDepensesActions } from '../ngrx/dmdDepenses.actions';
import { DmdDepensesSelectors } from '../ngrx/dmdDepenses.selectors';
import { DmdDepensesService } from '../services/dmdDepenses.service';

@Component({
  selector: 'app-dmd-depense-info',
  templateUrl: './dmd-depense-info.component.html',
  styleUrls: ['./dmd-depense-info.component.scss'],
})
export class DmdDepenseInfoComponent implements OnInit {
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  dmdDepense$: Observable<DemandeDepense> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  readonly routesNames = RoutesNames;
  idEtatFinancier = '';
  caisse = 0;
  depense = 0;
  constructor(
    private store: Store<AppState>,
    private dmdDepenseService: DmdDepensesService,
    private dmdDepensesSelectorsService: DmdDepensesSelectors,
    private dmdDepensesActionsService: DmdDepensesActions,
    private etatFinancierActions: AcceuilActions,
    private etatFinancierSelectores: AcceuilSelectors
  ) {}

  ngOnInit() {
    this.store.dispatch(this.etatFinancierActions.getAllEntities()());
    this.dataState$ = this.store.select(
      this.dmdDepensesSelectorsService.getDataState()
    );
    this.notification$ = this.store.select(
      this.dmdDepensesSelectorsService.getNotification()
    );
    this.errorMessage$ = this.store.select(
      this.dmdDepensesSelectorsService.getMessageError()
    );
    this.dmdDepense$ = this.store.select(
      this.dmdDepensesSelectorsService.getEntitieById()
    );
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
            this.idEtatFinancier = data[0].id;
          }
        }
      },
    });
  }
  //TODO NAVIGATION DEMANDE
  onNavUpdate(idDmdDepense: string) {
    this.dmdDepenseService.onNav(
      WhereNavEntities.updEntitie,
      RoutesNames.dmdDepensesUpd,
      idDmdDepense
    );
  }

  //TODO AVIS DEMANDE
  handleChange($event: any, demande: DemandeDepense) {
    switch ($event.target.value) {
      case '1':
        const updDemandeValider: DemandeDepense = { ...demande, valider: true };

        const etat: EtatFinancier = {
          caisse: this.caisse - updDemandeValider.montant,
          depense: this.depense + updDemandeValider.montant,
          id: this.idEtatFinancier,
        };
        this.store.dispatch(
          this.etatFinancierActions.updEntitie()({
            entitie: etat,
            onNavAfterUpd: false,
          })
        );
        this.store.dispatch(
          this.dmdDepensesActionsService.updEntitie()({
            entitie: updDemandeValider,
          })
        );
        break;
      case '0':
        const updDemandeRejeter: DemandeDepense = { ...demande, rejeter: true };
        this.store.dispatch(
          this.dmdDepensesActionsService.updEntitie()({
            entitie: updDemandeRejeter,
          })
        );
        break;
    }
  }
}

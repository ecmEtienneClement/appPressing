import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { DemandeDepense } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
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
  constructor(
    private store: Store<AppState>,
    private dmdDepenseService: DmdDepensesService,
    private dmdDepensesSelectorsService: DmdDepensesSelectors,
    private dmdDepensesActionsService: DmdDepensesActions
  ) {}

  ngOnInit() {
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

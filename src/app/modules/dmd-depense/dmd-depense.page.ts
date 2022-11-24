import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { DemandeDepense } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { WhereNavEntities } from '../servicesModules/modules.service';
import { DmdDepensesActions } from './ngrx/factures.actions';
import { DmdDepensesSelectors } from './ngrx/factures.selectors';
import { DmdDepensesService } from './services/factures.service';

@Component({
  selector: 'app-dmd-depense',
  templateUrl: './dmd-depense.page.html',
  styleUrls: ['./dmd-depense.page.scss'],
})
export class DmdDepensePage implements OnInit, OnDestroy {
  @ViewChild(IonContent) content: IonContent;

  dmdDepensesInit: DemandeDepense[];
  dmdDepenses: DemandeDepense[];
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  sub: Subscription = new Subscription();
  readonly routesNames = RoutesNames;
  readonly whereNav = WhereNavEntities;
  customActionSheetOptions = {
    header: 'Demande',
    subHeader: 'Sélectionné état demande',
  };
  constructor(
    private store: Store<AppState>,
    private dmdDepensesActions: DmdDepensesActions,
    private dmdDepensesSelectors: DmdDepensesSelectors,
    private dmdDepensesService: DmdDepensesService
  ) {}

  ngOnInit() {
    this.store.dispatch(this.dmdDepensesActions.getAllEntities()());
    this.subDmdDepenses();
    this.dataState$ = this.store.select(
      this.dmdDepensesSelectors.getDataState()
    );
    this.notification$ = this.store.select(
      this.dmdDepensesSelectors.getNotification()
    );
    this.errorMessage$ = this.store.select(
      this.dmdDepensesSelectors.getMessageError()
    );
  }

  //TODO SUBS AUX DATA DMD_DEPENSE
  subDmdDepenses() {
    this.sub.add(
      this.store.select(this.dmdDepensesSelectors.getEntities()).subscribe({
        next: (dmdDepenses) => {
          this.dmdDepensesInit = dmdDepenses;
          this.dmdDepenses = dmdDepenses;
        },
      })
    );
  }
  //TODO SCROLL
  scrollToTop() {
    this.content.scrollToTop(500);
  }
  //TODO NAV
  onNav(
    whereNav: WhereNavEntities,
    routeParam?: RoutesNames,
    idDemandeDepense?: string
  ) {
    this.dmdDepensesService.onNav(whereNav, routeParam, idDemandeDepense);
  }
  //TODO DELETE DMD_DEPENSE
  onDeleteDemandeDepense(idDemandeDepense: string) {
    this.store.dispatch(
      this.dmdDepensesActions.deleteEntitie()({ idEntitie: idDemandeDepense })
    );
  }

  //TODO FILTER
  onFilter($whereContainerEvent: any) {
    switch ($whereContainerEvent.target.value) {
      case 'x':
        this.filterDemandePasAvis();
        break;
      case '1':
        this.filterDemandeValid();
        break;
      case '0':
        this.filterDemandeReject();
        break;
      default:
        this.allDmdDepenses();
        break;
    }
  }
  filterDemandePasAvis() {
    this.dmdDepenses = this.dmdDepensesInit.filter(
      (dmdDepense) =>
        dmdDepense.valider === false && dmdDepense.rejeter === false
    );
  }
  filterDemandeValid() {
    this.dmdDepenses = this.dmdDepensesInit.filter(
      (dmdDepense) => dmdDepense.valider === true
    );
  }
  filterDemandeReject() {
    this.dmdDepenses = this.dmdDepensesInit.filter(
      (dmdDepense) => dmdDepense.rejeter === true
    );
  }
  allDmdDepenses() {
    this.dmdDepenses = this.dmdDepensesInit;
  }
  //TODO
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

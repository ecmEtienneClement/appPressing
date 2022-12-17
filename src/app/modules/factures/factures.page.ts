import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { Facture, EnumTypeFacture } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { WhereNavEntities } from '../servicesModules/modules.service';
import { FacturesActions } from './ngrx/factures.actions';
import { FacturesSelectors } from './ngrx/factures.selectors';
import { FacturesService } from './services/factures.service';

@Component({
  selector: 'app-factures',
  templateUrl: './factures.page.html',
  styleUrls: ['./factures.page.scss'],
})
export class FacturesPage implements OnInit, OnDestroy {
  @ViewChild(IonContent) content: IonContent;

  facturesInit: Facture[];
  factures: Facture[];
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  sub: Subscription = new Subscription();
  readonly routesNames = RoutesNames;
  readonly whereNav = WhereNavEntities;
  readonly enumTypeFacture = EnumTypeFacture;
  readonly appStateEnum = AppStateEnum;
  customActionSheetOptions = {
    header: 'Factures',
    subHeader: 'Sélectionné le type de facture',
  };
  constructor(
    private store: Store<AppState>,
    private facturesActions: FacturesActions,
    private facturesSelectors: FacturesSelectors,
    private facturesService: FacturesService
  ) {}

  ngOnInit() {
    this.store.dispatch(this.facturesActions.getAllEntities()());
    this.subFactures();
    this.dataState$ = this.store.select(this.facturesSelectors.getDataState());
    this.notification$ = this.store.select(
      this.facturesSelectors.getNotification()
    );
    this.errorMessage$ = this.store.select(
      this.facturesSelectors.getMessageError()
    );
  }

  //TODO SUBS AUX DATA FACTURE
  subFactures() {
    this.sub.add(
      this.store.select(this.facturesSelectors.getEntities()).subscribe({
        next: (factures) => {
          if (factures) {
            this.facturesInit = factures;
            this.factures = factures;
          }
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
    idFacture?: string
  ) {
    this.facturesService.onNav(whereNav, routeParam, idFacture);
  }
  //TODO DELETE ADMIN
  onDeleteFacture(idFacture: string) {
    this.store.dispatch(
      this.facturesActions.deleteEntitie()({ idEntitie: idFacture })
    );
  }

  //TODO FILTER
  onFilter($whereContainerEvent: any) {
    switch ($whereContainerEvent.target.value) {
      case EnumTypeFacture.eau:
        this.filter(EnumTypeFacture.eau);
        break;
      case EnumTypeFacture.location:
        this.filter(EnumTypeFacture.location);
        break;
      case EnumTypeFacture.electricite:
        this.filter(EnumTypeFacture.electricite);
        break;
      case EnumTypeFacture.salaire:
        this.filter(EnumTypeFacture.salaire);
        break;
      default:
        this.allFactures();
        break;
    }
  }
  filter(filter: EnumTypeFacture) {
    this.factures = this.facturesInit.filter(
      (facture) => facture.type === filter
    );
  }
  allFactures() {
    this.factures = this.facturesInit;
  }
  //TODO
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

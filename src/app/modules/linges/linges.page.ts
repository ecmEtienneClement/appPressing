import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { EnumTypeLinge, Linge } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { EntitiesDb } from '../servicesModules/modules.db';
import { WhereNavEntities } from '../servicesModules/modules.service';
import { LingesActions } from './ngrx/linges.actions';
import { LingesSelectors } from './ngrx/linges.selectors';
import { LingesService } from './services/linges.service';

@Component({
  selector: 'app-linges',
  templateUrl: './linges.page.html',
  styleUrls: ['./linges.page.scss'],
})
export class LingesPage implements OnInit, OnDestroy {
  @ViewChild(IonContent) content: IonContent;

  lingesInit: Linge[];
  linges: Linge[];
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  sub: Subscription = new Subscription();
  readonly routesNames = RoutesNames;
  readonly whereNav = WhereNavEntities;

  customActionSheetOptions = {
    header: 'Linges',
    subHeader: 'Sélectionnés critères de linges',
  };
  constructor(
    private store: Store<AppState>,
    private lingesActions: LingesActions,
    private lingesSelectors: LingesSelectors,
    private lingesService: LingesService,
    private db: EntitiesDb
  ) {}

  ngOnInit() {
    this.db.createTables();
    this.store.dispatch(this.lingesActions.getAllEntities()());
    this.subLinges();
    this.dataState$ = this.store.select(this.lingesSelectors.getDataState());
    this.notification$ = this.store.select(
      this.lingesSelectors.getNotification()
    );
    this.errorMessage$ = this.store.select(
      this.lingesSelectors.getMessageError()
    );
  }

  //TODO SUBS AUX DATA LINGE
  subLinges() {
    this.sub.add(
      this.store.select(this.lingesSelectors.getEntities()).subscribe({
        next: (linges) => {
          this.lingesInit = linges;
          this.linges = linges;
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
    idLinge?: string
  ) {
    this.lingesService.onNav(whereNav, routeParam, idLinge);
  }
  //TODO DELETE LINGE
  onDeleteLinge(idLinge: string) {
    this.store.dispatch(
      this.lingesActions.deleteEntitie()({ idEntitie: idLinge })
    );
  }

  //TODO FILTER

  onFilter($whereContainerEvent: any) {
    switch ($whereContainerEvent.target.value) {
      case 'kilo':
        this.linges = this.lingesInit.filter(
          (linge) => linge.Type_linge.nom === EnumTypeLinge.kilo
        );
        break;
      case 'piece':
        this.linges = this.lingesInit.filter(
          (linge) => linge.Type_linge.nom === EnumTypeLinge.piece
        );
        break;
      case 'payer':
        this.linges = this.lingesInit.filter((linge) => linge.payer === true);
        break;
      case 'non payer':
        this.linges = this.lingesInit.filter((linge) => linge.payer === false);
        break;
      case 'livre':
        this.linges = this.lingesInit.filter((linge) => linge.livre === true);
        break;
      case 'non livre':
        this.linges = this.lingesInit.filter((linge) => linge.livre === false);
        break;
      default:
        this.allLinges();
        break;
    }
  }

  allLinges() {
    this.linges = this.lingesInit;
  }
  //TODO
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

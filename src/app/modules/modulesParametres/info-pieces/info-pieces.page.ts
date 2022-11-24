import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { InfoPiece } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { WhereNavEntities } from '../../servicesModules/modules.service';
import { InfosPiecesActions } from './ngrx/infosPieces.actions';
import { InfosPiecesSelectors } from './ngrx/infosPieces.selectors';
import { InfosPiecesService } from './services/infosPieces.service';

@Component({
  selector: 'app-info-pieces',
  templateUrl: './info-pieces.page.html',
  styleUrls: ['./info-pieces.page.scss'],
})
export class InfoPiecesPage implements OnInit, OnDestroy {
  @ViewChild(IonContent) content: IonContent;

  readonly routesNames = RoutesNames;
  infoPiecesInit: InfoPiece[];
  infoPieces: InfoPiece[];
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  sub: Subscription = new Subscription();
  readonly dataStateEnum = AppStateEnum;
  readonly whereNav = WhereNavEntities;
  listsLoading: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor(
    private store: Store<AppState>,
    private infoPiecesActions: InfosPiecesActions,
    private infoPiecesSelectors: InfosPiecesSelectors,
    private infoPiecesService: InfosPiecesService
  ) {}

  ngOnInit() {
    this.store.dispatch(this.infoPiecesActions.getAllEntities()());
    this.subInfoPieces();
    this.dataState$ = this.store.select(
      this.infoPiecesSelectors.getDataState()
    );
    this.notification$ = this.store.select(
      this.infoPiecesSelectors.getNotification()
    );
    this.errorMessage$ = this.store.select(
      this.infoPiecesSelectors.getMessageError()
    );
  }

  //TODO SUBS AUX DATA INFO PIECE
  subInfoPieces() {
    this.sub.add(
      this.store.select(this.infoPiecesSelectors.getEntities()).subscribe({
        next: (dataInfoPieces) => {
          if (dataInfoPieces) {
            this.infoPiecesInit = dataInfoPieces;
            this.infoPieces = dataInfoPieces;
          }
        },
      })
    );
  }

  //TODO NAV
  onNav(
    wherNav: WhereNavEntities,
    routeParam?: RoutesNames,
    idInfoPiece?: string
  ) {
    this.infoPiecesService.onNav(wherNav, routeParam, idInfoPiece);
  }
  //TODO SEARCH
  handleChange(event: any) {
    const querySearch = event.target.value.toLowerCase();
    this.infoPieces = this.infoPiecesInit.filter(
      (infoPiece) => infoPiece.nom.toLowerCase().indexOf(querySearch) > -1
    );
  }
  //TODO SCROLL
  scrollToTop() {
    this.content.scrollToTop(500);
  }

  //TODO DELETE
  onDeleteInfosPiece(idInfosPiece: string) {
    this.store.dispatch(
      this.infoPiecesActions.deleteEntitie()({ idEntitie: idInfosPiece })
    );
  }
  //TODO
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

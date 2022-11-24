import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { InfoPiece } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { InfosPiecesActions } from '../ngrx/infosPieces.actions';
import { InfosPiecesSelectors } from '../ngrx/infosPieces.selectors';

@Component({
  selector: 'app-infos-pieces-info',
  templateUrl: './infos-pieces-info.component.html',
  styleUrls: ['./infos-pieces-info.component.scss'],
})
export class InfosPiecesInfoComponent implements OnInit, OnDestroy {
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  infoPiece$: Observable<InfoPiece> = new Observable();
  infoPiece: InfoPiece;
  dataState$: Observable<AppStateEnum> = new Observable();
  sub: Subscription = new Subscription();
  updated: boolean;
  prixLingeUpd: number;
  prixRepassageUpd: number;
  readonly routesNames = RoutesNames;
  constructor(
    private store: Store<AppState>,
    private infoPiecesActions: InfosPiecesActions,
    private infoPiecesSelectors: InfosPiecesSelectors,
  ) {}

  ngOnInit() {
    this.store.dispatch(this.infoPiecesActions.getAllEntities()());

    this.dataState$ = this.store.select(
      this.infoPiecesSelectors.getDataState()
    );
    this.notification$ = this.store.select(
      this.infoPiecesSelectors.getNotification()
    );
    this.errorMessage$ = this.store.select(
      this.infoPiecesSelectors.getMessageError()
    );
    this.infoPiece$ = this.store.select(
      this.infoPiecesSelectors.getEntitieById()
    );
    this.subInfosPiece();
  }

  //TODO SUBS AUX DATA INFO PIECE
  subInfosPiece() {
    this.sub.add(
      this.store.select(this.infoPiecesSelectors.getEntitieById()).subscribe({
        next: (dataInfosPiece) => {
          if (dataInfosPiece) {
            this.infoPiece = dataInfosPiece;
            this.prixLingeUpd = dataInfosPiece.prixLinge;
            this.prixRepassageUpd = dataInfosPiece.prixRepassage;
          }
        },
      })
    );
  }
  //TODO ON UPD
  onUpd() {
    this.updated = !this.updated;
  }
  //TODO ON SAVE
  onSave() {
    const prixL = this.infoPiece.prixLinge;
    const prixR = this.infoPiece.prixRepassage;
    if (this.prixLingeUpd < 100 || this.prixLingeUpd > 5000) {
      this.store.dispatch(
        this.infoPiecesActions.errorEntities()({
          error: 'Veillez verifier le prix du linge',
        })
      );
      return false;
    }
    if (this.prixRepassageUpd < 100 || this.prixLingeUpd > 5000) {
      this.store.dispatch(
        this.infoPiecesActions.errorEntities()({
          error: 'Veillez verifier le prix du repassage',
        })
      );
      return false;
    }
    const infoPieceUpd: InfoPiece = {
      ...this.infoPiece,
      prixLinge: this.prixLingeUpd !== prixL ? this.prixLingeUpd : prixL,
      prixRepassage:
        this.prixRepassageUpd !== prixR ? this.prixRepassageUpd : prixR,
    };

    this.store.dispatch(
      this.infoPiecesActions.updEntitie()({ entitie: infoPieceUpd })
    );
  }
  //TODO
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

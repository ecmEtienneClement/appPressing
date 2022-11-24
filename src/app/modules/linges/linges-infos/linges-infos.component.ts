import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import {
  DetailTypeKilo,
  DetailTypePiece,
  EnumTypeLinge,
  Linge,
} from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { DetailsTypePieceActions } from '../details-type-piece/ngrx/detailsTypePiece.actions';
import { DetailsTypePieceSelectors } from '../details-type-piece/ngrx/detailsTypePiece.selectors';
import { LingesSelectors } from '../ngrx/linges.selectors';

@Component({
  selector: 'app-linges-infos',
  templateUrl: './linges-infos.component.html',
  styleUrls: ['./linges-infos.component.scss'],
})
export class LingesInfosComponent implements OnInit, OnDestroy {
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  linge$: Observable<Linge> = new Observable();
  detailsTypePiece$: Observable<DetailTypePiece> = new Observable();
  detailsTypeKilo$: Observable<DetailTypeKilo> = new Observable();
  isDetailsTypePiece = false;
  dataState$: Observable<AppStateEnum> = new Observable();
  readonly routesNames = RoutesNames;
  readonly enumTypeLinge = EnumTypeLinge;
  sub: Subscription = new Subscription();

  constructor(
    private store: Store<AppState>,
    private lingesSelectorsService: LingesSelectors,
    private detailsTypePieceActions: DetailsTypePieceActions,
    private detailsTypePieceSelectorsService: DetailsTypePieceSelectors
  ) {}

  ngOnInit() {
    this.dataState$ = this.store.select(
      this.lingesSelectorsService.getDataState()
    );
    this.notification$ = this.store.select(
      this.lingesSelectorsService.getNotification()
    );
    this.errorMessage$ = this.store.select(
      this.lingesSelectorsService.getMessageError()
    );
    this.linge$ = this.store.select(
      this.lingesSelectorsService.getEntitieById()
    );
    this.detailsTypePiece$ = this.store.select(
      this.detailsTypePieceSelectorsService.getEntitie()
    );

    this.subLinge();
  }

  //TODO SUBS AUX DATA LINGE
  subLinge() {
    this.sub.add(
      this.store
        .select(this.lingesSelectorsService.getEntitieById())
        .subscribe({
          next: (dataLinge) => {
            if (dataLinge) {
              if (
                dataLinge.Type_linge.nom &&
                dataLinge.Type_linge.nom === EnumTypeLinge.piece
              ) {
                this.isDetailsTypePiece = true;
                this.store.dispatch(
                  this.detailsTypePieceActions.getEntitie()({
                    idEntitie: dataLinge.DetailTypePieceId,
                  })
                );
              }
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

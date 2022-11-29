import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import {
  DetailTypeKilo,
  DetailTypePiece,
  EnumTypeLinge,
  Linge,
} from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { LingesSelectors } from '../ngrx/linges.selectors';

@Component({
  selector: 'app-linges-infos',
  templateUrl: './linges-infos.component.html',
  styleUrls: ['./linges-infos.component.scss'],
})
export class LingesInfosComponent implements OnInit {
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  linge$: Observable<Linge> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  readonly routesNames = RoutesNames;
  readonly enumTypeLinge = EnumTypeLinge;

  constructor(
    private store: Store<AppState>,
    private lingesSelectorsService: LingesSelectors
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
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { Compte_bloquer } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { CmpBloquesActions } from '../ngrx/cmpBloques.actions';
import { CmpBloquesSelectors } from '../ngrx/cmpBloques.selectors';

@Component({
  selector: 'app-cmp-bloques-info',
  templateUrl: './cmp-bloques-info.component.html',
  styleUrls: ['./cmp-bloques-info.component.scss'],
})
export class CmpBloquesInfoComponent implements OnInit {
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  cmpBloques$: Observable<Compte_bloquer> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  readonly routesNames = RoutesNames;
  constructor(
    private store: Store<AppState>,
    private cmpBloquesSelectorsService: CmpBloquesSelectors,
    private cmpBloquesActionsService: CmpBloquesActions
  ) {}

  ngOnInit() {
    this.dataState$ = this.store.select(
      this.cmpBloquesSelectorsService.getDataState()
    );
    this.notification$ = this.store.select(
      this.cmpBloquesSelectorsService.getNotification()
    );
    this.errorMessage$ = this.store.select(
      this.cmpBloquesSelectorsService.getMessageError()
    );
    this.cmpBloques$ = this.store.select(
      this.cmpBloquesSelectorsService.getEntitieById()
    );
  }
  //TODO DELETE COMPTE

  onDeleteCmtBloquer(idCmtBloquer: string) {
    this.store.dispatch(
      this.cmpBloquesActionsService.deleteEntitie()({
        idEntitie: idCmtBloquer,
      })
    );
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { TypeLinge } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { TypesLingesActions } from './ngrx/typesLinges.actions';
import { TypesLingesSelectors } from './ngrx/typesLinges.selectors';

@Component({
  selector: 'app-types',
  templateUrl: './types.page.html',
  styleUrls: ['./types.page.scss'],
})
export class TypesPage implements OnInit, OnDestroy {
  readonly routesNames = RoutesNames;
  typesLinges: TypeLinge[];
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  sub: Subscription = new Subscription();

  constructor(
    private store: Store<AppState>,
    private typesLingesActions: TypesLingesActions,
    private typesLingesSelectors: TypesLingesSelectors
  ) {}

  ngOnInit() {
    this.store.dispatch(this.typesLingesActions.getAllEntities()());
    this.subTypesLinges();
    this.dataState$ = this.store.select(
      this.typesLingesSelectors.getDataState()
    );
    this.notification$ = this.store.select(
      this.typesLingesSelectors.getNotification()
    );
    this.errorMessage$ = this.store.select(
      this.typesLingesSelectors.getMessageError()
    );
  }

  //TODO SUBS AUX DATA TYPE
  subTypesLinges() {
    this.sub.add(
      this.store.select(this.typesLingesSelectors.getEntities()).subscribe({
        next: (dataTypesLinges) => {
          if (dataTypesLinges) {
            this.typesLinges = dataTypesLinges;
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

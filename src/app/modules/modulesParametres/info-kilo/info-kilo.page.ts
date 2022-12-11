import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { InfoKilo } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { InfosKiloActions } from './ngrx/infosKilo.actions';
import { InfosKiloSelectors } from './ngrx/infosKilo.selectors';

@Component({
  selector: 'app-info-kilo',
  templateUrl: './info-kilo.page.html',
  styleUrls: ['./info-kilo.page.scss'],
})
export class InfoKiloPage implements OnInit, OnDestroy {
  readonly routesNames = RoutesNames;
  infoKilos: InfoKilo[];
  updated: boolean;
  prixLingeUpd: number;
  prixRepassageUpd: number;
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  sub: Subscription = new Subscription();

  constructor(
    private store: Store<AppState>,
    private infoKilosActions: InfosKiloActions,
    private infoKilosSelectors: InfosKiloSelectors
  ) {}

  ngOnInit() {
    this.store.dispatch(this.infoKilosActions.getAllEntities()());
    this.dataState$ = this.store.select(this.infoKilosSelectors.getDataState());
    this.notification$ = this.store.select(
      this.infoKilosSelectors.getNotification()
    );
    this.errorMessage$ = this.store.select(
      this.infoKilosSelectors.getMessageError()
    );
    this.subInfosKilo();
  }

  //TODO SUBS AUX DATA INFO KILO
  subInfosKilo() {
    this.sub.add(
      this.store.select(this.infoKilosSelectors.getEntities()).subscribe({
        next: (dataInfosKilo) => {
          if (dataInfosKilo) {
            if (dataInfosKilo.length > 0) {
              this.infoKilos = dataInfosKilo;
              this.prixLingeUpd = this.infoKilos[0].prixLinge;
              this.prixRepassageUpd = this.infoKilos[0].prixRepassage;
            }
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
    const prixL = this.infoKilos[0].prixLinge;
    const prixR = this.infoKilos[0].prixRepassage;
    if (this.prixLingeUpd < 100 || this.prixLingeUpd > 5000) {
      this.store.dispatch(
        this.infoKilosActions.errorEntities()({
          error: 'Veillez verifier le prix du linge',
        })
      );
      return false;
    }
    if (this.prixRepassageUpd < 100 || this.prixLingeUpd > 5000) {
      this.store.dispatch(
        this.infoKilosActions.errorEntities()({
          error: 'Veillez verifier le prix du repassage',
        })
      );
      return false;
    }
    const infoKiloUpd: InfoKilo = {
      ...this.infoKilos[0],
      prixLinge: this.prixLingeUpd !== prixL ? this.prixLingeUpd : prixL,
      prixRepassage:
        this.prixRepassageUpd !== prixR ? this.prixRepassageUpd : prixR,
    };

    this.store.dispatch(
      this.infoKilosActions.updEntitie()({ entitie: infoKiloUpd })
    );
  }
  //TODO
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

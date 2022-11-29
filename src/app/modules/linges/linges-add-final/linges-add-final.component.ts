import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { EnumTypeLinge, Linge } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { LingesActions } from '../ngrx/linges.actions';
import { LingesSelectors } from '../ngrx/linges.selectors';
import { LingeDataState } from '../services/linges.data.state';

@Component({
  selector: 'app-linges-add-final',
  templateUrl: './linges-add-final.component.html',
  styleUrls: ['./linges-add-final.component.scss'],
})
export class LingesAddFinalComponent implements OnInit {
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  linge: Linge;
  dataState$: Observable<AppStateEnum> = new Observable();
  avance = false;
  montantAvance = 0;
  readonly routesNames = RoutesNames;
  readonly enumTypeLinge = EnumTypeLinge;

  constructor(
    private store: Store<AppState>,
    private lingesSelectorsService: LingesSelectors,
    private lingesActionsService: LingesActions,
    private lingesDataState: LingeDataState
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
    this.linge = this.lingesDataState.getNewLinge();
  }

  //TODO
  onAvance(event: any) {
    const checked = event.target.checked;
    if (checked) {
      this.avance = true;
    } else {
      this.avance = false;
    }
  }

  //TODO
  onPayer(event: any) {
    const checked = event.target.checked;
    if (checked) {
      this.linge.payer = true;
    } else {
      this.linge.payer = false;
    }
  }

  //TODO
  onLivrer(event: any) {
    const checked = event.target.checked;
    if (checked) {
      this.linge.livre = true;
    } else {
      this.linge.livre = false;
    }
  }

  //TODO
  onTerminer() {
    if (this.avance && this.montantAvance > 0) {
      this.linge.montantAvance = this.montantAvance;
      this.store.dispatch(
        this.lingesActionsService.updEntitie()({ entitie: this.linge })
      );
    } else {
      this.store.dispatch(
        this.lingesActionsService.updEntitie()({ entitie: this.linge })
      );
    }
  }
}

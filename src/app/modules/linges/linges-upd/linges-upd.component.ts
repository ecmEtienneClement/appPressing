/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { EnumTypeLinge, Linge } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { LingesActions } from '../ngrx/linges.actions';
import { LingesSelectors } from '../ngrx/linges.selectors';

@Component({
  selector: 'app-linges-upd',
  templateUrl: './linges-upd.component.html',
  styleUrls: ['./linges-upd.component.scss'],
})
export class LingesUpdComponent implements OnInit {
  notification$: Observable<string | null> = new Observable();
  errorMessage$: Observable<string | null> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
   payer = false;
  livre = false;
  montantAvance = 0;
  readonly routesNames = RoutesNames;
  readonly enumTypeLinge = EnumTypeLinge;
  linge: Linge = {
    ClientId: '',
    EmployeId: '',
    TypeLingeId: '',
    coordX: 0,
    coordY: 0,
    livre: false,
    payer: false,
    montantAvance: 0,
    prixLinge: 0,
  };
  constructor(
    private store: Store<AppState>,
    private lingesSelectorsService: LingesSelectors,
    private lingesActionsService: LingesActions
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
    this.onSubLinge();
  }

  //TODO SUB LINGE
  onSubLinge() {
    this.store.select(this.lingesSelectorsService.getEntitieById()).subscribe({
      next: (dataLinge) => {
        if (dataLinge) {
          this.linge = dataLinge;
          this.linge = JSON.parse(JSON.stringify(this.linge));
          this.onClotureLivre(dataLinge);
          this.onCloturePayer(dataLinge);
        }
      },
    });
  }

  //TODO
  onCloturePayer(linge: Linge) {
    if (linge.payer) {
      this.payer = true;
    }
  }
  //TODO
  onClotureLivre(linge: Linge) {
    if (linge.livre) {
      this.livre = true;
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
    if ( this.montantAvance > 0) {
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

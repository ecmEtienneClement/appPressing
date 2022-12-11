/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import {
  EnumTypeLinge,
  Linge,
  EtatFinancier,
} from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { AcceuilActions } from '../../acceuil/ngrx/acceuil.actions';
import { AcceuilSelectors } from '../../acceuil/ngrx/acceuil.selectors';
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
  idEtatFinancier = '';
  caisse = 0;
  depense = 0;
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
    private lingesActionsService: LingesActions,
    private etatFinancierActions: AcceuilActions,
    private etatFinancierSelectores: AcceuilSelectors
  ) {}

  ngOnInit() {
    this.store.dispatch(this.etatFinancierActions.getAllEntities()());
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
    this.onSubEtatFinancier();
  }
  //TODO SUB ETAT
  onSubEtatFinancier() {
    this.store.select(this.etatFinancierSelectores.getEntities()).subscribe({
      next: (data) => {
        if (data) {
          if (data.length > 0) {
            this.caisse = data[0].caisse;
            this.depense = data[0].depense;
            this.idEtatFinancier = data[0].id;
          }
        }
      },
    });
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
    if (this.montantAvance > 0) {
      this.linge.montantAvance = this.montantAvance;
      this.store.dispatch(
        this.lingesActionsService.updEntitie()({ entitie: this.linge })
      );
    } else {
      //Etat financier
      if (this.linge.livre === true) {
        const etat: EtatFinancier = {
          caisse: this.caisse + this.linge.prixLinge,
          depense: this.depense,
          id: this.idEtatFinancier,
        };
        this.store.dispatch(
          this.etatFinancierActions.updEntitie()({
            entitie: etat,
            onNavAfterUpd: false,
          })
        );
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
}

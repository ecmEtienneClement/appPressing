/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import {
  EnumTypeLinge,
  EtatFinancier,
  Linge,
} from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { AcceuilActions } from '../../acceuil/ngrx/acceuil.actions';
import { AcceuilSelectors } from '../../acceuil/ngrx/acceuil.selectors';
import { EmployersActions } from '../../employer/ngrx/employer.action';
import { LingesActions } from '../ngrx/linges.actions';
import { LingesSelectors } from '../ngrx/linges.selectors';
import { LingeDataState } from '../services/linges.data.state';

@Component({
  selector: 'app-linges-add-final',
  templateUrl: './linges-add-final.component.html',
  styleUrls: ['./linges-add-final.component.scss'],
})
export class LingesAddFinalComponent implements OnInit {
  notification$: Observable<string | null> = new Observable();
  errorMessage$: Observable<string | null> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  idEtatFinancier = '';
  caisse = 0;
  depense = 0;
  avance = false;
  montantAvance = 0;
  type = '';
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
    private lingesDataState: LingeDataState,
    private etatFinancierActions: AcceuilActions,
    private etatFinancierSelectores: AcceuilSelectors,
    private employersActions: EmployersActions
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
    this.linge = this.lingesDataState.getNewLinge();
    this.type = this.lingesDataState.getTypeLinge();
    /**
     * TODO JSON.parse(JSON.stringify(this.linge))
     * C'est mise en place pour enlever la lecture seule des propriétes du linge.
     * Vous pouvez vérifier si vous le commenté les méthodes onPayer() et onLivrer()
     * ne fonctionneront plus car les propriétes manipulées passeront en lecture seule
     */
    this.linge = JSON.parse(JSON.stringify(this.linge));
    this.onMontant();
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
  //TODO
  onMontant() {
    this.linge.prixLinge = this.lingesDataState.getMontantLinge();
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
      const etat: EtatFinancier = {
        caisse: this.caisse + this.montantAvance,
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
      this.store.dispatch(this.employersActions.getAllEntities()());
    } else {
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
      this.store.dispatch(this.employersActions.getAllEntities()());
    }
  }
}

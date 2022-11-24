import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { Facture } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { WhereNavEntities } from '../../servicesModules/modules.service';
import { FacturesSelectors } from '../ngrx/factures.selectors';
import { FacturesService } from '../services/factures.service';

@Component({
  selector: 'app-factures-info',
  templateUrl: './factures-info.component.html',
  styleUrls: ['./factures-info.component.scss'],
})
export class FacturesInfoComponent implements OnInit {
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  facture$: Observable<Facture> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  readonly routesNames = RoutesNames;
  constructor(
    private store: Store<AppState>,
    private factureService: FacturesService,
    private facturesSelectorsService: FacturesSelectors
  ) {}

  ngOnInit() {
    this.dataState$ = this.store.select(
      this.facturesSelectorsService.getDataState()
    );
    this.notification$ = this.store.select(
      this.facturesSelectorsService.getNotification()
    );
    this.errorMessage$ = this.store.select(
      this.facturesSelectorsService.getMessageError()
    );
    this.facture$ = this.store.select(
      this.facturesSelectorsService.getEntitieById()
    );
  }

  //TODO NAVIGATION FACTURE
  onNavUpdate(idFacture: string) {
    this.factureService.onNav(
      WhereNavEntities.updEntitie,
      RoutesNames.facturesUpd,
      idFacture
    );
  }
}

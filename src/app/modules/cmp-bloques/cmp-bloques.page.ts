import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { Compte_bloquer } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { WhereNavEntities } from '../servicesModules/modules.service';
import { CmpBloquesActions } from './ngrx/cmpBloques.actions';
import { CmpBloquesSelectors } from './ngrx/cmpBloques.selectors';
import { CmpBloquesService } from './services/cmpBloques.service';

@Component({
  selector: 'app-cmp-bloques',
  templateUrl: './cmp-bloques.page.html',
  styleUrls: ['./cmp-bloques.page.scss'],
})
export class CmpBloquesPage implements OnInit, OnDestroy {
  @ViewChild(IonContent) content: IonContent;

  cmpBloquesInit: Compte_bloquer[];
  cmpBloques: Compte_bloquer[];
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  sub: Subscription = new Subscription();
  readonly routesNames = RoutesNames;
  readonly whereNav = WhereNavEntities;

  constructor(
    public store: Store<AppState>,
    private cmpBloquesActionsService: CmpBloquesActions,
    private cmpBloquesSelectorsService: CmpBloquesSelectors,
    private cmpBloquesService: CmpBloquesService
  ) {}

  ngOnInit() {
    this.store.dispatch(this.cmpBloquesActionsService.getAllEntities()());
    this.subCompteBloquers();
    this.dataState$ = this.store.select(
      this.cmpBloquesSelectorsService.getDataState()
    );
    this.notification$ = this.store.select(
      this.cmpBloquesSelectorsService.getNotification()
    );
    this.errorMessage$ = this.store.select(
      this.cmpBloquesSelectorsService.getMessageError()
    );
  }

  //TODO SUBS AUX DATA COMPTE
  subCompteBloquers() {
    this.sub.add(
      this.store
        .select(this.cmpBloquesSelectorsService.getEntities())
        .subscribe({
          next: (cmpBloquesDate) => {
            if (cmpBloquesDate) {
              this.cmpBloquesInit = cmpBloquesDate;
              this.cmpBloques = cmpBloquesDate;
            }
          },
        })
    );
  }
  //TODO SEARCH
  handleChange(event: any) {
    const querySearch = event.target.value.toLowerCase();
    this.cmpBloques = this.cmpBloquesInit.filter(
      (cmpBloque) => cmpBloque.email.toLowerCase().indexOf(querySearch) > -1
    );
  }
  //TODO SCROLL
  scrollToTop() {
    this.content.scrollToTop(500);
  }
  //TODO NAV
  onNav(
    whereNav: WhereNavEntities,
    routeParam?: RoutesNames,
    idEmploye?: string
  ) {
    this.cmpBloquesService.onNav(whereNav, routeParam, idEmploye);
  }
  //TODO DELETE COMPTE
  onDeleteCmtBloquer(idCmtBloquer: string) {
    this.store.dispatch(
      this.cmpBloquesActionsService.deleteEntitie()({
        idEntitie: idCmtBloquer,
      })
    );
  }
  //TODO
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

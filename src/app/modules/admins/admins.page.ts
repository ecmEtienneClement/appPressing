import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { Admin } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { WhereNavEntities } from '../servicesModules/modules.service';
import { AdminsActions } from './ngrx/admins.actions';
import { AdminsSelectors } from './ngrx/admins.selectors';
import { AdminsService } from './services/admins.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.page.html',
  styleUrls: ['./admins.page.scss'],
})
export class AdminsPage implements OnInit, OnDestroy {
  @ViewChild(IonContent) content: IonContent;

  adminInit: Admin[];
  admins: Admin[];
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  sub: Subscription = new Subscription();
  readonly routesNames = RoutesNames;
  readonly whereNav = WhereNavEntities;

  constructor(
    private store: Store<AppState>,
    private adminsActions: AdminsActions,
    private adminsSelectors: AdminsSelectors,
    private adminsService: AdminsService
  ) {}

  ngOnInit() {
    this.store.dispatch(this.adminsActions.getAllEntities()());
    this.subAdmins();
    this.dataState$ = this.store.select(this.adminsSelectors.getDataState());
    this.notification$ = this.store.select(
      this.adminsSelectors.getNotification()
    );
    this.errorMessage$ = this.store.select(
      this.adminsSelectors.getMessageError()
    );
  }

  //TODO SUBS AUX DATA ADMIN
  subAdmins() {
    this.sub.add(
      this.store.select(this.adminsSelectors.getEntities()).subscribe({
        next: (admins) => {
          this.adminInit = admins;
          this.admins = admins;
        },
      })
    );
  }
  //TODO SEARCH
  handleChange(event: any) {
    const querySearch = event.target.value.toLowerCase();
    this.admins = this.adminInit.filter(
      (admin) => admin.prenom.toLowerCase().indexOf(querySearch) > -1
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
    idAdmin?: string
  ) {
    this.adminsService.onNav(whereNav, routeParam, idAdmin);
  }
  //TODO DELETE ADMIN
  onDeleteAdmin(idAdmin: string) {
    this.store.dispatch(
      this.adminsActions.deleteEntitie()({ idEntitie: idAdmin })
    );
  }
  //TODO
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

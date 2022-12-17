import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { Employe } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { EmployersActions } from './ngrx/employer.action';
import { EmployersSelectors } from './ngrx/employers.selectors';
import { EmployerService } from './services.ts/employers.service';
import { WhereNavEntities } from '../servicesModules/modules.service';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.page.html',
  styleUrls: ['./employer.page.scss'],
})
export class EmployerPage implements OnInit, OnDestroy {
  @ViewChild(IonContent) content: IonContent;

  employesInit: Employe[];
  employes: Employe[];
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  sub: Subscription = new Subscription();
  readonly routesNames = RoutesNames;
  readonly whereNav = WhereNavEntities;
  readonly appStateEnum = AppStateEnum;
  constructor(
    public store: Store<AppState>,
    private employersActions: EmployersActions,
    private employerSelectors: EmployersSelectors,
    private employerService: EmployerService
  ) {}

  ngOnInit() {
    this.store.dispatch(this.employersActions.getAllEntities()());
    this.subEmployes();
    this.dataState$ = this.store.select(this.employerSelectors.getDataState());
    this.notification$ = this.store.select(
      this.employerSelectors.getNotification()
    );
    this.errorMessage$ = this.store.select(
      this.employerSelectors.getMessageError()
    );
  }

  //TODO SUBS AUX DATA EMPLOYER
  subEmployes() {
    this.sub.add(
      this.store.select(this.employerSelectors.getEntities()).subscribe({
        next: (employes) => {
          if (employes) {
            this.employesInit = employes;
            this.employes = employes;
          }
        },
      })
    );
  }
  //TODO SEARCH
  handleChange(event: any) {
    const querySearch = event.target.value.toLowerCase();
    this.employes = this.employesInit.filter(
      (employe) => employe.prenom.toLowerCase().indexOf(querySearch) > -1
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
    this.employerService.onNav(whereNav, routeParam, idEmploye);
  }
  //TODO DELETE CLIENT
  onDeleteEmploye(idEmploye: string) {
    this.store.dispatch(
      this.employersActions.deleteEntitie()({ idEntitie: idEmploye })
    );
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

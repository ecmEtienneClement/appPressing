import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { Admin } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { WhereNavEntities } from '../../servicesModules/modules.service';
import { AdminsSelectors } from '../ngrx/admins.selectors';

@Component({
  selector: 'app-admins-empoyer',
  templateUrl: './admins-empoyer.component.html',
  styleUrls: ['./admins-empoyer.component.scss'],
})
export class AdminsEmpoyerComponent implements OnInit {
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  admin$: Observable<Admin> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  readonly routesNames = RoutesNames;
  readonly appStateEnum = AppStateEnum;
  readonly whereNav = WhereNavEntities;
  constructor(
    private store: Store<AppState>,
    private adminsSelectorsService: AdminsSelectors
  ) {}

  ngOnInit() {
    this.dataState$ = this.store.select(
      this.adminsSelectorsService.getDataState()
    );
    this.notification$ = this.store.select(
      this.adminsSelectorsService.getNotification()
    );
    this.errorMessage$ = this.store.select(
      this.adminsSelectorsService.getMessageError()
    );
    this.admin$ = this.store.select(
      this.adminsSelectorsService.getEntitieById()
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { Admin } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { AdminsSelectors } from '../ngrx/admins.selectors';
import { AdminsService } from '../services/admins.service';

@Component({
  selector: 'app-admins-cmp-bloquer',
  templateUrl: './admins-cmp-bloquer.component.html',
  styleUrls: ['./admins-cmp-bloquer.component.scss'],
})
export class AdminsCmpBloquerComponent implements OnInit {
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  admin$: Observable<Admin> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  readonly routesNames = RoutesNames;
  readonly appStateEnum = AppStateEnum;
  constructor(
    private store: Store<AppState>,
    private adminService: AdminsService,
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

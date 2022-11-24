import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { Employe } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { EmployersSelectors } from '../ngrx/employers.selectors';

@Component({
  selector: 'app-employer-client',
  templateUrl: './employer-client.component.html',
  styleUrls: ['./employer-client.component.scss'],
})
export class EmployerClientComponent implements OnInit {
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  employer$: Observable<Employe> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  readonly routesNames = RoutesNames;
  constructor(
    private store: Store<AppState>,
    private employersSelectores: EmployersSelectors
  ) {}

  ngOnInit() {
    this.dataState$ = this.store.select(
      this.employersSelectores.getDataState()
    );
    this.notification$ = this.store.select(
      this.employersSelectores.getNotification()
    );
    this.errorMessage$ = this.store.select(
      this.employersSelectores.getMessageError()
    );
    this.employer$ = this.store.select(
      this.employersSelectores.getEntitieById()
    );
  }
}

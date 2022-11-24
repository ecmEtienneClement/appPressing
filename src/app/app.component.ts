import { Component } from '@angular/core';
import { RoutesNames } from './routes.config';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  readonly routesNames = RoutesNames;

  constructor() {}
}

import { Component, OnInit } from '@angular/core';
import { RoutesNames } from '../routes.config';

@Component({
  selector: 'app-forbiden',
  templateUrl: './forbiden.component.html',
  styleUrls: ['./forbiden.component.scss'],
})
export class ForbidenComponent implements OnInit {
  readonly routesNames = RoutesNames;
  constructor() {}

  ngOnInit() {}
}

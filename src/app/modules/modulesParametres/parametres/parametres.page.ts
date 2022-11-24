import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesNames } from 'src/app/routes.config';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.page.html',
  styleUrls: ['./parametres.page.scss'],
})
export class ParametresPage implements OnInit {
  readonly routesNames = RoutesNames;
  constructor(private router: Router) {}

  ngOnInit() {}

  //TODO NAV
  onNav(routeParam: RoutesNames) {
    this.router.navigate([routeParam]);
  }
}

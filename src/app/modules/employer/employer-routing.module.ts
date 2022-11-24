import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesNames } from 'src/app/routes.config';
import { EmployerAddAndUpdComponent } from './employer-add-and-upd/employer-add-and-upd.component';
import { EmployerClientComponent } from './employer-client/employer-client.component';
import { EmployerDemandeDepenseComponent } from './employer-demande-depense/employer-demande-depense.component';
import { EmployerInfoComponent } from './employer-info/employer-info.component';
import { EmployerLingeComponent } from './employer-linge/employer-linge.component';

import { EmployerPage } from './employer.page';

const routes: Routes = [
  {
    path: '',
    component: EmployerPage,
  },
  {
    path: `${RoutesNames.employersInfo}/:id`,
    component: EmployerInfoComponent,
  },
  {
    path: `${RoutesNames.employersAdd}`,
    component: EmployerAddAndUpdComponent,
  },
  {
    path: `${RoutesNames.employersUpd}/:id`,
    component: EmployerAddAndUpdComponent,
  },
  {
    path: `${RoutesNames.employersLinges}/:id`,
    component: EmployerLingeComponent,
  },
  {
    path: `${RoutesNames.employersClients}/:id`,
    component: EmployerClientComponent,
  },
  {
    path: `${RoutesNames.employersDmdDepense}/:id`,
    component: EmployerDemandeDepenseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployerPageRoutingModule {}

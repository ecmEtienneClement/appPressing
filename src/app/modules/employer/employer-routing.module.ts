import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesNames } from 'src/app/routes.config';
import { EmployerAddAndUpdComponent } from './employer-add-and-upd/employer-add-and-upd.component';
import { EmployerClientComponent } from './employer-client/employer-client.component';
import { EmployerDemandeDepenseComponent } from './employer-demande-depense/employer-demande-depense.component';
import { EmployerInfoComponent } from './employer-info/employer-info.component';
import { EmployerLingeComponent } from './employer-linge/employer-linge.component';
import { EmployerPage } from './employer.page';
import { EmployersResolver } from './services.ts/employers.resolver';

const routes: Routes = [
  {
    path: '',
    component: EmployerPage,
  },
  {
    path: `${RoutesNames.employersInfo}/:id`,
    resolve: { employersResolver: EmployersResolver },
    component: EmployerInfoComponent,
  },
  {
    path: `${RoutesNames.employersAdd}`,
    resolve: { employersResolver: EmployersResolver },
    component: EmployerAddAndUpdComponent,
  },
  {
    path: `${RoutesNames.employersUpd}/:id`,
    resolve: { employersResolver: EmployersResolver },
    component: EmployerAddAndUpdComponent,
  },
  {
    path: `${RoutesNames.employersLinges}/:id`,
    resolve: { employersResolver: EmployersResolver },
    component: EmployerLingeComponent,
  },
  {
    path: `${RoutesNames.employersClients}/:id`,
    resolve: { employersResolver: EmployersResolver },
    component: EmployerClientComponent,
  },
  {
    path: `${RoutesNames.employersDmdDepense}/:id`,
    resolve: { employersResolver: EmployersResolver },
    component: EmployerDemandeDepenseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployerPageRoutingModule {}

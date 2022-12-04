import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesNames } from 'src/app/routes.config';
import { EmployerAuthorization } from 'src/app/servicesApp/employer.authorization';
import { AddAndUpdClientComponent } from './add-and-upd-client/add-and-upd-client.component';
import { ClientLingesComponent } from './client-linges/client-linges.component';
import { ClientsInfoComponent } from './clients-info/clients-info.component';
import { ClientsPage } from './clients.page';
import { ClientsResolver } from './services/clients.resolver';

const routes: Routes = [
  {
    path: '',
    component: ClientsPage,
  },
  {
    path: `${RoutesNames.clientsInfo}/:id`,
    resolve: { clientsResolver: ClientsResolver },
    component: ClientsInfoComponent,
  },
  {
    path: `${RoutesNames.clientsAdd}`,
    canActivate: [EmployerAuthorization],
    component: AddAndUpdClientComponent,
  },
  {
    path: `${RoutesNames.clientsUpd}/:id`,
    canActivate: [EmployerAuthorization],
    resolve: { clientsResolver: ClientsResolver },

    component: AddAndUpdClientComponent,
  },
  {
    path: `${RoutesNames.clientsLinges}/:id`,
    resolve: { clientsResolver: ClientsResolver },
    component: ClientLingesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsPageRoutingModule {}

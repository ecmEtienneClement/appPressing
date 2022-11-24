import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesNames } from 'src/app/routes.config';
import { AddAndUpdClientComponent } from './add-and-upd-client/add-and-upd-client.component';
import { ClientLingesComponent } from './client-linges/client-linges.component';
import { ClientsInfoComponent } from './clients-info/clients-info.component';
import { ClientsPage } from './clients.page';

const routes: Routes = [
  {
    path: '',
    component: ClientsPage,
  },
  {
    path: `${RoutesNames.clientsInfo}/:id`,
    component: ClientsInfoComponent,
  },
  {
    path: `${RoutesNames.clientsAdd}`,
    component: AddAndUpdClientComponent,
  },
  {
    path: `${RoutesNames.clientsUpd}/:id`,
    component: AddAndUpdClientComponent,
  },
  {
    path: `${RoutesNames.clientsLinges}/:id`,
    component: ClientLingesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesNames } from 'src/app/routes.config';
import { AdminsAddAndUpdComponent } from './admins-add-and-upd/admins-add-and-upd.component';
import { AdminsCmpBloquerComponent } from './admins-cmp-bloquer/admins-cmp-bloquer.component';
import { AdminsEmpoyerComponent } from './admins-empoyer/admins-empoyer.component';
import { AdminsFacDmdDepComponent } from './admins-fac-dmd-dep/admins-fac-dmd-dep.component';
import { AdminsInfoComponent } from './admins-info/admins-info.component';

import { AdminsPage } from './admins.page';

const routes: Routes = [
  {
    path: '',
    component: AdminsPage,
  },
  {
    path: `${RoutesNames.adminsAdd}`,
    component: AdminsAddAndUpdComponent,
  },
  {
    path: `${RoutesNames.adminsUpd}/:id`,
    component: AdminsAddAndUpdComponent,
  },
  {
    path: `${RoutesNames.adminsInfo}/:id`,
    component: AdminsInfoComponent,
  },
  {
    path: `${RoutesNames.adminsEmployers}/:id`,
    component: AdminsEmpoyerComponent,
  },
  {
    path: `${RoutesNames.adminsCmtBloquer}/:id`,
    component: AdminsCmpBloquerComponent,
  },

  {
    path: `${RoutesNames.adminsFacDepDmd}/:id`,
    component: AdminsFacDmdDepComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminsPageRoutingModule {}

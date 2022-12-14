import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesNames } from 'src/app/routes.config';
import { DmdDepenseAddAndUpdComponent } from './dmd-depense-add-and-upd/dmd-depense-add-and-upd.component';
import { DmdDepenseInfoComponent } from './dmd-depense-info/dmd-depense-info.component';

import { DmdDepensePage } from './dmd-depense.page';
import { DmdDepensesResolver } from './services/dmdDepenses.resolver';

const routes: Routes = [
  {
    path: '',
    component: DmdDepensePage,
  },
  {
    path: `${RoutesNames.dmdDepensesInfo}/:id`,
    resolve: { dmdDepensesResolver: DmdDepensesResolver },
    component: DmdDepenseInfoComponent,
  },
  {
    path: `${RoutesNames.dmdDepensesAdd}`,
    component: DmdDepenseAddAndUpdComponent,
  },
  {
    path: `${RoutesNames.dmdDepensesUpd}/:id`,
    resolve: { dmdDepensesResolver: DmdDepensesResolver },
    component: DmdDepenseAddAndUpdComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DmdDepensePageRoutingModule {}

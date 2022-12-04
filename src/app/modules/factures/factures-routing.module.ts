import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesNames } from 'src/app/routes.config';
import { FacturesAddAndUpdComponent } from './factures-add-and-upd/factures-add-and-upd.component';
import { FacturesInfoComponent } from './factures-info/factures-info.component';
import { FacturesPage } from './factures.page';
import { FacturesResolver } from './services/factures.resolver';

const routes: Routes = [
  {
    path: '',
    component: FacturesPage,
  },
  {
    path: `${RoutesNames.facturesInfo}/:id`,
    resolve: { facturesResolver: FacturesResolver },
    component: FacturesInfoComponent,
  },
  {
    path: `${RoutesNames.facturesAdd}`,
    component: FacturesAddAndUpdComponent,
  },
  {
    path: `${RoutesNames.facturesUpd}/:id`,
    resolve: { facturesResolver: FacturesResolver },
    component: FacturesAddAndUpdComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacturesPageRoutingModule {}

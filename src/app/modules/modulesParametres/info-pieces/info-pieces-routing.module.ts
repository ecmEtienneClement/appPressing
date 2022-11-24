import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesNames } from 'src/app/routes.config';
import { InfoPiecesAddComponent } from './info-pieces-add/info-pieces-add.component';

import { InfoPiecesPage } from './info-pieces.page';
import { InfosPiecesInfoComponent } from './infos-pieces-info/infos-pieces-info.component';

const routes: Routes = [
  {
    path: '',
    component: InfoPiecesPage,
  },
  {
    path: `${RoutesNames.infosPiecesAdd}`,
    component: InfoPiecesAddComponent,
  },
  {
    path: `${RoutesNames.infosPiecesInfoAndUpd}/:id`,
    component: InfosPiecesInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPiecesPageRoutingModule {}

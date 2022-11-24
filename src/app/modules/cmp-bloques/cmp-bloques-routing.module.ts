import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesNames } from 'src/app/routes.config';
import { CmpBloquesAddComponent } from './cmp-bloques-add/cmp-bloques-add.component';
import { CmpBloquesInfoComponent } from './cmp-bloques-info/cmp-bloques-info.component';

import { CmpBloquesPage } from './cmp-bloques.page';

const routes: Routes = [
  {
    path: '',
    component: CmpBloquesPage,
  },
  {
    path: `${RoutesNames.cmpBloquesInfo}/:id`,
    component: CmpBloquesInfoComponent,
  },
  {
    path: `${RoutesNames.cmpBloquesAdd}`,
    component: CmpBloquesAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CmpBloquesPageRoutingModule {}

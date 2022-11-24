import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoKiloPage } from './info-kilo.page';

const routes: Routes = [
  {
    path: '',
    component: InfoKiloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoKiloPageRoutingModule {}

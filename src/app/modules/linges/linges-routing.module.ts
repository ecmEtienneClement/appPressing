import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesNames } from 'src/app/routes.config';
import { LingesAddDetailsTypeComponent } from './linges-add-details-type/linges-add-details-type.component';
import { LingesAddFinalComponent } from './linges-add-final/linges-add-final.component';
import { LingesAddTypeAndClientComponent } from './linges-add-type-and-client/linges-add-type-and-client.component';
import { LingesInfosComponent } from './linges-infos/linges-infos.component';
import { LingesPage } from './linges.page';

const routes: Routes = [
  {
    path: '',
    component: LingesPage,
  },
  {
    path: `${RoutesNames.lingesInfo}/:id`,
    component: LingesInfosComponent,
  },

  {
    path: `${RoutesNames.lingesAddTypeAndClient}`,
    component: LingesAddTypeAndClientComponent,
  },
  {
    path: `${RoutesNames.lingesAddDetailsType}`,
    component: LingesAddDetailsTypeComponent,
  },
  {
    path: `${RoutesNames.lingesAddFinale}`,
    component: LingesAddFinalComponent,
  },
  {
    path: 'details-type-piece',
    loadChildren: () => import('./details-type-piece/details-type-piece.module').then( m => m.DetailsTypePiecePageModule)
  },
  {
    path: 'details-type-kilo',
    loadChildren: () => import('./details-type-kilo/details-type-kilo.module').then( m => m.DetailsTypeKiloPageModule)
  },
  {
    path: 'details-piece',
    loadChildren: () => import('./details-piece/details-piece.module').then( m => m.DetailsPiecePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LingesPageRoutingModule {}

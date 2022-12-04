import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesNames } from 'src/app/routes.config';
import { EmployerAuthorization } from 'src/app/servicesApp/employer.authorization';
import { LingesAddDetailsTypeComponent } from './linges-add-details-type/linges-add-details-type.component';
import { LingesAddFinalComponent } from './linges-add-final/linges-add-final.component';
import { LingesAddTypeAndClientComponent } from './linges-add-type-and-client/linges-add-type-and-client.component';
import { LingesInfosComponent } from './linges-infos/linges-infos.component';
import { LingesUpdComponent } from './linges-upd/linges-upd.component';
import { LingesPage } from './linges.page';
import { LingesResolver } from './services/linges.resolver';

const routes: Routes = [
  {
    path: '',
    component: LingesPage,
  },
  {
    path: `${RoutesNames.lingesInfo}/:id`,
    resolve: { lingesResolver: LingesResolver },
    component: LingesInfosComponent,
  },
  {
    path: `${RoutesNames.lingesUpd}/:id`,
    canActivate: [EmployerAuthorization],
    resolve: { lingesResolver: LingesResolver },
    component: LingesUpdComponent,
  },
  {
    path: `${RoutesNames.lingesAddTypeAndClient}`,
    canActivate: [EmployerAuthorization],
    resolve: { lingesResolver: LingesResolver},
    component: LingesAddTypeAndClientComponent,
  },
  {
    path: `${RoutesNames.lingesAddDetailsType}`,
    canActivate: [EmployerAuthorization],
    resolve: { lingesResolver: LingesResolver},
    component: LingesAddDetailsTypeComponent,
  },
  {
    path: `${RoutesNames.lingesAddFinale}`,
    canActivate: [EmployerAuthorization],
    resolve: { lingesResolver: LingesResolver},
    component: LingesAddFinalComponent,
  },

  //Ces deux routes ne sont pas utiliser, raison pour la quelle elles ne sont pas integrées dans [RoutesNames].
  //Mais elles seront chargées pour la mise en place de leur state respectif.
  {
    path: 'details-type-piece',
    loadChildren: () =>
      import('./details-type-piece/details-type-piece.module').then(
        (m) => m.DetailsTypePiecePageModule
      ),
  },
  {
    path: 'details-type-kilo',
    loadChildren: () =>
      import('./details-type-kilo/details-type-kilo.module').then(
        (m) => m.DetailsTypeKiloPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LingesPageRoutingModule {}

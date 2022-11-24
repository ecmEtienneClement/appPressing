import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RoutesNames } from './routes.config';

const routes: Routes = [
  {
    path: RoutesNames.home,
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: RoutesNames.admins,
    loadChildren: () =>
      import('./modules/admins/admins.module').then((m) => m.AdminsPageModule),
  },
  {
    path: RoutesNames.employers,
    loadChildren: () =>
      import('./modules/employer/employer.module').then(
        (m) => m.EmployerPageModule
      ),
  },
  {
    path: RoutesNames.clients,
    loadChildren: () =>
      import('./modules/clients/clients.module').then(
        (m) => m.ClientsPageModule
      ),
  },

  {
    path: RoutesNames.factures,
    loadChildren: () =>
      import('./modules/factures/factures.module').then(
        (m) => m.FacturesPageModule
      ),
  },
  {
    path: RoutesNames.dmdDepenses,
    loadChildren: () =>
      import('./modules/dmd-depense/dmd-depense.module').then(
        (m) => m.DmdDepensePageModule
      ),
  },
  {
    path: RoutesNames.cmpBloques,
    loadChildren: () =>
      import('./modules/cmp-bloques/cmp-bloques.module').then(
        (m) => m.CmpBloquesPageModule
      ),
  },
  {
    path: RoutesNames.typesLinges,
    loadChildren: () =>
      import('./modules/modulesParametres/typesLinges/types.module').then(
        (m) => m.TypesPageModule
      ),
  },
  {
    path: RoutesNames.infosPieces,
    loadChildren: () =>
      import('./modules/modulesParametres/info-pieces/info-pieces.module').then(
        (m) => m.InfoPiecesPageModule
      ),
  },
  {
    path: RoutesNames.infosKilo,
    loadChildren: () =>
      import('./modules/modulesParametres/info-kilo/info-kilo.module').then(
        (m) => m.InfoKiloPageModule
      ),
  },
  {
    path: RoutesNames.parametres,
    loadChildren: () =>
      import('./modules/modulesParametres/parametres/parametres.module').then(
        (m) => m.ParametresPageModule
      ),
  },
  {
    path: RoutesNames.linges,
    loadChildren: () =>
      import('./modules/linges/linges.module').then((m) => m.LingesPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ForbidenComponent } from './forbiden/forbiden.component';
import { RoutesNames } from './routes.config';
import { AdminAuthorization } from './servicesApp/admin.authorization';
import { AuthAuthorization } from './servicesApp/auth.authorization';

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
    path: RoutesNames.forbiden,
    component: ForbidenComponent,
  },
  {
    path: RoutesNames.admins,
    canActivate: [AuthAuthorization, AdminAuthorization],
    loadChildren: () =>
      import('./modules/admins/admins.module').then((m) => m.AdminsPageModule),
  },
  {
    path: RoutesNames.employers,
    canActivate: [AuthAuthorization, AdminAuthorization],
    loadChildren: () =>
      import('./modules/employer/employer.module').then(
        (m) => m.EmployerPageModule
      ),
  },
  {
    path: RoutesNames.clients,
    canActivate: [AuthAuthorization],
    loadChildren: () =>
      import('./modules/clients/clients.module').then(
        (m) => m.ClientsPageModule
      ),
  },

  {
    path: RoutesNames.factures,
    canActivate: [AuthAuthorization, AdminAuthorization],
    loadChildren: () =>
      import('./modules/factures/factures.module').then(
        (m) => m.FacturesPageModule
      ),
  },
  {
    path: RoutesNames.dmdDepenses,
    canActivate: [AuthAuthorization],
    loadChildren: () =>
      import('./modules/dmd-depense/dmd-depense.module').then(
        (m) => m.DmdDepensePageModule
      ),
  },
  {
    path: RoutesNames.cmpBloques,
    canActivate: [AuthAuthorization, AdminAuthorization],
    loadChildren: () =>
      import('./modules/cmp-bloques/cmp-bloques.module').then(
        (m) => m.CmpBloquesPageModule
      ),
  },
  {
    path: RoutesNames.typesLinges,
    canActivate: [AuthAuthorization, AdminAuthorization],
    loadChildren: () =>
      import('./modules/modulesParametres/typesLinges/types.module').then(
        (m) => m.TypesPageModule
      ),
  },
  {
    path: RoutesNames.infosPieces,
    canActivate: [AuthAuthorization, AdminAuthorization],
    loadChildren: () =>
      import('./modules/modulesParametres/info-pieces/info-pieces.module').then(
        (m) => m.InfoPiecesPageModule
      ),
  },
  {
    path: RoutesNames.infosKilo,
    canActivate: [AuthAuthorization, AdminAuthorization],
    loadChildren: () =>
      import('./modules/modulesParametres/info-kilo/info-kilo.module').then(
        (m) => m.InfoKiloPageModule
      ),
  },
  {
    path: RoutesNames.parametres,
    canActivate: [AuthAuthorization, AdminAuthorization],
    loadChildren: () =>
      import('./modules/modulesParametres/parametres/parametres.module').then(
        (m) => m.ParametresPageModule
      ),
  },
  {
    path: RoutesNames.linges,
    canActivate: [AuthAuthorization],
    loadChildren: () =>
      import('./modules/linges/linges.module').then((m) => m.LingesPageModule),
  },

  {
    path: RoutesNames.etatFinancier,
    loadChildren: () =>
      import('./modules/acceuil/acceuil.module').then(
        (m) => m.AcceuilPageModule
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

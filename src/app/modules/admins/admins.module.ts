import { NgModule } from '@angular/core';
import { AdminsPageRoutingModule } from './admins-routing.module';
import { AdminsPage } from './admins.page';
import { AdminsDataService } from './services/admins.data.service';
import { AdminsService } from './services/admins.service';
import { EffectsModule } from '@ngrx/effects';
import { AdminsEffects } from './ngrx/admins.effects';
import { StoreModule } from '@ngrx/store';
import { NameStateEntities } from 'src/app/appState/app.state';
import { GetAdminsReducer } from './ngrx/admins.reducer';
import { ShearedModulesModule } from 'src/app/sheared-modules/sheared-modules.module';
import { AdminsInfoComponent } from './admins-info/admins-info.component';
import { AdminsEmpoyerComponent } from './admins-empoyer/admins-empoyer.component';
import { AdminsCmpBloquerComponent } from './admins-cmp-bloquer/admins-cmp-bloquer.component';
import { AdminsAddAndUpdComponent } from './admins-add-and-upd/admins-add-and-upd.component';
import { AdminsFacDmdDepComponent } from './admins-fac-dmd-dep/admins-fac-dmd-dep.component';
import { AdminsResolver } from './services/admins.resolver';

@NgModule({
  imports: [
    ShearedModulesModule,
    AdminsPageRoutingModule,
    StoreModule.forFeature(
      NameStateEntities.admin,
      GetAdminsReducer.getReducer
    ),
    EffectsModule.forFeature([AdminsEffects]),
  ],
  declarations: [
    AdminsPage,
    AdminsAddAndUpdComponent,
    AdminsInfoComponent,
    AdminsEmpoyerComponent,
    AdminsCmpBloquerComponent,
    AdminsFacDmdDepComponent,
  ],
  providers: [AdminsDataService, AdminsService, AdminsResolver],
})
export class AdminsPageModule {}

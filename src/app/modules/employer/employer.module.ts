import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployerPageRoutingModule } from './employer-routing.module';
import { EmployerPage } from './employer.page';
import { EmployesDataService } from './services.ts/employers.data.service';
import { StoreModule } from '@ngrx/store';
import { EmployersEffects } from './ngrx/employer.effects';
import { EffectsModule } from '@ngrx/effects';
import { ShearedModulesModule } from 'src/app/sheared-modules/sheared-modules.module';
import { EmployerInfoComponent } from './employer-info/employer-info.component';
import { EmployerAddAndUpdComponent } from './employer-add-and-upd/employer-add-and-upd.component';
import { EmployerLingeComponent } from './employer-linge/employer-linge.component';
import { EmployerClientComponent } from './employer-client/employer-client.component';
import { EmployerDemandeDepenseComponent } from './employer-demande-depense/employer-demande-depense.component';
import { EmployerService } from './services.ts/employers.service';
import { NameStateEntities } from 'src/app/appState/app.state';
import { GetEmployersReducer } from './ngrx/employers.reducer';
import { EmployersResolver } from './services.ts/employers.resolver';

@NgModule({
  imports: [
    FormsModule,
    EmployerPageRoutingModule,
    StoreModule.forFeature(
      NameStateEntities.employer,
      GetEmployersReducer.getReducer
    ),
    EffectsModule.forFeature([EmployersEffects]),
    ShearedModulesModule,
  ],
  declarations: [
    EmployerPage,
    EmployerInfoComponent,
    EmployerAddAndUpdComponent,
    EmployerLingeComponent,
    EmployerDemandeDepenseComponent,
    EmployerClientComponent,
  ],
  providers: [EmployesDataService, EmployerService, EmployersResolver],
})
export class EmployerPageModule {}

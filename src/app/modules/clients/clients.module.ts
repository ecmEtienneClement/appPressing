import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsPageRoutingModule } from './clients-routing.module';
import { ClientsPage } from './clients.page';
import { ClientsDataService } from './services/clients-data.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ClientsEffects } from './ngrx/clients.effects';
import { ClientsInfoComponent } from './clients-info/clients-info.component';
import { AddAndUpdClientComponent } from './add-and-upd-client/add-and-upd-client.component';
import { ShearedModulesModule } from 'src/app/sheared-modules/sheared-modules.module';
import { ClientLingesComponent } from './client-linges/client-linges.component';
import { ClientService } from './services/clients.service';
import { ClientsActions } from './ngrx/clients.actions';
import { NameStateEntities } from 'src/app/appState/app.state';
import { ClientsSelectors } from './ngrx/clients.selectors';
import { GetClientsReducer } from './ngrx/clients.reducer';

@NgModule({
  imports: [
    CommonModule,
    ClientsPageRoutingModule,
    StoreModule.forFeature(
      NameStateEntities.client,
      GetClientsReducer.getReducer
    ),
    EffectsModule.forFeature([ClientsEffects]),
    ShearedModulesModule,
  ],
  declarations: [
    ClientsPage,
    ClientsInfoComponent,
    AddAndUpdClientComponent,
    ClientLingesComponent,
  ],
  providers: [
    ClientsActions,
    ClientsSelectors,
    ClientsDataService,
    ClientService,
  ],
})
export class ClientsPageModule {}

import { NgModule } from '@angular/core';
import { InfoKiloPageRoutingModule } from './info-kilo-routing.module';
import { InfoKiloPage } from './info-kilo.page';
import { EffectsModule } from '@ngrx/effects';
import { InfosKiloEffects } from './ngrx/infosKilo.effects';
import { StoreModule } from '@ngrx/store';
import { GetInfosKiloReducer } from './ngrx/InfoKilo.reducer';
import { NameStateEntities } from 'src/app/appState/app.state';
import { InfosKiloDataService } from './services/infosKilo.data.service';
import { InfosKiloService } from './services/infosKilo.service';
import { ShearedModulesModule } from 'src/app/sheared-modules/sheared-modules.module';

@NgModule({
  imports: [
    ShearedModulesModule,
    InfoKiloPageRoutingModule,
    StoreModule.forFeature(
      NameStateEntities.infosKilo,
      GetInfosKiloReducer.getReducer
    ),
    EffectsModule.forFeature([InfosKiloEffects]),
  ],
  declarations: [InfoKiloPage],
  providers: [InfosKiloDataService, InfosKiloService],
})
export class InfoKiloPageModule {}

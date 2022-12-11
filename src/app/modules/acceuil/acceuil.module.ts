import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AcceuilPageRoutingModule } from './acceuil-routing.module';
import { AcceuilPage } from './acceuil.page';
import { AcceuilDataService } from './services/acceuil.data.service';
import { AcceuilService } from './services/acceuil.service';
import { StoreModule } from '@ngrx/store';
import { GetAcceuilReducer } from './ngrx/acceuil.reducer';
import { NameStateEntities } from 'src/app/appState/app.state';
import { EffectsModule } from '@ngrx/effects';
import { AcceuilEffects } from './ngrx/acceuil.effects';
import { ShearedModulesModule } from 'src/app/sheared-modules/sheared-modules.module';

@NgModule({
  imports: [
    ShearedModulesModule,
    AcceuilPageRoutingModule,
    StoreModule.forFeature(
      NameStateEntities.etatFinancier,
      GetAcceuilReducer.getReducer
    ),
    EffectsModule.forFeature([AcceuilEffects]),
  ],
  declarations: [AcceuilPage],
  providers: [AcceuilDataService, AcceuilService],
})
export class AcceuilPageModule {}

import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NameStateEntities } from 'src/app/appState/app.state';
import { ShearedModulesModule } from 'src/app/sheared-modules/sheared-modules.module';
import { FacturesAddAndUpdComponent } from './factures-add-and-upd/factures-add-and-upd.component';
import { FacturesInfoComponent } from './factures-info/factures-info.component';
import { FacturesPageRoutingModule } from './factures-routing.module';
import { FacturesPage } from './factures.page';
import { FacturesEffects } from './ngrx/factures.effects';
import { GetFacturesReducer } from './ngrx/factures.reducer';
import { FacturesDataService } from './services/factures.data.service';
import { FacturesResolver } from './services/factures.resolver';
import { FacturesService } from './services/factures.service';

@NgModule({
  imports: [
    FacturesPageRoutingModule,
    StoreModule.forFeature(
      NameStateEntities.facture,
      GetFacturesReducer.getReducer
    ),
    EffectsModule.forFeature([FacturesEffects]),
    ShearedModulesModule,
  ],
  declarations: [
    FacturesPage,
    FacturesAddAndUpdComponent,
    FacturesInfoComponent,
  ],
  providers: [FacturesDataService, FacturesService, FacturesResolver],
})
export class FacturesPageModule {}

import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NameStateEntities } from 'src/app/appState/app.state';
import { ShearedModulesModule } from 'src/app/sheared-modules/sheared-modules.module';
import { DmdDepenseAddAndUpdComponent } from './dmd-depense-add-and-upd/dmd-depense-add-and-upd.component';
import { DmdDepenseInfoComponent } from './dmd-depense-info/dmd-depense-info.component';
import { DmdDepensePageRoutingModule } from './dmd-depense-routing.module';
import { DmdDepensePage } from './dmd-depense.page';
import { DmdDepensesActions } from './ngrx/factures.actions';
import { DmdDepensesEffects } from './ngrx/factures.effects';
import { GetDmdDepensesReducer } from './ngrx/factures.reducer';
import { DmdDepensesSelectors } from './ngrx/factures.selectors';
import { DmdDepensesDataService } from './services/factures.data.service';
import { DmdDepensesService } from './services/factures.service';

@NgModule({
  imports: [
    DmdDepensePageRoutingModule,
    ShearedModulesModule,
    StoreModule.forFeature(
      NameStateEntities.dmdDepense,
      GetDmdDepensesReducer.getReducer
    ),
    EffectsModule.forFeature([DmdDepensesEffects]),
  ],
  declarations: [
    DmdDepensePage,
    DmdDepenseInfoComponent,
    DmdDepenseAddAndUpdComponent,
  ],
  providers: [
    DmdDepensesDataService,
    DmdDepensesService,
    DmdDepensesActions,
    DmdDepensesSelectors,
  ],
})
export class DmdDepensePageModule {}

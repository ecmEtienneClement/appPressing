import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NameStateEntities } from 'src/app/appState/app.state';
import { ShearedModulesModule } from 'src/app/sheared-modules/sheared-modules.module';
import { DmdDepenseAddAndUpdComponent } from './dmd-depense-add-and-upd/dmd-depense-add-and-upd.component';
import { DmdDepenseInfoComponent } from './dmd-depense-info/dmd-depense-info.component';
import { DmdDepensePageRoutingModule } from './dmd-depense-routing.module';
import { DmdDepensePage } from './dmd-depense.page';
import { DmdDepensesActions } from './ngrx/dmdDepenses.actions';
import { DmdDepensesEffects } from './ngrx/dmdDepenses.effects';
import { GetDmdDepensesReducer } from './ngrx/dmdDepenses.reducer';
import { DmdDepensesSelectors } from './ngrx/dmdDepenses.selectors';
import { DmdDepensesDataService } from './services/dmdDepenses.data.service';
import { DmdDepensesResolver } from './services/dmdDepenses.resolver';
import { DmdDepensesService } from './services/dmdDepenses.service';

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
    DmdDepensesResolver,
  ],
})
export class DmdDepensePageModule {}

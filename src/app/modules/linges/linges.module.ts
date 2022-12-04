import { NgModule } from '@angular/core';
import { LingesPageRoutingModule } from './linges-routing.module';
import { LingesPage } from './linges.page';
import { LingesService } from './services/linges.service';
import { LingesDataService } from './services/linges.data.service';
import { ShearedModulesModule } from 'src/app/sheared-modules/sheared-modules.module';
import { EffectsModule } from '@ngrx/effects';
import { LingesEffects } from './ngrx/linges.effects';
import { StoreModule } from '@ngrx/store';
import { GetLingesReducer } from './ngrx/linges.reducer';
import { NameStateEntities } from 'src/app/appState/app.state';
import { LingesInfosComponent } from './linges-infos/linges-infos.component';
import { LingesAddTypeAndClientComponent } from './linges-add-type-and-client/linges-add-type-and-client.component';
import { LingesAddDetailsTypeComponent } from './linges-add-details-type/linges-add-details-type.component';
import { LingesAddFinalComponent } from './linges-add-final/linges-add-final.component';
import { LingesUpdComponent } from './linges-upd/linges-upd.component';
import { LingesResolver } from './services/linges.resolver';

@NgModule({
  imports: [
    ShearedModulesModule,
    LingesPageRoutingModule,
    StoreModule.forFeature(
      NameStateEntities.linges,
      GetLingesReducer.getReducer
    ),
    EffectsModule.forFeature([LingesEffects]),
  ],
  declarations: [
    LingesPage,
    LingesInfosComponent,
    LingesUpdComponent,
    LingesAddTypeAndClientComponent,
    LingesAddDetailsTypeComponent,
    LingesAddFinalComponent,
  ],
  providers: [LingesService, LingesDataService, LingesResolver],
})
export class LingesPageModule {}

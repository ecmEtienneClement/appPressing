import { NgModule } from '@angular/core';
import { TypesPageRoutingModule } from './types-routing.module';
import { TypesPage } from './types.page';
import { TypesLingesDataService } from './services/typesLinges.data.service';
import { TypesLingesService } from './services/typesLinges.service';
import { EffectsModule } from '@ngrx/effects';
import { TypesLingesEffects } from './ngrx/typesLinges.effects';
import { StoreModule } from '@ngrx/store';
import { GetTypesLingesReducer } from './ngrx/typesLinges.reducer';
import { NameStateEntities } from 'src/app/appState/app.state';
import { ShearedModulesModule } from 'src/app/sheared-modules/sheared-modules.module';

@NgModule({
  imports: [
    ShearedModulesModule,
    TypesPageRoutingModule,
    StoreModule.forFeature(
      NameStateEntities.typeLinge,
      GetTypesLingesReducer.getReducer
    ),
    EffectsModule.forFeature([TypesLingesEffects]),
  ],
  declarations: [TypesPage],
  providers: [TypesLingesDataService, TypesLingesService],
})
export class TypesPageModule {}

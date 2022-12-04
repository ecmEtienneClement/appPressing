import { NgModule } from '@angular/core';
import { CmpBloquesPageRoutingModule } from './cmp-bloques-routing.module';
import { CmpBloquesPage } from './cmp-bloques.page';
import { CmpBloquesDataService } from './services/cmpBloques.data.service';
import { CmpBloquesService } from './services/cmpBloques.service';
import { CmpBloquesActions } from './ngrx/cmpBloques.actions';
import { CmpBloquesSelectors } from './ngrx/cmpBloques.selectors';
import { ShearedModulesModule } from 'src/app/sheared-modules/sheared-modules.module';
import { EffectsModule } from '@ngrx/effects';
import { CmpBloquesEffects } from './ngrx/cmpBloques.effects';
import { StoreModule } from '@ngrx/store';
import { NameStateEntities } from 'src/app/appState/app.state';
import { GetCmpBloquesReducer } from './ngrx/cmpBloques.reducer';
import { CmpBloquesInfoComponent } from './cmp-bloques-info/cmp-bloques-info.component';
import { CmpBloquesAddComponent } from './cmp-bloques-add/cmp-bloques-add.component';
import { CmpBloquesResolver } from './services/cmpBloques.resolver';

@NgModule({
  imports: [
    ShearedModulesModule,
    StoreModule.forFeature(
      NameStateEntities.cmpBloque,
      GetCmpBloquesReducer.getReducer
    ),
    EffectsModule.forFeature([CmpBloquesEffects]),
    CmpBloquesPageRoutingModule,
  ],
  declarations: [
    CmpBloquesPage,
    CmpBloquesInfoComponent,
    CmpBloquesAddComponent,
  ],
  providers: [
    CmpBloquesDataService,
    CmpBloquesService,
    CmpBloquesActions,
    CmpBloquesSelectors,
    CmpBloquesResolver,
  ],
})
export class CmpBloquesPageModule {}

import { NgModule } from '@angular/core';
import { DetailsTypeKiloDataService } from './services/detailsTypeKilo.data.service';
import { StoreModule } from '@ngrx/store';
import { NameStateEntities } from 'src/app/appState/app.state';
import { GetDetailsTypeKiloReducer } from './ngrx/detailsTypeKilo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DetailsTypeKiloEffects } from './ngrx/detailsTypeKilo.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(
      NameStateEntities.detailsTypeKilo,
      GetDetailsTypeKiloReducer.getReducer
    ),
    EffectsModule.forFeature([DetailsTypeKiloEffects])
  ],
  providers: [DetailsTypeKiloDataService],
})
export class DetailsTypeKiloPageModule {}

import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NameStateEntities } from 'src/app/appState/app.state';
import { DetailsTypePieceEffects } from './ngrx/detailsTypePiece.effects';
import { GetDetailsTypePieceReducer } from './ngrx/detailsTypePiece.reducer';
import { DetailsTypePieceDataService } from './services/detailsTypePiece.data.service';

@NgModule({
  imports: [
    StoreModule.forFeature(
      NameStateEntities.detailsTypePiece,
      GetDetailsTypePieceReducer.getReducer
    ),
    EffectsModule.forFeature([DetailsTypePieceEffects]),
  ],
  providers: [DetailsTypePieceDataService],
})
export class DetailsTypePiecePageModule {}

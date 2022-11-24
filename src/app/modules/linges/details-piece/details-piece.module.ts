import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { NameStateEntities } from 'src/app/appState/app.state';
import { EffectsModule } from '@ngrx/effects';
import { DetailsPieceDataService } from './services/detailsPiece.data.service';
import { DetailsPieceEffects } from './ngrx/detailsPiece.effects';
import { GetDetailsPieceReducer } from './ngrx/detailsPiece.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(
      NameStateEntities.detailsTypePiece,
      GetDetailsPieceReducer.getReducer
    ),
    EffectsModule.forFeature([DetailsPieceEffects]),
  ],
  providers: [DetailsPieceDataService],
})
export class DetailsPiecePageModule {}

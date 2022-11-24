import { NgModule } from '@angular/core';
import { InfoPiecesPageRoutingModule } from './info-pieces-routing.module';
import { InfoPiecesPage } from './info-pieces.page';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NameStateEntities } from 'src/app/appState/app.state';
import { InfosPiecesService } from './services/infosPieces.service';
import { InfosPiecesDataService } from './services/infosPieces.data.service';
import { InfosPiecesEffects } from './ngrx/infosPieces.effects';
import { GetInfosPiecesReducer } from './ngrx/InfoPieces.reducer';
import { ShearedModulesModule } from 'src/app/sheared-modules/sheared-modules.module';
import { InfosPiecesInfoComponent } from './infos-pieces-info/infos-pieces-info.component';
import { InfoPiecesAddComponent } from './info-pieces-add/info-pieces-add.component';

@NgModule({
  imports: [
    ShearedModulesModule,
    InfoPiecesPageRoutingModule,
    StoreModule.forFeature(
      NameStateEntities.infosPiece,
      GetInfosPiecesReducer.getReducer
    ),
    EffectsModule.forFeature([InfosPiecesEffects]),
  ],
  declarations: [
    InfoPiecesPage,
    InfosPiecesInfoComponent,
    InfoPiecesAddComponent,
  ],
  providers: [InfosPiecesDataService, InfosPiecesService],
})
export class InfoPiecesPageModule {}

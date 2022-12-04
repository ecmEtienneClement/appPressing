import { NgModule } from '@angular/core';
import { HomePage } from './home.page';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HomePageRoutingModule } from './home-routing.module';
import { LoginDataService } from './services/login.data.service';
import { LoginEffects } from './ngrx/login.effects';
import { GetLoginReducer } from './ngrx/login.reducer';
import { NameStateEntities } from '../appState/app.state';
import { ShearedModulesModule } from '../sheared-modules/sheared-modules.module';
import { Toast } from '@awesome-cordova-plugins/toast/ngx';

@NgModule({
  imports: [
    ShearedModulesModule,
    HomePageRoutingModule,
    StoreModule.forFeature(NameStateEntities.login, GetLoginReducer.getReducer),
    EffectsModule.forFeature([LoginEffects]),
  ],
  declarations: [HomePage],
  providers: [LoginDataService, Toast],
})
export class HomePageModule {}

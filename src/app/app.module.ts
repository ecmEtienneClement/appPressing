import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomRouterStateSerializer } from './routeState/route.state';
import { appReducer } from './appState/app.state';
import { EntitiesDataService } from './modules/servicesModules/modules.data.service';
import { EntitiesActions } from './modules/servicesModules/modules.ngrx.actions';
import { EntitiesEffects } from './modules/servicesModules/modules.ngrx.effects';
import { EntitiesDataState } from './modules/servicesModules/modules.entitiesDataState';
import { EntitiesSelectors } from './modules/servicesModules/modules.ngrx.selectors';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { HtppInterceptor } from './servicesApp/http.inter';
import { ForbidenComponent } from './forbiden/forbiden.component';
import { UserService } from './servicesApp/user.service';

@NgModule({
  declarations: [AppComponent, ForbidenComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomRouterStateSerializer,
    }),
    StoreDevtoolsModule.instrument({}),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HtppInterceptor,
      multi: true,
    },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    EntitiesDataService,
    EntitiesActions,
    EntitiesEffects,
    EntitiesDataState,
    EntitiesSelectors,
    SQLite,
    NativeStorage,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

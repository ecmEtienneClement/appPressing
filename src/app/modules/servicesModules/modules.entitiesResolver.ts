import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/appState/app.state';
import { IG, IStateApp } from 'src/app/models/models.interfaces';
import {
  EntitiesDataState,
  EnumAddOrUpdFormEntitie,
} from './modules.entitiesDataState';
import { EntitiesActions } from './modules.ngrx.actions';
import { EntitiesSelectors } from './modules.ngrx.selectors';

@Injectable()
export class EntitiesResolver<T extends IG, I extends IStateApp<T>>
  implements Resolve<void>
{
  sub: Subscription = new Subscription();
  constructor(
    private store: Store<AppState>,
    private entitiesActions: EntitiesActions<T>,
    private entitiesSelectors: EntitiesSelectors<T, I>,
    private entitiesDataState: EntitiesDataState
  ) {}
  //TODO
  resolve(route: ActivatedRouteSnapshot): void {
    return this.subEntities(route);
  }

  //TODO SUBS AUX DATA ENTITIES CONCERNER
  subEntities(route: ActivatedRouteSnapshot): void {
    this.sub.add(
      this.store.select(this.entitiesSelectors.getEntities()).subscribe({
        next: (entities) => {
          if (entities) {
            if (entities.length === 0) {
              this.store.dispatch(this.entitiesActions.getAllEntities()());
              const idParam = route.params.id;
              if (idParam) {
                this.entitiesDataState.setAddOrUpdFormEntitie(
                  EnumAddOrUpdFormEntitie.updEntitie
                );
              }
              this.sub.unsubscribe();
              return;
            } else {
              this.sub.unsubscribe();
              return;
            }
          }
        },
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { IG } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { EntitiesDataService } from './modules.data.service';
import { EntitiesActions } from './modules.ngrx.actions';
import { EntitiesService, WhereNavEntities } from './modules.service';

@Injectable()
export class EntitiesEffects<T extends IG> {
  readonly routesNames = RoutesNames;
  //TODO ADD ENTITIE EFFECT
  getAddEntitieEffect = createEffect(() =>
    this.action$.pipe(
      ofType(this.entitiesActionsService.addEntitie()),
      mergeMap((action) =>
        this.entitiesDataService.createEntitie(action.entitie).pipe(
          map((dataEntitie: T) => {
            if (dataEntitie) {
              if (action.onNavAfterAdd) {
                this.onNavEntities();
              }
              return this.entitiesActionsService.addEntitieSuccess()({
                entitie: dataEntitie,
              });
            }
          }),
          catchError((error) =>
            of(
              this.entitiesActionsService.errorEntities()({
                error: error.error.message,
              })
            )
          )
        )
      )
    )
  );

  //TODO GET ALL ENTITIES EFFECT
  getAllEntitiesEffect = createEffect(() =>
    this.action$.pipe(
      ofType(this.entitiesActionsService.getAllEntities()),
      mergeMap(() =>
        this.entitiesDataService.getAllEntities().pipe(
          map((dataEntities: T[]) =>
            this.entitiesActionsService.getAllEntitiesSuccess()({
              entities: dataEntities,
            })
          ),
          catchError((error) =>
            of(
              this.entitiesActionsService.errorEntities()({
                error: error.error.message,
              })
            )
          )
        )
      )
    )
  );

  //TODO GET ENTITIE EFFECT
  getEntitieEffect = createEffect(() =>
    this.action$.pipe(
      ofType(this.entitiesActionsService.getEntitie()),
      mergeMap((action) =>
        this.entitiesDataService.getEntitieById(action.idEntitie).pipe(
          map((dataEntitie: T) =>
            this.entitiesActionsService.getEntitieSuccess()({
              entitie: dataEntitie,
            })
          ),
          catchError((error) =>
            of(
              this.entitiesActionsService.errorEntities()({
                error: error.error.message,
              })
            )
          )
        )
      )
    )
  );

  //TODO UPD ENTITIE EFFECT
  updEntitieEffect = createEffect(() =>
    this.action$.pipe(
      ofType(this.entitiesActionsService.updEntitie()),
      mergeMap((action) =>
        this.entitiesDataService.updateEntitieById(action.entitie).pipe(
          map((dataEntitie: T) => {
            this.onNavInfo(action.entitie.id);
            return this.entitiesActionsService.updEntitieSuccess()({
              entitie: action.entitie,
            });
          }),
          catchError((error) =>
            of(
              this.entitiesActionsService.errorEntities()({
                error: error.error.message,
              })
            )
          )
        )
      )
    )
  );

  //TODO DELETE ENTITIE EFFECT
  deleteEntitieEffect = createEffect(() =>
    this.action$.pipe(
      ofType(this.entitiesActionsService.deleteEntitie()),
      mergeMap((action) =>
        this.entitiesDataService.deleteEntitiesById(action.idEntitie).pipe(
          map((dataBoolean: boolean) =>
            this.entitiesActionsService.deleteEntitieSuccess()({
              idEntitie: action.idEntitie,
              deleted: dataBoolean,
            })
          ),
          catchError((error) =>
            of(
              this.entitiesActionsService.errorEntities()({
                error: error.error.message,
              })
            )
          )
        )
      )
    )
  );

  //TODO DELETE ALL ENTITIES EFFECT
  deleteAllEntitiesEffect = createEffect(() =>
    this.action$.pipe(
      ofType(this.entitiesActionsService.deleteAllEntities()),
      mergeMap(() =>
        this.entitiesDataService.deleteAllEntities().pipe(
          map((dataBoolean: boolean) =>
            this.entitiesActionsService.deleteAllEntitiesSuccess()({
              deleted: dataBoolean,
            })
          ),
          catchError((error) =>
            of(
              this.entitiesActionsService.errorEntities()({
                error: error.error.message,
              })
            )
          )
        )
      )
    )
  );

  constructor(
    private store: Store,
    private action$: Actions,
    private entitiesActionsService: EntitiesActions<T>,
    private entitiesDataService: EntitiesDataService<T>,
    private entitiesService?: EntitiesService
  ) {}

  //TODO NAV INFO
  onNavInfo(idEntitie: string) {
    //Verifie si this.entitiesService.getRouteParam() est != de undefined
    if (this.entitiesService.getRouteParam()) {
      this.entitiesService.onNav(
        WhereNavEntities.ressourcesEntitie,
        this.entitiesService.getRouteParam(),
        idEntitie
      );
    } //Ce cas c'est pour les entites qui n'ont pas de ressourcesEntitie comme info-kilo, type-linge
    else {
      this.entitiesService.onNav(WhereNavEntities.homeEntitie);
    }
  }
  //TODO NAV HOME ENTITIES
  onNavEntities() {
    this.store.dispatch(this.entitiesActionsService.getAllEntities()());
    this.entitiesService.onNav(WhereNavEntities.homeEntitie);
  }
}

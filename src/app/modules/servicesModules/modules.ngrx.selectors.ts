import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NameStateEntities } from 'src/app/appState/app.state';
import { IG, IStateApp } from 'src/app/models/models.interfaces';
import { getCustomStateRouter } from 'src/app/routeState/route.selectors';
import { IRouterState } from 'src/app/routeState/route.state';

/*
La class Generique T est le model des entites qui est aussi passer a IStateApp<T> de maniere
generique.
La class I est le model state des entites et etend de la class IStateApp
voir dans les class comme (clients.state.ts) exp==> IClientsState

T extends IG permet a la class generique T d'avoir la propriete Id
*/
@Injectable()
export class EntitiesSelectors<T extends IG, I extends IStateApp<T>> {
  constructor(private nameStateEntities: NameStateEntities) {}

  //TODO
  //******* SELECTEUR POUR LES ENTITIES */
  public getEntities() {
    return createSelector(
      this.getStateEntities(),
      (state: I) => state.entities
    );
  }

  //TODO
  //******* SELECTEUR POUR LE ENTITIE */
  public getEntitie() {
    return createSelector(this.getStateEntities(), (state: I) => state.entitie);
  }

  //TODO
  //******* SELECTEUR POUR LA NOTIFICATION */
  public getNotification() {
    return createSelector(
      this.getStateEntities(),
      (state: I) => state.notification
    );
  }

  //TODO
  //******* SELECTEUR POUR LE DATA STATE */
  public getDataState() {
    return createSelector(
      this.getStateEntities(),
      (state: I) => state.dataState
    );
  }

  //TODO
  //******* SELECTEUR L' ENTITIE BY ID */
  public getEntitieById() {
    return createSelector(
      this.getStateEntities(),
      getCustomStateRouter,
      (stateEntities: I, stateRoute: IRouterState) => {
        if (stateEntities.entities && stateRoute.params.id) {
          const entities = stateEntities.entities;
          return entities
            ? // eslint-disable-next-line eqeqeq
              entities.find((entitie) => entitie.id == stateRoute.params.id)
            : null;
        }
      }
    );
  }
  //TODO
  //******* SELECTEUR POUR LE MESSAGE D'ERREUR */
  public getMessageError() {
    return createSelector(
      this.getStateEntities(),
      (state: I) => state.messageError
    );
  }

  //TODO
  //******* SELECTEUR POUR LE STORE */
  private getStateEntities() {
    return createFeatureSelector<I>(this.nameStateEntities);
  }
}

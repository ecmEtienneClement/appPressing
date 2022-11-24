/* eslint-disable no-underscore-dangle */
import { createReducer, on } from '@ngrx/store';
import { AppStateEnum, initStateApp } from 'src/app/appState/app.state';
import { IStateApp, IG } from 'src/app/models/models.interfaces';
import { EntitiesActions } from './modules.ngrx.actions';

export class EntitiesReducer<T extends IG, I extends IStateApp<T>> {
  private nameNotifactionEntitie = 'null';
  constructor(
    private entitiesActionsService: EntitiesActions<T>,
    nameNotifactionEntitie: string
  ) {
    this.nameNotifactionEntitie = nameNotifactionEntitie;
  }

  //TODO
  public getNameEntitie(): string {
    return this.nameNotifactionEntitie;
  }
  //TODO
  public setNameNotifactionEntitie(nameParam: string): void {
    this.nameNotifactionEntitie = nameParam;
  }

  //TODO
  public entitiesFeactureReducer() {
    return createReducer(
      initStateApp,
      //TODO ADD CLIENT
      on(this.entitiesActionsService.addEntitie(), (state: I) => ({
        ...state,
        dataState: AppStateEnum.loading,
      })),
      on(
        this.entitiesActionsService.addEntitieSuccess(),
        (state: I, action) => {
          const newTbEntities: T[] | null = [...state.entities];
          newTbEntities.push(action.entitie);
          return {
            ...state,
            entities: newTbEntities ? newTbEntities : state.entities,
            dataState: AppStateEnum.loaded,
            messageError: null,
            notification: `${this.getNameEntitie()} ajouté`,
          };
        }
      ),

      //TODO GET CLIENTS
      on(this.entitiesActionsService.getAllEntities(), (state: I) => ({
        ...state,
        dataState: AppStateEnum.loading,
      })),
      on(
        this.entitiesActionsService.getAllEntitiesSuccess(),
        (state: I, action) => ({
          ...state,
          entities: action.entities,
          notification: `Données ${this.getNameEntitie()}s rechargées !`,
          messageError: null,
          dataState: AppStateEnum.loaded,
        })
      ),

      //TODO GET CLIENT
      on(this.entitiesActionsService.getEntitie(), (state: I) => ({
        ...state,
        dataState: AppStateEnum.loading,
      })),
      on(
        this.entitiesActionsService.getEntitieSuccess(),
        (state: I, action) => ({
          ...state,
          entitie: action.entitie,
          notification: `${this.getNameEntitie()} rechargé !`,
          messageError: null,
          dataState: AppStateEnum.loaded,
        })
      ),

      //TODO UPD CLIENT
      on(this.entitiesActionsService.updEntitie(), (state: I) => ({
        ...state,
        dataState: AppStateEnum.loading,
      })),
      on(
        this.entitiesActionsService.updEntitieSuccess(),
        (state: I, action) => {
          const newTbTs: T[] | null = state.entities?.map((client) =>
            client.id === action.entitie.id ? action.entitie : client
          );
          return {
            ...state,
            entities: newTbTs ? newTbTs : state.entities,
            notification: `${this.getNameEntitie()} modifié !`,
            messageError: null,
            dataState: AppStateEnum.loaded,
          };
        }
      ),

      //TODO DELETE CLIENT
      on(this.entitiesActionsService.deleteEntitie(), (state: I) => ({
        ...state,
        dataState: AppStateEnum.loading,
      })),
      on(
        this.entitiesActionsService.deleteEntitieSuccess(),
        (state: I, action) => {
          const newTbTs: T[] | null = state.entities?.filter(
            (client) => client.id !== action.idEntitie
          );
          return {
            ...state,
            entities: newTbTs ? newTbTs : state.entities,
            notification: `${this.getNameEntitie()} supprimé !`,
            messageError: null,
            dataState: AppStateEnum.loaded,
          };
        }
      ),

      //TODO DELETE ALL CLIENTS
      on(this.entitiesActionsService.deleteAllEntities(), (state: I) => ({
        ...state,
        dataState: AppStateEnum.loading,
      })),
      on(
        this.entitiesActionsService.deleteAllEntitiesSuccess(),
        (state: I, action) => ({
          ...state,
          entities: action.deleted ? null : state.entities,
          notification: action.deleted
            ? `${this.getNameEntitie()}s supprimés !`
            : `Désoler pas de ${this.getNameEntitie()} a supprimé !`,
          messageError: null,
          dataState: AppStateEnum.loaded,
        })
      ),

      //TODO ERROR CLIENTS
      on(this.entitiesActionsService.errorEntities(), (state: I, action) => ({
        ...state,
        notification: null,
        messageError: action.error,
        dataState: AppStateEnum.error,
      }))
    );
  }
}

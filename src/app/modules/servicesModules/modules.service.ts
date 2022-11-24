import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesNames } from 'src/app/routes.config';
import {
  EntitiesDataState,
  EnumAddOrUpdFormEntitie,
} from './modules.entitiesDataState';

@Injectable()
export class EntitiesService {
  private routeParam: RoutesNames;
  /*
  Permet le partage de donnee entre les composants afin de modifier le comportement du
  formulaire pour le cas de add et upd car l'ajout et modification d'une entitie sont effectués
  dans le meme composant
  */

  //routeBaseEntitie ==>permet de definir la route de base pour chaque module
  constructor(
    private router: Router,
    private routeBaseEntitie: RoutesNames,
    private entitieDataState: EntitiesDataState
  ) {}

  //TODO ==> NAV DYNAMIQUE IN MODULES
  public onNav(
    whereNav: WhereNavEntities,
    routeParam?: RoutesNames,
    idEntitie?: string
  ) {
    switch (whereNav) {
      case WhereNavEntities.homeEntitie:
        this.router.navigate([`${this.routeBaseEntitie}`]);
        break;
      case WhereNavEntities.ressourcesEntitie:
        this.router.navigate([
          `${this.routeBaseEntitie}/${routeParam}/${idEntitie}`,
        ]);
        break;
      case WhereNavEntities.addEntitie:
        this.entitieDataState.setAddOrUpdFormEntitie(
          EnumAddOrUpdFormEntitie.addEntitie
        );
        this.router.navigate([`${this.routeBaseEntitie}/${routeParam}`]);
        break;
      case WhereNavEntities.updEntitie:
        this.entitieDataState.setAddOrUpdFormEntitie(
          EnumAddOrUpdFormEntitie.updEntitie
        );
        this.router.navigate([
          `${this.routeBaseEntitie}/${routeParam}/${idEntitie}`,
        ]);
        break;
      default:
      case WhereNavEntities.homeEntitie:
        this.router.navigate([`${this.routeBaseEntitie}`]);
        break;
    }
  }
  /**
   * Ce get et set permet a la classe EntitiesEffects<T> de pourvoir naviguer dynamiquement
   * apres l'ajout ou modification d'une entities
   */
  //TODO
  getRouteParam(): RoutesNames {
    return this.routeParam;
  }
  //TODO
  setRouteParam(routeParam: RoutesNames): void {
    this.routeParam = routeParam;
  }
}

//
export enum WhereNavEntities {
  homeEntitie,
  ressourcesEntitie,
  addEntitie,
  updEntitie,
}

import { Injectable } from '@angular/core';
import { createAction, props } from '@ngrx/store';
import { EntitiesNameAPI } from 'src/app/api.config';

@Injectable()
export class EntitiesActions<T> {
  constructor(private entitiesNameAPI: EntitiesNameAPI) {}

  //TODO ADD ENTITIE
  public addEntitie() {
    return createAction(
      this.entitiesNameAPI + ' addEntitie',
      props<{ entitie: T; onNavAfterAdd: boolean }>()
    );
  }
  public addEntitieSuccess() {
    return createAction(
      this.entitiesNameAPI + ' addEntitieSuccess',
      props<{ entitie: T }>()
    );
  }

  //TODO GET ENTITIES
  public getAllEntities() {
    return createAction(this.entitiesNameAPI + ' getAllEntities');
  }
  public getAllEntitiesSuccess() {
    return createAction(
      this.entitiesNameAPI + ' getAllEntitiesSuccess',
      props<{ entities: T[] }>()
    );
  }

  //TODO GET ENTITIE
  public getEntitie() {
    return createAction(
      this.entitiesNameAPI + ' getEntitie',
      props<{ idEntitie: string }>()
    );
  }
  public getEntitieSuccess() {
    return createAction(
      this.entitiesNameAPI + ' getEntitieSuccess',
      props<{ entitie: T }>()
    );
  }

  //TODO UPD ENTITIE
  public updEntitie() {
    return createAction(
      this.entitiesNameAPI + ' updEntitie',
      props<{ entitie: T; onNavAfterUpd?: boolean }>()
    );
  }
  public updEntitieSuccess() {
    return createAction(
      this.entitiesNameAPI + ' updEntitieSuccess',
      props<{ entitie: T }>()
    );
  }

  //TODO DELETE ENTITIE
  public deleteEntitie() {
    return createAction(
      this.entitiesNameAPI + ' deleteEntitie',
      props<{ idEntitie: string }>()
    );
  }
  public deleteEntitieSuccess() {
    return createAction(
      this.entitiesNameAPI + ' deleteEntitieSuccess',
      props<{ idEntitie: string; deleted: boolean }>()
    );
  }

  //TODO DELETE ALL ENTITIES
  public deleteAllEntities() {
    return createAction(this.entitiesNameAPI + ' deleteAllEntities');
  }
  public deleteAllEntitiesSuccess() {
    return createAction(
      this.entitiesNameAPI + ' deleteAllEntitiesSuccess',
      props<{ deleted: boolean }>()
    );
  }

  //TODO ERROR ENTITIES
  public errorEntities() {
    return createAction(
      this.entitiesNameAPI + ' errorEntities',
      props<{ error: string }>()
    );
  }
}

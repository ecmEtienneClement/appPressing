/* eslint-disable no-underscore-dangle */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { NameUrlEntitiesAPI } from 'src/app/api.config';
import { IG } from 'src/app/models/models.interfaces';
import { environment } from 'src/environments/environment';

@Injectable()
export class EntitiesDataService<T extends IG> {
  constructor(
    private httpClient: HttpClient,
    private nameUrlEntities: NameUrlEntitiesAPI
  ) {}

  //TODO
  public createEntitie(entitie: T): Observable<T> {
    return this.httpClient
      .post<T>(environment.host + this.nameUrlEntities, entitie)
      .pipe(retry(2));
  }
  //
  //TODO
  public getAllEntities(): Observable<T[]> {
    return this.httpClient
      .get<T[]>(environment.host + this.nameUrlEntities)
      .pipe(retry(2));
  }
  //
  //TODO
  public getEntitieById(idEntitie: string): Observable<T> {
    return this.httpClient
      .get<T>(environment.host + this.nameUrlEntities + idEntitie)
      .pipe(retry(2));
  }
  //
  //TODO
  public updateEntitieById(entitie: T): Observable<T> {
    return this.httpClient
      .put<T>(environment.host + this.nameUrlEntities + entitie.id, {
        ...entitie,
      })
      .pipe(retry(2));
  }
  //
  //TODO
  public deleteEntitiesById(idEntitie: string): Observable<boolean> {
    return this.httpClient
      .delete<boolean>(environment.host + this.nameUrlEntities + idEntitie)
      .pipe(retry(2));
  }
  //
  //TODO
  public deleteAllEntities(): Observable<boolean> {
    return this.httpClient
      .delete<boolean>(environment.host + this.nameUrlEntities + 'all')
      .pipe(retry(2));
  }
}

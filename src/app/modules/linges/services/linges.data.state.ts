import { Injectable } from '@angular/core';
import { Linge } from 'src/app/models/models.interfaces';

@Injectable({ providedIn: 'root' })
export class LingeDataState {
  private idClientLinge = '';
  private newLinge: Linge;

  //TODO
  //GET FOR ID CLIENT
  public getIdClientLinge() {
    return this.idClientLinge;
  }
  //SET FOR ID CLIENT
  public setIdClientLinge(idClientLinge: string) {
    this.idClientLinge = idClientLinge;
  }

  //TODO
  //GET FOR LINGE
  public getNewLinge() {
    return this.newLinge;
  }
  //SET FOR LINGE
  public setNewLinge(newLinge: Linge) {
    this.newLinge = newLinge;
  }
}

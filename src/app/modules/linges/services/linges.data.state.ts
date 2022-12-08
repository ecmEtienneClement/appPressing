import { Injectable } from '@angular/core';
import { Linge } from 'src/app/models/models.interfaces';

@Injectable({ providedIn: 'root' })
export class LingeDataState {
  private idClientLinge = '';
  private newLinge: Linge;
  private typeLinge: string;
  private montantLinge: number;

  //TODO
  //GET FOR TYPE_LINGE
  public getTypeLinge() {
    return this.typeLinge;
  }
  //SET FOR TYPE_LINGE
  public setTypeLinge(typeLinge: string) {
    this.typeLinge = typeLinge;
  }
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

  //TODO
  //GET  FOR MONTANT LINGE
  public getMontantLinge() {
    return this.montantLinge;
  }
  //SET FOR MONTANT LINGE
  public setMontantLinge(montantLinge: number) {
    this.montantLinge = montantLinge;
  }
}

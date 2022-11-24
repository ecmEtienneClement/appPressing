import { Injectable } from '@angular/core';

@Injectable()
export class EntitiesDataState {
  private addOrUpdFormEntitie: EnumAddOrUpdFormEntitie;
  constructor() {
    this.setAddOrUpdFormEntitie(EnumAddOrUpdFormEntitie.addEntitie);
  }

  //TODO
  public getAddOrUpdFormEntitie(): EnumAddOrUpdFormEntitie {
    return this.addOrUpdFormEntitie;
  }
  //TODO
  public setAddOrUpdFormEntitie(dataSet: EnumAddOrUpdFormEntitie) {
      this.addOrUpdFormEntitie = dataSet;
  }
}

//TODO POUR ROUTER NAV
export enum EnumAddOrUpdFormEntitie {
  addEntitie,
  updEntitie,
}

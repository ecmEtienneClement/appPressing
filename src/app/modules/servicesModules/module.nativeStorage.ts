import { Injectable } from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Injectable({ providedIn: 'root' })

//TODO ALERTE LE NATIVE_STORAGE N'EST PAS UTILISER
export class EntititeNativeStorage {
  constructor(private nativeStorage: NativeStorage) {}

  //TODO SET
  public async setItem(
    nameItem: NameItemNativeStorage,
    data: any
  ): Promise<boolean> {
    try {
      await this.nativeStorage.setItem('teste', 'ok');
      await this.nativeStorage.setItem(nameItem, data);
      const data1 = await this.nativeStorage.getItem('teste');

      return true;
    } catch (error) {
      return false;
    }
  }

  //TODO GET
  public async getItem(nameItem: NameItemNativeStorage): Promise<any> {
    try {
      const res = await this.nativeStorage.getItem(nameItem);
      return res;
    } catch (error) {
      console.log('une erreur ===' + error);

      return false;
    }
  }
  //TODO REMOVE
  public async removeItem(nameItem: NameItemNativeStorage): Promise<any> {
    try {
      await this.nativeStorage.remove(nameItem);
      return true;
    } catch (error) {
      return false;
    }
  }
  //TODO CLEAR
  public async clear(): Promise<any> {
    try {
      await this.nativeStorage.clear();
      return true;
    } catch (error) {
      return false;
    }
  }
}
//TODO
export enum NameItemNativeStorage {
  idClient = 'idClient',
  idEmployer = 'idEmployer',
  typeLinge = 'typeLinge',
}

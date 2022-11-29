import { Injectable } from '@angular/core';
import {
  Geolocation,
  Geoposition,
} from '@awesome-cordova-plugins/geolocation/ngx';

@Injectable({ providedIn: 'root' })
export class EntitieGeo {
  constructor(private geolocation: Geolocation) {}

  //TODO
  public async getPosition(): Promise<Geoposition | false> {
    try {
      const pos = await this.geolocation.getCurrentPosition();
      return pos;
    } catch (error) {
      return false;
    }
  }
}

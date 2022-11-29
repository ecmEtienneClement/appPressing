import { Subject } from 'rxjs';

/**
 * Cette classe nous permet de suivre les differentes actions emisent entre l'effect pour le reducer,
 * au niveau de nos components (Nous y abonné)
 */
export class EntitiesEmit {
  public static entitieSub: Subject<DataEmit> = new Subject();
  //

  //TODO SUB
  public static onEmitSub(dataEmit: DataEmit, nameNotification: string) {
    if (
      nameNotification === 'client' ||
      nameNotification === 'linge' ||
      nameNotification === 'details type kilo' ||
      nameNotification === 'details type piece'
    ) {
      this.emitClientSub(dataEmit);
    }
  }

  //
  //TODO SUB POUR ENTITIE CLIENT
  private static emitClientSub(dataEmit: DataEmit) {
    this.entitieSub.next(dataEmit);
  }
}
export class DataEmit {
  entitie: any;
  nameNotification: string;
}

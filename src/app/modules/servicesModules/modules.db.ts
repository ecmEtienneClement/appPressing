import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { environment } from 'src/environments/environment';
import { EntitiesSql } from './modules.sql';

@Injectable({ providedIn: 'root' })
//TODO ALERTE LA BD LOCAL N'EST PAS UTILISER ..heuuu pour des raisons coherence car si je creer
//une base de donnee local pour le user et que ce dernier na pas de connexion il peut travailer 
//avec des données obsolete en cas de modifications par les admins exp: le prix de linge du chemise
//modifier....  
export class EntitiesDb {
  constructor(private sqlite: SQLite) {
    //  this.createTables();
  }

  //TODO
  public async createDb(): Promise<SQLiteObject> {
    try {
      const db: SQLiteObject = await this.sqlite.create({
        name: environment.dbName,
        location: 'default',
      });
      console.log('create db ');
      return db;
    } catch (error) {
      console.log('error db ' + error);
    }
  }
  //TODO
  public async createTables() {
    try {
      const db: SQLiteObject = await this.createDb();
      await db.executeSql(EntitiesSql.sqlTableCurrentUser);
      await db.executeSql(EntitiesSql.sqlTableConfigGeo);
      await db.executeSql(EntitiesSql.sqlTableConfigKilo);
      await db.executeSql(EntitiesSql.sqlTableConfigPieces);
      console.log('create tables ');

      return true;
    } catch (error) {
      console.log('error db ' + error);
      return false;
    }
  }
}

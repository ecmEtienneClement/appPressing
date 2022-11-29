import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EntitiesSql {
  static sqlTableCurrentUser =
    'CREATE TABLE IF NOT EXISTS CurrentUser(idUser VARCHAR(255) NOT NULL UNIQUE,nom VARCHAR(255) NOT NULL,' +
    'prenom VARCHAR(255) NOT NULL,email VARCHAR(255) NOT NULL UNIQUE,role VARCHAR(255) NOT NULL,token VARCHAR(255) NOT NULL)';

  static sqlTableConfigGeo =
    'CREATE TABLE IF NOT EXISTS ConfigGeo(longitude INTEGER NOT NULL ,latitude INTEGER NOT NULL)';

  static sqlTableConfigKilo =
    'CREATE TABLE IF NOT EXISTS ConfigKilo(prixLinge INTEGER NOT NULL ,prixRepassage INTEGER NOT NULL)';

  static sqlTableConfigPieces =
    'CREATE TABLE IF NOT EXISTS ConfigPieces(nomPiece VARCHAR(255) NOT NULL UNIQUE ,' +
    'prixLinge INTEGER NOT NULL ,prixRepassage INTEGER NOT NULL)';
}

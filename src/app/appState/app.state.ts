import { routerReducer, RouterState } from '@ngrx/router-store';
import { IAdminState } from '../modules/admins/ngrx/admins.state';
import { IClientsState } from '../modules/clients/ngrx/clients.state';
import { ICmpBloquesState } from '../modules/cmp-bloques/ngrx/cmpBloques.state';
import { IDmdDepenseState } from '../modules/dmd-depense/ngrx/factures.state';
import { IEmployersState } from '../modules/employer/ngrx/employers.state';
import { IFactureState } from '../modules/factures/ngrx/factures.state';
import { IDetailsTypeKiloState } from '../modules/linges/details-type-kilo/ngrx/detailsTypeKilo.state';
import { IDetailsTypePieceState } from '../modules/linges/details-type-piece/ngrx/detailsTypePiece.state';
import { ILingesState } from '../modules/linges/ngrx/linges.state';
import { IInfosKiloState } from '../modules/modulesParametres/info-kilo/ngrx/infosKilo.state';
import { IInfosPiecesState } from '../modules/modulesParametres/info-pieces/ngrx/infosPieces.state';
import { ITypesLingesState } from '../modules/modulesParametres/typesLinges/ngrx/typesLinges.state';

//TODO MON STATE GLOBAL EN 12 MODULES STATES NGRX CAR ROUTER_STATE EST UN MODULE DE NGRX DIRECT
export interface AppState {
  adminState: IAdminState;
  employerState: IEmployersState;
  clientState: IClientsState;
  linge: ILingesState;
  factureState: IFactureState;
  dmdDepenseState: IDmdDepenseState;
  cmpBloqueState: ICmpBloquesState;
  typeLinge: ITypesLingesState;
  infoKilo: IInfosKiloState;
  infoPiece: IInfosPiecesState;
  detailsTypePiece: IDetailsTypePieceState;
  detailsTypeKilo: IDetailsTypeKiloState;
  routerState: RouterState;
}
//TODO STATE APP ENUM
export enum AppStateEnum {
  initiale = '[ETAT/APP] initiale',
  loading = '[ETAT/APP] en chargement',
  loaded = ' [ETAT/APP] charger',
  error = '[ETAT/APP] erreur',
}

//TODO INIT STATE APP
export const initStateApp = {
  entities: [],
  entitie: null,
  notification: null,
  messageError: null,
  dataState: AppStateEnum.initiale,
};
//TODO STATE NAME  ENUM
export enum NameStateEntities {
  admin = 'adminsState',
  client = 'clientsState',
  linges = 'lingesState',
  employer = 'employersState',
  facture = 'facturesState',
  dmdDepense = 'dmdDepensesState',
  cmpBloque = 'cmpBloquesState',
  typeLinge = 'typeLingesState',
  infosKilo = 'infosKiloState',
  infosPiece = 'infosPiecesState',
  detailsTypePiece = 'detailsTypePieceState',
  detailsTypeKilo = 'detailsTypeKiloState',
}

export const appReducer = {
  router: routerReducer,
};

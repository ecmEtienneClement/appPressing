/* eslint-disable @typescript-eslint/naming-convention */
import { AppStateEnum } from '../appState/app.state';
import { IClientsState } from '../modules/clients/ngrx/clients.state';
import { IEmployersState } from '../modules/employer/ngrx/employers.state';

//TODO Model  GENERIQUE
export interface IG {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
}
//TODO Model  CLIENT
export interface Client extends IG {
  nom: string;
  prenom: string;
  numero: string;
  adresse: string;
  nbrLinge: number;
  codeFidelite: number;
  Linges?: Linge[];
  Employe?: Employe;
}
//
//TODO Model EMPLOYER
export interface Employe extends IG {
  nom: string;
  prenom: string;
  numero: string;
  adresse: string;
  salaire: number;
  email: string;
  mdp: string;
  role?: RoleEnum;
  Linges?: Linge[];
  Clients?: Client[];
  Demande_depenses?: DemandeDepense[];
}
//
//TODO Model ADMIN
export interface Admin extends IG {
  nom: string;
  prenom: string;
  numero?: string;
  email: string;
  mdp: string;
  role?: RoleEnum;
  Demande_depenses?: DemandeDepense[];
  Factures?: Facture[];
  Compte_bloquers?: Compte_bloquer[];
}
//

enum RoleEnum {
  admin,
  user,
}
//
//TODO Model FACTURE
export interface Facture extends IG {
  montant: number;
  type: EnumTypeFacture;
  AdminId: string;
  Admin?: Admin;
}
export enum EnumTypeFacture {
  eau = 'Eaux',
  electricite = 'Electricité',
  location = 'Location',
  salaire = 'Salaires',
}
//
//TODO Model DEPENSE
export interface Depense extends IG {
  montant: number;
  description: string;
  date: string;
}
//TODO Model DEPENSE
export interface DemandeDepense extends IG {
  montant: number;
  description: string;
  valider: boolean;
  rejeter: boolean;
  EmployeId: string;
  Admin?: Admin;
  AdminId?: Admin;
  Employe?: Employe;
  Depense?: Depense;
}
//
//TODO Model ETAT_FINANCIER
export interface EtatFinancier extends IG {
  montantCaisse: number;
  montantDepense: number;
  dateUpdateCaisse: string;
  dateUpdateDepense: string;
}
//
//TODO Model LINGE
export interface Linge extends IG {
  TypeLingeId: string;
  ClientId: string;
  EmployeId: string;
  DetailTypeKiloId: string | null;
  DetailTypePieceId: string | null;
  prixLinge: number;
  payer: boolean;
  montantAvance: number;
  livre: boolean;
  dateDepot: string;
  coordX: string;
  coordY: string;
  dataRetrait: string;
  Type_linge?: TypeLinge;
  Client?: Client;
  Employe?: Employe;
  Detail_type_kilo?: InfoKilo;
  Detail_type_piece?: InfoPiece;
}
//
//TODO Model TYPELINGE
export interface TypeLinge extends IG {
  nom: EnumTypeLinge;
}
export enum EnumTypeLinge {
  piece = 'Piece',
  kilo = 'Kilo',
}
//
//TODO Model DETAILSTYPEKILO
export interface DetailTypeKilo extends IG {
  nbrKilo: number;
  prixKilo: number;
  aRepasser: boolean;
  prixRepassage: number;
}
//
//TODO Model DETAILSTYPEPIECE
export interface DetailTypePiece extends IG {
  Detail_pieces: [DetailPiece];
}
//
//TODO Model DETAILSPIECE
export interface DetailPiece extends IG {
  nbrPiece: number;
  prixLinge: number;
  prixRepassage: number;
  aRepasser: boolean;
  DetailTypePieceId: string;
}
//
//TODO Model INFOPIECE
export interface InfoPiece extends IG {
  nom: string;
  prixLinge: number;
  prixRepassage: number;
}
//
//TODO Model CMP BLOQUER
export interface Compte_bloquer extends IG {
  email: string;
  byAdmin: boolean;
  AdminId?: string;
  EmployeId: string;
  Admin?: Admin;
  Employe?: Employe;
}
//
//TODO Model INFOKILO
export interface InfoKilo extends IG {
  prixLinge: number;
  prixRepassage: number;
}
//
//TODO Model NOTIFICATION
export interface NotificationApp {
  titre: string;
  date: string;
  message: string;
}

//
//TODO Model ERRORREQUEST
export interface ErrorRequestAPI {
  error?: Error;
  message: string;
}

//TODO Model STATE
export interface IStateApp<T> {
  entities: T[] | null;
  entitie: T | null;
  notification: string | null;
  messageError: string | null;
  dataState: AppStateEnum;
}

//TODO TYPES STATE
export type IStateAppTypes = IClientsState | IEmployersState;

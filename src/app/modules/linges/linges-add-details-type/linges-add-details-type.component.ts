/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import {
  DetailTypeKilo,
  DetailTypePiece,
  EnumTypeLinge,
  InfoKilo,
  InfoPiece,
  Linge,
  TypeLinge,
} from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { UserService } from 'src/app/servicesApp/user.service';
import { InfosKiloActions } from '../../modulesParametres/info-kilo/ngrx/infosKilo.actions';
import { InfosKiloSelectors } from '../../modulesParametres/info-kilo/ngrx/infosKilo.selectors';
import { InfosPiecesActions } from '../../modulesParametres/info-pieces/ngrx/infosPieces.actions';
import { InfosPiecesSelectors } from '../../modulesParametres/info-pieces/ngrx/infosPieces.selectors';
import { TypesLingesActions } from '../../modulesParametres/typesLinges/ngrx/typesLinges.actions';
import { TypesLingesSelectors } from '../../modulesParametres/typesLinges/ngrx/typesLinges.selectors';
import {
  EntititeNativeStorage,
  NameItemNativeStorage,
} from '../../servicesModules/module.nativeStorage';
import { EntitiesEmit } from '../../servicesModules/modules.emit';
import { WhereNavEntities } from '../../servicesModules/modules.service';
import { DetailsTypeKiloActions } from '../details-type-kilo/ngrx/detailsTypeKilo.actions';
import { DetailsTypeKiloSelectors } from '../details-type-kilo/ngrx/detailsTypeKilo.selectors';
import { DetailsTypePieceActions } from '../details-type-piece/ngrx/detailsTypePiece.actions';
import { DetailsTypePieceSelectors } from '../details-type-piece/ngrx/detailsTypePiece.selectors';
import { LingesActions } from '../ngrx/linges.actions';
import { LingeDataState } from '../services/linges.data.state';
import { LingesService } from '../services/linges.service';

@Component({
  selector: 'app-linges-add-details-type',
  templateUrl: './linges-add-details-type.component.html',
  styleUrls: ['./linges-add-details-type.component.scss'],
})
export class LingesAddDetailsTypeComponent implements OnInit, OnDestroy {
  @ViewChild(IonContent) content: IonContent;

  sub: Subscription = new Subscription();
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  typeKilo = false;
  typePiece = false;
  selectClient = false;
  aRepasser = false;
  nextSelectedPiece = false;
  //
  typeLinges: TypeLinge[];
  idTypeLinges: string;
  infoPiecesInit: InfoPiece[];
  infoPieces: InfoPiece[];
  infoPiecesSelected: DetailTypePiece[] = [];
  detailsTypeKilo: DetailTypeKilo;
  nbrKilo = 0;
  montantLinge = 0;
  infosKilo: InfoKilo;
  tbPieceCrated: DetailTypePiece[] = [];
  readonly routesNames = RoutesNames;
  readonly itemName = NameItemNativeStorage;
  readonly whereNav = WhereNavEntities;
  constructor(
    private entititeNativeStorage: EntititeNativeStorage,
    private typesLingesActions: TypesLingesActions,
    private typesLingesSelectors: TypesLingesSelectors,
    private infosKiloActions: InfosKiloActions,
    private infosKiloSelectors: InfosKiloSelectors,
    private lingesActions: LingesActions,
    private detailsTypesKiloActions: DetailsTypeKiloActions,
    private detailsTypesKiloSelectors: DetailsTypeKiloSelectors,
    private detailsTypesPieceSelectors: DetailsTypePieceSelectors,
    private detailsTypesPieceActions: DetailsTypePieceActions,
    private store: Store<AppState>,
    private lingesDataState: LingeDataState,
    private infoPiecesActions: InfosPiecesActions,
    private infoPiecesSelectors: InfosPiecesSelectors,
    private lingesService: LingesService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.store.dispatch(this.typesLingesActions.getAllEntities()());
    this.store.dispatch(this.infoPiecesActions.getAllEntities()());
    this.store.dispatch(this.infosKiloActions.getAllEntities()());

    this.dataState$ = this.store.select(
      this.detailsTypesKiloSelectors.getDataState()
    );
    this.notification$ = this.store.select(
      this.detailsTypesKiloSelectors.getNotification()
    );
    this.errorMessage$ = this.store.select(
      this.detailsTypesKiloSelectors.getMessageError()
    );

    this.dataState$ = this.store.select(
      this.detailsTypesPieceSelectors.getDataState()
    );
    this.notification$ = this.store.select(
      this.detailsTypesPieceSelectors.getNotification()
    );
    this.errorMessage$ = this.store.select(
      this.detailsTypesPieceSelectors.getMessageError()
    );

    this.onSubTypeLinge();
    this.onSubInfosKilo();
    this.subInfoPieces();
    this.subEntitieEmit();
    this.test();
  }

  //TODO SUB TYPE LINGE
  onSubTypeLinge() {
    this.store.select(this.typesLingesSelectors.getEntities()).subscribe({
      next: (dataTypeLinge: TypeLinge[]) => {
        if (dataTypeLinge) {
          this.typeLinges = dataTypeLinge;
        }
      },
    });
  }
  //TODO SUB INFO KILO
  onSubInfosKilo() {
    this.store.select(this.infosKiloSelectors.getEntities()).subscribe({
      next: (dataInfosKilo: InfoKilo[]) => {
        if (dataInfosKilo) {
          this.infosKilo = dataInfosKilo[0];
        }
      },
    });
  }
  //TODO SUBS  INFO PIECE
  subInfoPieces() {
    this.sub.add(
      this.store.select(this.infoPiecesSelectors.getEntities()).subscribe({
        next: (dataInfoPieces) => {
          if (dataInfoPieces) {
            this.infoPiecesInit = dataInfoPieces;
            this.infoPieces = dataInfoPieces;
          }
        },
      })
    );
  }
  async test() {
    const data = await this.entititeNativeStorage.getItem(
      this.itemName.idClient
    );
    console.log('id client dans native storage ==' + data);
  }
  //TODO
  onTypeLinge(event: any) {
    const value = event.target.value;
    switch (value) {
      case 'kilo':
        this.typeKilo = true;
        this.typePiece = false;
        this.idTypeLinges = this.typeLinges.find(
          (type) => type.nom === EnumTypeLinge.kilo
        ).id;
        break;
      case 'piece':
        this.typePiece = true;
        this.typeKilo = false;
        this.idTypeLinges = this.typeLinges.find(
          (type) => type.nom === EnumTypeLinge.piece
        ).id;
        break;
    }
  }

  /*                                  PARTI TYPE KILO                                     */

  //TODO
  onRepassage(event: any) {
    const checked = event.target.checked;
    if (checked) {
      this.aRepasser = true;
    } else {
      this.aRepasser = false;
    }
  }
  /*                                  PARTI TYPE PIECE                                     */

  //TODO
  onSelectPiece(event: any, pieceSelected: InfoPiece) {
    const checked = event.target.checked;
    if (checked) {
      this.infoPiecesSelected.push({
        nom: pieceSelected.nom,
        LingeId: '',
        prixRepassage: pieceSelected.prixRepassage,
        aRepasser: false,
        nbrPiece: 1,
        prixLinge: pieceSelected.prixLinge,
      });
    } else {
      this.infoPiecesSelected = this.infoPiecesSelected.filter(
        (piece) => piece.nom !== pieceSelected.nom
      );
    }
  }
  //TODO
  onRepassagePiece(event: any, pieceRepassage: DetailTypePiece) {
    const checked = event.target.checked;
    if (checked) {
      this.infoPiecesSelected.forEach((piece) => {
        if (piece.nom === pieceRepassage.nom) {
          piece.aRepasser = true;
          return;
        }
      });
    } else {
      this.infoPiecesSelected.forEach((piece) => {
        if (piece.nom === pieceRepassage.nom) {
          piece.aRepasser = false;
        }
      });
    }
  }
  //TODO
  onNextSelectedPiece() {
    this.nextSelectedPiece = true;
  }
  //TODO
  onLasteSuivant() {
    const newLinge: Linge = {
      ClientId: this.lingesDataState.getIdClientLinge(),
      EmployeId: this.userService.getIdUser(),
      TypeLingeId: this.idTypeLinges,
      coordX: 11178,
      coordY: 44444,
      livre: false,
      payer: false,
      montantAvance: 0,
      prixLinge: 0,
    };
    this.store.dispatch(
      this.lingesActions.addEntitie()({
        entitie: newLinge,
        onNavAfterAdd: false,
      })
    );
  }
  //TODO ON SUB ENTITIE EMIT
  subEntitieEmit() {
    //
    this.sub.add(
      EntitiesEmit.entitieSub.subscribe({
        next: (dataEmit) => {
          switch (dataEmit.nameNotification) {
            case 'linge':
              const linge = <Linge>dataEmit.entitie;
              this.lingesDataState.setNewLinge(linge);
              if (this.typeKilo) {
                this.onCreateTypeKilo();
              } else {
                this.onCreateTypePiece();
              }
              break;
            case 'details type kilo':
              this.onNav(
                this.whereNav.addEntitie,
                this.routesNames.lingesAddFinale
              );
              break;
            case 'details type piece':
              const pieceCrated = <DetailTypePiece>dataEmit.entitie;
              this.tbPieceCrated.push(pieceCrated);
              if (
                this.tbPieceCrated.length === this.infoPiecesSelected.length
              ) {
                this.onNav(
                  this.whereNav.addEntitie,
                  this.routesNames.lingesAddFinale
                );
              }
              break;
          }
        },
      })
    );
  }
  //TODO
  onCreateTypeKilo() {
    this.detailsTypeKilo = {
      aRepasser: this.aRepasser,
      nbrKilo: this.nbrKilo,
      prixLinge: this.infosKilo.prixLinge,
      prixRepassage: this.infosKilo.prixRepassage,
      LingeId: this.lingesDataState.getNewLinge().id,
    };
    //Calcule montant du linge
    if (this.aRepasser) {
      const prixLinge = this.nbrKilo * this.infosKilo.prixLinge;
      const prixRepassage = this.nbrKilo * this.infosKilo.prixRepassage;
      const montantLingeAvcRps = prixLinge + prixRepassage;
      this.lingesDataState.setMontantLinge(montantLingeAvcRps);
    } else {
      const montantLingeSnsRps = this.nbrKilo * this.infosKilo.prixLinge;
      this.lingesDataState.setMontantLinge(montantLingeSnsRps);
    }
    this.store.dispatch(
      this.detailsTypesKiloActions.addEntitie()({
        entitie: this.detailsTypeKilo,
        onNavAfterAdd: false,
      })
    );
  }
  //TODO
  onCreateTypePiece() {
    //Calcule montant linge
    this.infoPiecesSelected.forEach((piece) => {
      if (piece.aRepasser) {
        const prixPieceLinge = piece.nbrPiece * piece.prixLinge;
        const prixPieceRep = piece.nbrPiece * piece.prixRepassage;
        const somme = prixPieceLinge + prixPieceRep;
        this.montantLinge += somme;
      } else {
        const prixPieceLinge = piece.nbrPiece * piece.prixLinge;
        this.montantLinge += prixPieceLinge;
      }
    });
    this.lingesDataState.setMontantLinge(this.montantLinge);

    this.infoPiecesSelected.forEach((piece) => {
      piece.LingeId = this.lingesDataState.getNewLinge().id;

      this.store.dispatch(
        this.detailsTypesPieceActions.addEntitie()({
          entitie: piece,
          onNavAfterAdd: false,
        })
      );
    });
  }

  //TODO NAV
  onNav(
    whereNav: WhereNavEntities,
    routeParam?: RoutesNames,
    idLinge?: string
  ) {
    this.lingesService.onNav(whereNav, routeParam, idLinge);
  }
  //TODO SEARCH
  handleChange(event: any) {
    const querySearch = event.target.value.toLowerCase();
    this.infoPieces = this.infoPiecesInit.filter(
      (infoPiece) => infoPiece.nom.toLowerCase().indexOf(querySearch) > -1
    );
  }
  //TODO SCROLL
  scrollToTop() {
    this.content.scrollToTop(500);
  }

  //TODO
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

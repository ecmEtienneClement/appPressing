import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, AppStateEnum } from 'src/app/appState/app.state';
import { InfoPiece } from 'src/app/models/models.interfaces';
import { RoutesNames } from 'src/app/routes.config';
import { InfosPiecesActions } from '../ngrx/infosPieces.actions';
import { InfosPiecesSelectors } from '../ngrx/infosPieces.selectors';

@Component({
  selector: 'app-info-pieces-add',
  templateUrl: './info-pieces-add.component.html',
  styleUrls: ['./info-pieces-add.component.scss'],
})
export class InfoPiecesAddComponent implements OnInit {
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  readonly routesNames = RoutesNames;

  //
  formInfoPiece: FormGroup;
  constructor(
    private store: Store<AppState>,
    private infoPiecesActions: InfosPiecesActions,
    private infoPiecesSelectors: InfosPiecesSelectors,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.dataState$ = this.store.select(
      this.infoPiecesSelectors.getDataState()
    );
    this.notification$ = this.store.select(
      this.infoPiecesSelectors.getNotification()
    );
    this.errorMessage$ = this.store.select(
      this.infoPiecesSelectors.getMessageError()
    );
    this.initForm();
    //
  }
  //TODO INIT FORM
  initForm() {
    this.formInfoPiece = this.formBuilder.group({
      nom: [
        null,
        [Validators.required, Validators.pattern('^[a-zA-Zéàôêûîèç_ ]*$')],
      ],
      prixLinge: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      prixRepassage: [
        null,
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
    });
  }

  //TODO SUBMIT
  submitForm() {
    //ADD
    const formAddValues = this.formInfoPiece.value;
    const newInfoPiece: InfoPiece = {
      nom: formAddValues.nom,
      prixLinge: formAddValues.prixLinge,
      prixRepassage: formAddValues.prixRepassage,
    };
    this.store.dispatch(
      this.infoPiecesActions.addEntitie()({
        entitie: newInfoPiece,
        onNavAfterAdd: true,
      })
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, AppStateEnum } from '../appState/app.state';
import { RoutesNames } from '../routes.config';
import { LoginActions } from './ngrx/login.actions';
import { LoginSelectors } from './ngrx/login.selectors';
import { User } from 'src/app/models/models.interfaces';
import { EntitiesEmit } from '../modules/servicesModules/modules.emit';
import { UserService } from '../servicesApp/user.service';
import { Toast } from '@awesome-cordova-plugins/toast/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  readonly routesNames = RoutesNames;

  //
  formLogin: FormGroup;
  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private loginSelectors: LoginSelectors,
    private loginActions: LoginActions,
    private userService: UserService,
    private toast: Toast
  ) {}

  ngOnInit() {
    this.toast.show(`I'm a toast`, '9000', 'center').subscribe((toast) => {
      console.log(toast);
    });
    this.dataState$ = this.store.select(this.loginSelectors.getDataState());
    this.notification$ = this.store.select(
      this.loginSelectors.getNotification()
    );
    this.errorMessage$ = this.store.select(
      this.loginSelectors.getMessageError()
    );
    this.initForm();
    this.onSubEmit();
  }
  //TODO INIT FORM
  initForm() {
    this.formLogin = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      mdp: [
        null,
        [
          Validators.required,
          Validators.pattern('(?=.*[A-z])(?=.*[A-Z])(?=.*[0-9])^[a-zA-Z0-9]*$'),
        ],
      ],
    });
  }
  //TODO SUB EMIT
  onSubEmit() {
    EntitiesEmit.entitieSub.subscribe({
      next: (dataEmit) => {
        if (dataEmit.nameNotification === 'user') {
          const user: User = dataEmit.entitie;
          this.userService.setUser(user);
        }
      },
    });
  }
  //TODO SUBMIT
  submitForm() {
    const email = this.formLogin.value.email;
    const mdp = this.formLogin.value.mdp;

    const user: User = {
      email,
      mdp,
    };
    this.store.dispatch(
      this.loginActions.addEntitie()({
        entitie: user,
        onNavAfterAdd: false,
      })
    );
  }

  //TODO
  /*
  mdpIsValid = (pwd: string): boolean => {
    const regIncludeLettreMini = new RegExp('[a-z]+', 'g');
    const regIncludeLettreMaju = new RegExp('[A-Z]+', 'g');
    const regIncludeChiffre = new RegExp('[0-9]+', 'g');

    const message = 'Votre mot de passe doit avoir au moins';
    const errorPwd = new Error();
    errorPwd.name = 'InvalidePwd';

    //VRF
    if (pwd.length < 6) {
      errorPwd.message = message + ' six(6) caractères';
      throw errorPwd;
    } else if (!regIncludeLettreMini.test(pwd)) {
      errorPwd.message = message + ' une lettre minuscule';
      throw errorPwd;
    } else if (!regIncludeLettreMaju.test(pwd)) {
      errorPwd.message = message + ' une lettre majuscule';
      throw errorPwd;
    } else if (!regIncludeChiffre.test(pwd)) {
      errorPwd.message = message + ' un chiffre';
      throw errorPwd;
    } else {
      return true;
    }
  };
  */
}

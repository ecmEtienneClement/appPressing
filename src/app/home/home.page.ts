import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState, AppStateEnum } from '../appState/app.state';
import { RoutesNames } from '../routes.config';
import { LoginActions } from './ngrx/login.actions';
import { LoginSelectors } from './ngrx/login.selectors';
import { EnumUserState, User } from 'src/app/models/models.interfaces';
import { EntitiesEmit } from '../modules/servicesModules/modules.emit';
import { UserService } from '../servicesApp/user.service';
import { Toast } from '@awesome-cordova-plugins/toast/ngx';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  notification$: Observable<string> = new Observable();
  errorMessage$: Observable<string> = new Observable();
  dataState$: Observable<AppStateEnum> = new Observable();
  readonly routesNames = RoutesNames;
  sub: Subscription = new Subscription();
  islogOut = false;
  loading: any;
  //
  formLogin: FormGroup;
  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private loginSelectors: LoginSelectors,
    private loginActions: LoginActions,
    private userService: UserService,
    private loadingCtl: LoadingController,
    private router: Router
  ) {}

  ngOnInit() {
    //teste de toast
    /*
    this.toast.show(`I'm a toast`, '9000', 'center').subscribe((toast) => {
      console.log(toast);
    });
    */
    this.dataState$ = this.store.select(this.loginSelectors.getDataState());
    this.notification$ = this.store.select(
      this.loginSelectors.getNotification()
    );
    this.errorMessage$ = this.store.select(
      this.loginSelectors.getMessageError()
    );
    this.initForm();
    this.onSubEmit();
    this.onSubUser();
    if (this.userService.getTokenUser() === '') {
      this.islogOut = true;
    }
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
          this.loading.dismiss();

          this.router.navigate([this.routesNames.linges]);
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

  //TODO SUB USER
  onSubUser() {
    this.sub.add(
      this.userService.userSub.subscribe({
        next: (dataState) => {
          if (dataState === EnumUserState.logOut) {
            this.islogOut = true;
          }
        },
      })
    );
  }
  async showLoading() {
    this.loading = await this.loadingCtl.create({
      message: 'Connexion en cour...',
      cssClass: 'custom-loading',
      duration: 15000,
    });
    this.loading.present();
  }
  //TODO
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

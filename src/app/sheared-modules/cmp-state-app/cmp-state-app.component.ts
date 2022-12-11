import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AppStateEnum } from 'src/app/appState/app.state';

@Component({
  selector: 'app-cmp-state-app',
  templateUrl: './cmp-state-app.component.html',
  styleUrls: ['./cmp-state-app.component.scss'],
})
export class CmpStateAppComponent implements OnInit, OnChanges {
  @Input() dataState: AppStateEnum;
  @Input() notification: string;
  @Input() errorMessage: string;
  initiale = true;
  loading = true;
  loaded = true;
  error = true;
  readonly dataStateEnum = AppStateEnum;
  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.doSomething(this.dataState);
  }

  private doSomething(input: AppStateEnum) {
    switch (input) {
      case AppStateEnum.initiale:
        this.initiale = true;
        setTimeout(() => {
          this.initiale = false;
        }, 3000);
        break;
      case AppStateEnum.loaded:
        this.loaded = true;
        setTimeout(() => {
          this.loaded = false;
        }, 3000);
        break;
    }
  }
}

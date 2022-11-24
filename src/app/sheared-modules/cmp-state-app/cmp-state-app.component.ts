import { Component, Input, OnInit } from '@angular/core';
import { AppStateEnum } from 'src/app/appState/app.state';

@Component({
  selector: 'app-cmp-state-app',
  templateUrl: './cmp-state-app.component.html',
  styleUrls: ['./cmp-state-app.component.scss'],
})
export class CmpStateAppComponent implements OnInit {
  @Input() dataState: AppStateEnum;
  @Input() notification: string;
  @Input() errorMessage: string;
  readonly dataStateEnum = AppStateEnum;
  constructor() {}

  ngOnInit() {}
}

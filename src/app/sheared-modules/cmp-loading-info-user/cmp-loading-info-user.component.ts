import { Component, Input, OnInit } from '@angular/core';
import { AppStateEnum } from 'src/app/appState/app.state';

@Component({
  selector: 'app-cmp-loading-info-user',
  templateUrl: './cmp-loading-info-user.component.html',
  styleUrls: ['./cmp-loading-info-user.component.scss'],
})
export class CmpLoadingInfoUserComponent implements OnInit {
  @Input() dataState: AppStateEnum;
  readonly dataStateEnum = AppStateEnum;
  constructor() {}

  ngOnInit() {}
}

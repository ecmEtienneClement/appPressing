import { Component, Input, OnInit } from '@angular/core';
import { AppStateEnum } from 'src/app/appState/app.state';

@Component({
  selector: 'app-cmp-loading-list',
  templateUrl: './cmp-loading-list.component.html',
  styleUrls: ['./cmp-loading-list.component.scss'],
})
export class CmpLoadingListComponent implements OnInit {
  @Input() dataState: AppStateEnum;
  readonly dataStateEnum = AppStateEnum;

  listsLoading: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() {}

  ngOnInit() {}
}

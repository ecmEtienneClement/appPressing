import { Component, Input, OnInit } from '@angular/core';
import { AppStateEnum } from 'src/app/appState/app.state';

@Component({
  selector: 'app-cmp-loading-card',
  templateUrl: './cmp-loading-card.component.html',
  styleUrls: ['./cmp-loading-card.component.scss'],
})
export class CmpLoadingCardComponent implements OnInit {
  @Input() dataState: AppStateEnum;
  readonly dataStateEnum = AppStateEnum;

  cardsLoading: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() {}

  ngOnInit() {}
}

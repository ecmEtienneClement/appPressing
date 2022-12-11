import { Component, Input, OnInit } from '@angular/core';
import { Linge } from 'src/app/models/models.interfaces';

@Component({
  selector: 'app-cmp-linges',
  templateUrl: './cmp-linges.component.html',
  styleUrls: ['./cmp-linges.component.scss'],
})
export class CmpLingesComponent implements OnInit {
  @Input() linge: Linge;
  constructor() {}

  ngOnInit() {}
}

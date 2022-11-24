import { Component, Input, OnInit } from '@angular/core';
import { DemandeDepense } from 'src/app/models/models.interfaces';

@Component({
  selector: 'app-cmp-dmd-depense',
  templateUrl: './cmp-dmd-depense.component.html',
  styleUrls: ['./cmp-dmd-depense.component.scss'],
})
export class CmpDmdDepenseComponent implements OnInit {
  @Input() dmdDepense: DemandeDepense;
  constructor() {}

  ngOnInit() {}
}

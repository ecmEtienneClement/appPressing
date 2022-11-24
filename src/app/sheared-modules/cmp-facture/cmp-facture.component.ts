import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-facture',
  templateUrl: './cmp-facture.component.html',
  styleUrls: ['./cmp-facture.component.scss'],
})
export class CmpFactureComponent implements OnInit {
  @Input() factureCreatedAt: string;
  @Input() factureType: string;
  @Input() factureMontant: number;

  constructor() {}

  ngOnInit() {}
}

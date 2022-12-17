import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmpStateAppComponent } from './cmp-state-app/cmp-state-app.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CmpLoadingListComponent } from './cmp-loading-list/cmp-loading-list.component';
import { CmpDmdDepenseComponent } from './cmp-dmd-depense/cmp-dmd-depense.component';
import { CmpFactureComponent } from './cmp-facture/cmp-facture.component';
import { CmpLoadingCardComponent } from './cmp-loading-card/cmp-loading-card.component';
import { CmpLingesComponent } from './cmp-linges/cmp-linges.component';
import { CmpLoadingInfoUserComponent } from './cmp-loading-info-user/cmp-loading-info-user.component';

@NgModule({
  declarations: [
    CmpStateAppComponent,
    CmpLoadingListComponent,
    CmpDmdDepenseComponent,
    CmpFactureComponent,
    CmpLoadingCardComponent,
    CmpLingesComponent,
    CmpLoadingInfoUserComponent,
  ],
  imports: [CommonModule, IonicModule],
  exports: [
    CmpStateAppComponent,
    CmpLoadingListComponent,
    CmpDmdDepenseComponent,
    CmpFactureComponent,
    CmpLoadingCardComponent,
    CmpLingesComponent,
    CmpLoadingInfoUserComponent,
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ShearedModulesModule {}

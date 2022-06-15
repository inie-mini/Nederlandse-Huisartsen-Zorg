import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicSelectableModule } from 'ionic-selectable';

import { IonicModule } from '@ionic/angular';

import { ReferralPageRoutingModule } from './referral-routing.module';

import { ReferralPage } from './referral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ReferralPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [ReferralPage]
})
export class ReferralPageModule {}

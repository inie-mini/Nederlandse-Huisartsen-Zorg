import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotMobilePageRoutingModule } from './not-mobile-routing.module';

import { NotMobilePage } from './not-mobile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotMobilePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NotMobilePage]
})
export class NotMobilePageModule {}

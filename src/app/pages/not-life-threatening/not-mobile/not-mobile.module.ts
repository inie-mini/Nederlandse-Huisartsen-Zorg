import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotMobilePageRoutingModule } from './not-mobile-routing.module';

import { NotMobilePage } from './not-mobile.page';
// import { HomePage } from '../../home/home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotMobilePageRoutingModule
  ],
  declarations: [NotMobilePage]
})
export class NotMobilePageModule {}

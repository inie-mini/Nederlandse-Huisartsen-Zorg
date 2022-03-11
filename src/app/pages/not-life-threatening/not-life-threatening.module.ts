import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotLifeThreateningPageRoutingModule } from './not-life-threatening-routing.module';

import { NotLifeThreateningPage } from './not-life-threatening.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotLifeThreateningPageRoutingModule
  ],
  declarations: [NotLifeThreateningPage]
})
export class NotLifeThreateningPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BloodtestPageRoutingModule } from './bloodtest-routing.module';

import { BloodtestPage } from './bloodtest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BloodtestPageRoutingModule
  ],
  declarations: [BloodtestPage]
})
export class BloodtestPageModule {}

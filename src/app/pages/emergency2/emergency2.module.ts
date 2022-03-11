import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Emergency2PageRoutingModule } from './emergency2-routing.module';

import { Emergency2Page } from './emergency2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Emergency2PageRoutingModule
  ],
  declarations: [Emergency2Page]
})
export class Emergency2PageModule {}

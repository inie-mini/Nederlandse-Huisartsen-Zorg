import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyMedicinesPageRoutingModule } from './my-medicines-routing.module';

import { MyMedicinesPage } from './my-medicines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyMedicinesPageRoutingModule
  ],
  declarations: [MyMedicinesPage]
})
export class MyMedicinesPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloodtestPage } from './bloodtest.page';

const routes: Routes = [
  {
    path: '',
    component: BloodtestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloodtestPageRoutingModule {}

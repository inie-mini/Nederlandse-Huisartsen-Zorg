import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotLifeThreateningPage } from './not-life-threatening.page';

const routes: Routes = [
  {
    path: '',
    component: NotLifeThreateningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotLifeThreateningPageRoutingModule {}

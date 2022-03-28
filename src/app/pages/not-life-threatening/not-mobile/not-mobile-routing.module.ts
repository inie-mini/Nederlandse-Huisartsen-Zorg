import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotMobilePage } from './not-mobile.page';

const routes: Routes = [
  {
    path: '',
    component: NotMobilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotMobilePageRoutingModule {}

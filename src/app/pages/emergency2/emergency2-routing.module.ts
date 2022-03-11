import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Emergency2Page } from './emergency2.page';

const routes: Routes = [
  {
    path: '',
    component: Emergency2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Emergency2PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotLifeThreateningPage } from './not-life-threatening.page';

const routes: Routes = [
  {
    path: '',
    component: NotLifeThreateningPage
  },
  {
    path: 'modal-page',
    loadChildren: () => import('./modal-page/modal-page.module').then( m => m.ModalPagePageModule)
  },
  {
    path: 'not-mobile',
    loadChildren: () => import('./not-mobile/not-mobile.module').then( m => m.NotMobilePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotLifeThreateningPageRoutingModule {}

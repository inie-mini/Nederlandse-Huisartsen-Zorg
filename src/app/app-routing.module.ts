import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'callback', loadChildren: () => import('./auth/auth-callback/auth-callback.module').then(m => m.AuthCallbackPageModule) },
  { path: 'logout', loadChildren: () => import('./auth/end-session/end-session.module').then(m => m.EndSessionPageModule) },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'loader', loadChildren: () => import('./pages/loader/loader.module').then(m => m.LoaderPageModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule), },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'forgot-pw', loadChildren: () => import('./pages/forgot-pw/forgot-pw.module').then( m => m.ForgotPwPageModule) },
  { path: 'emergency', loadChildren: () => import('./pages/emergency/emergency.module').then( m => m.EmergencyPageModule) },
  { path: 'emergency2', loadChildren: () => import('./pages/emergency2/emergency2.module').then( m => m.Emergency2PageModule) },
  { path: 'not-life-threatening', loadChildren: () => import('./pages/not-life-threatening/not-life-threatening.module').then( m => m.NotLifeThreateningPageModule) },
  { path: 'chat', loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule), },
  { path: 'consult', loadChildren: () => import('./pages/consult/consult.module').then( m => m.ConsultPageModule) },
  { path: 'referral', loadChildren: () => import('./pages/referral/referral.module').then( m => m.ReferralPageModule)  },
  { path: 'bloodtest', loadChildren: () => import('./pages/bloodtest/bloodtest.module').then( m => m.BloodtestPageModule) },
  { path: 'my-medicines', loadChildren: () => import('./pages/my-medicines/my-medicines.module').then( m => m.MyMedicinesPageModule) }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

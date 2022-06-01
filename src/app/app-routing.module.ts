//import { Auth } from '@angular/fire/auth';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/']);
const redirectLoggedInToHome = () => redirectLoggedInTo (['/home']);

const routes: Routes = [

  { path: '', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule), ...canActivate(redirectLoggedInToHome)},
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule), ...canActivate(redirectUnauthorizedToLogin)},
  { path: 'forgot-pw', loadChildren: () => import('./pages/forgot-pw/forgot-pw.module').then(m => m.ForgotPwPageModule)},
  { path: 'emergency', loadChildren: () => import('./pages/emergency/emergency.module').then(m => m.EmergencyPageModule)},
  { path: 'emergency2', loadChildren: () => import('./pages/emergency2/emergency2.module').then(m => m.Emergency2PageModule)},
  { path: 'not-life-threatening', loadChildren: () => import('./pages/not-life-threatening/not-life-threatening.module').then(m => m.NotLifeThreateningPageModule)},
  { path: 'chat', loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatPageModule), ...canActivate(redirectUnauthorizedToLogin)},
  { path: 'consult', loadChildren: () => import('./pages/consult/consult.module').then(m => m.ConsultPageModule), ...canActivate(redirectUnauthorizedToLogin)},
  { path: 'referral', loadChildren: () => import('./pages/referral/referral.module').then(m => m.ReferralPageModule), ...canActivate(redirectUnauthorizedToLogin)},
  { path: 'bloodtest', loadChildren: () => import('./pages/bloodtest/bloodtest.module').then(m => m.BloodtestPageModule), ...canActivate(redirectUnauthorizedToLogin)},
  { path: 'my-medicines', loadChildren: () => import('./pages/my-medicines/my-medicines.module').then(m => m.MyMedicinesPageModule), ...canActivate(redirectUnauthorizedToLogin)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

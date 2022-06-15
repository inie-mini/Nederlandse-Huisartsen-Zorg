import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';

import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
//import { AuthService } from './services/auth.service';
import { AuthService } from 'ionic-appauth';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { IonicSelectableModule } from 'ionic-selectable';

//@Injectable({ providedIn: 'root' })

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    IonicSelectableModule
  ],
  //providers: [ Geolocation, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AuthService],
  providers: [ Geolocation, { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig }, AuthService],

  bootstrap: [AppComponent],
})
export class AppModule { }


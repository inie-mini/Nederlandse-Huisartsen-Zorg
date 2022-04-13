import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

import { SplashScreen } from '@capacitor/splash-screen';

import { AuthService } from 'ionic-appauth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(
    public platform: Platform,
    public auth: AuthService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      await this.auth.init();
      if (this.platform.is('mobile') && !this.platform.is('mobileweb')) {
        await SplashScreen.hide();
      }
    });
  }
}

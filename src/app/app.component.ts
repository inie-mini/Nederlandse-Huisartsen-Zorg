import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { AuthService } from 'ionic-appauth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  appPages = [
    {
      title: 'Chat met huisarts',
      url: '/chat',
      icon: 'chatbubbles'
    },
    {
      title: 'Consultaanvraag',
      url: '/consult',
      icon: 'clipboard'
    },
    {
      title: 'Doorverwijzing',
      url: '/referral',
      icon: 'play-forward'
    },
    {
      title: 'Bloedonderzoek',
      url: '/bloodtest',
      icon: 'water'
    },
    {
      title: 'Mijn medicijnen',
      url: '/my-medicines',
      icon: 'flask'
    },
    {
      title: 'Spoed',
      url: '/emergency',
      icon: 'medical'
    }
  ]

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

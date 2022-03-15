import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})



export class AppComponent {

  currentPageTitle = 'Dashboard';

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
  ];
  constructor() { }
}

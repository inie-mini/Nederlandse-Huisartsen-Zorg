import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
//import { menuController } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public menuCtrl: MenuController
  ) { 
    this.menuCtrl.enable(true, "menuuu");
  }

  ngOnInit() {
  }

}

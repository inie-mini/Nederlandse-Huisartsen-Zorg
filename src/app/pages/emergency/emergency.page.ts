import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { Emergency2Page } from '../emergency2/emergency2.page';
import { AuthenticationService } from '../../services/shared/authentication-service';
import { user } from 'rxfire/auth';
// import { Auth } from '@angular/fire/auth';
// import { getAuth } from 'firebase/auth';
// import { AuthService } from 'ionic-appauth';


@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.page.html',
  styleUrls: ['./emergency.page.scss'],
})
export class EmergencyPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    public authService: AuthenticationService,
    public menuCtrl: MenuController
    ) { 
      //this.menuCtrl.enable(false,"menuuu");
    }

  async openTransparentModal(){
    const modal = await this.modalCtrl.create({
      component: Emergency2Page,
      cssClass: 'emergency2-modal'
    });
  await modal.present();
  }

  ngOnInit() {
    if(this.authService.isLoggedIn() === false)
    {
      this.menuCtrl.enable(false, 'menuuu');
      console.log("uitgelogd")
    }
    else{console.log("ingelogd")}  
  }
}



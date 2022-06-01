import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
//import { ChatService } from 'src/app/services/chat.service';
import { ModalPagePage } from '../not-life-threatening/modal-page/modal-page.page';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-not-life-threatening',
  templateUrl: './not-life-threatening.page.html',
  styleUrls: ['./not-life-threatening.page.scss'],
})
export class NotLifeThreateningPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    //private loadingController: LoadingController,
    private auth: Auth,
    public authService: AuthService,
    //private chatService: ChatService,
    public menuCtrl: MenuController,
    //private appModule: AppModule,
    private router: Router
  ) { }

  ngOnInit() {
    console.clear();
    const user = this.auth.currentUser;
    if (user){
      console.log(user.email + " is ingelogd.")
      document.getElementById("backToLogin").style.display = 'none';
      this.menuCtrl.enable(true);
    } else {
      console.log("Niemand is ingelogd.");
      document.getElementById("toolHead").style.display = 'none';
      this.menuCtrl.enable(false);
    }
  }
  
  async openTransparentModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPagePage,
      cssClass: 'transparent-modal'
    });
    await modal.present();
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
}

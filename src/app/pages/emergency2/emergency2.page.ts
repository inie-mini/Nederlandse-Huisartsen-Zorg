import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MenuController, AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-emergency2',
  templateUrl: './emergency2.page.html',
  styleUrls: ['./emergency2.page.scss'],
})

export class Emergency2Page implements OnInit {

  constructor(
    private auth: Auth,
    private authService: AuthService,
    public menuCtrl: MenuController,
    private loadingCtrl: LoadingController,
    private router: Router,
    private alertCtrl: AlertController,
  ) {}

  async ngOnInit() { 
    console.clear();
    const user = this.auth.currentUser;
    const menu2 = document.getElementById("toolHead");
    const loginBtn = document.getElementById("backToLogin");

    const loading = await this.loadingCtrl.create({message: 'Moment geduld aub...', duration: 5000});
    await loading.present();

    if (user){
      console.log(user.email + " is ingelogd.")
      loginBtn.style.display = 'none';
      this.menuCtrl.enable(true);
    } else {
      console.log("Niemand is ingelogd.");
      this.menuCtrl.enable(false);
      menu2.style.display = 'none';
    };

    await loading.dismiss();
  }

  async showAlert() {
    await this.alertCtrl.create({
      header: '112 wordt nu gebeld',
      buttons: [
        {
          text: 'Ok'
        }
      ]
    }).then(res => res.present());
  }
  
  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
}

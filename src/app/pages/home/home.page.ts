import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MenuController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(
    public menuCtrl: MenuController,
    private auth: Auth,
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit(){}

  ionViewDidEnter(){
    //console.clear();
    const user = this.auth.currentUser;
    if (user){
      console.log(user.email + " is ingelogd.")
      this.menuCtrl.enable(true);
    } else {
      console.log("Niemand is ingelogd.")
      this.menuCtrl.enable(false);
    }
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
};

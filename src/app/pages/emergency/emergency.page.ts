import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.page.html',
  styleUrls: ['./emergency.page.scss'],
})

export class EmergencyPage implements OnInit {

  constructor(
    private auth: Auth,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    public menuCtrl: MenuController,
    private router: Router,
  ) {}

  async ngOnInit() { 
    console.clear();
    const user = this.auth.currentUser;
    const menu2 = document.getElementById("toolHead");
    const backBtn = document.getElementById("backToLogin");

    const loading = await this.loadingCtrl.create({message: 'Moment geduld aub...', duration: 5000});
    await loading.present();

    if (user){
      console.log(user.email + " is ingelogd.")
      backBtn.style.display = 'none';
      this.menuCtrl.enable(true);
    } else {
      console.log("Niemand is ingelogd.");
      backBtn.style.display = 'block';
      menu2.style.display = "none";
      this.menuCtrl.enable(false);
    }

    await loading.dismiss();
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  credentials: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private authService: AuthService,
    private router: Router,
    private menuCtrl: MenuController,
  ) {}
    
  get email() {
    return this.credentials.get('email');
  }
  get password() {
    return this.credentials.get('password');
  }

  ngOnInit() { 
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ionViewDidEnter(){
    console.clear();
    this.authService.logout();
    this.menuCtrl.enable(false);
  }

  async register() {
    const loading = await this.loadingCtrl.create();
    await loading.present();

    this.authService.register(this.credentials.value).then(user => {
      loading.dismiss();
      this.router.navigateByUrl('/home', { replaceUrl: true });
    }, async err => {
      loading.dismiss();
      await this.showAlert('Registratie mislukt', 'probeer het nogmaals.')
    }
    );
  }
  
  async login() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    const user = await this.authService.signIn(this.credentials.value);
    await loading.dismiss();

    if (user) {
      this.router.navigateByUrl('/home', { replaceUrl: true });
      console.log(user.user.email + " is ingelogd.")
    } else {
      this.showAlert('Inloggen is mislukt', 'probeer het nogmaals.')
    }
  }

  async showAlert(header,message){
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons:['OK']
    });
    await alert.present();
  }
}  


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthenticationService } from '../../services/shared/authentication-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public menuCtrl: MenuController
  ) { 
    this.menuCtrl.enable(false, 'menuuu');
  }

  ngOnInit(
  ) {this.authService.signOut()}

  logIn(email, password) {
    this.authService.signIn(email.value, password.value)
      .then((res) => {
        if(this.authService.isEmailVerified) {
          this.router.navigate(['home']);
          //zet loggedin status op 'true'
        } else {
          window.alert('Email is not verified');
          return false;
        }
      }).catch((error) => {
        window.alert(error.message);
      });
  }
}

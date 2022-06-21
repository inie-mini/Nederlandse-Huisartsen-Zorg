import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-forgot-pw',
  templateUrl: './forgot-pw.page.html',
  styleUrls: ['./forgot-pw.page.scss'],
})
export class ForgotPwPage implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  
  // async resetPW(){
  //   await this.authService.resetPassword(email);
  // }

}

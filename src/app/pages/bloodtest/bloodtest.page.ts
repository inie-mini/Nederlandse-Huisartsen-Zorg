import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-bloodtest',
  templateUrl: './bloodtest.page.html',
  styleUrls: ['./bloodtest.page.scss'],
})
export class BloodtestPage implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  ngOnInit() {
  }
  onClick(){
    alert("Uw aanvraag is ingediend, u ontvangt zsm bericht hierover.")
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.page.html',
  styleUrls: ['./consult.page.scss'],
})
export class ConsultPage implements OnInit {

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
    alert("Uw bezoek staat ingepland, de bevestiging wordt zsm naar uw mail adres gestuurd.")
  }
}

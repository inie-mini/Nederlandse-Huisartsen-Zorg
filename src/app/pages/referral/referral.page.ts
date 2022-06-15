import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { IonicSelectableComponent } from 'ionic-selectable';
import { redirectLoggedInTo } from '@angular/fire/auth-guard';
//import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


class Specialist {
  public id: number;
  public name: string;
}

@Component({
  selector: 'app-referral',
  templateUrl: './referral.page.html',
  styleUrls: ['./referral.page.scss'],
})
export class ReferralPage implements OnInit {

  specialists: Specialist[];
  specialist: Specialist;
  //refform: FormGroup;
  
  constructor(
    private authService: AuthService,
    private router: Router,
    //private formBuilder: FormBuilder
  ) 
  { this.specialists = [
    { id: 1, name: 'Diëtist - Dr. Spillebeen' },
    { id: 2, name: 'Eerstehulp medewerker 1 - Mr. Ongelukje' },
    { id: 3, name: 'Eerstehulp medewerker 2 - Mevr. Breekebeen' },
    { id: 4, name: 'Gynaecoloog - Mr. Hyde' },
    { id: 5, name: 'Hand-ergotherapeut - Mevr. Knokkels' },
    { id: 6, name: 'Fysiotherapeut - Dr. Knedemans' },
    { id: 7, name: 'Kaakchirurg - Mr. Cariës' },
    { id: 8, name: 'KNO-arts - Dr. Jakyll' },
    { id: 9, name: 'Maag-darm-leverarts - Mevr. Drinkalot' },
    { id: 10, name: 'Radioloog - Dr. Deejay' },
    { id: 10, name: 'Uroloog 1 - Mr. Viagra' },
    { id: 10, name: 'Uroloog 2 - Mevr. Loslippig' }
  ];
  }

  specialistChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('specialist:', event.value);
  }Change(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('specialist:', event.value);
  }

  ngOnInit() {
  }

  onClick(){
    if (!this.specialist){
      alert("Selecteer aub de gewenste specialist.");
      document.getElementById('special').style.color = "red"; 
    } else {
      document.getElementById('special').style.color = "black"; 
      alert(`Uw aanvraag is ingediend bij ${this.specialist.name}, u ontvangt zo spoedig mogelijk bericht.`);
    }
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
}

/// <reference types="@types/googlemaps" />
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { MenuController, LoadingController } from '@ionic/angular';
import { Auth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
//import { AppModule } from 'src/app/app.module';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-not-mobile',
  templateUrl: './not-mobile.page.html',
  styleUrls: ['./not-mobile.page.scss'],
})
export class NotMobilePage implements OnInit {
  
  map: GoogleMap;
  private formData: FormGroup;

  constructor(
    
    private auth: Auth,
    public authService: AuthService,
    public menuCtrl: MenuController,
    //private chatService: ChatService,
    private loadingCtrl: LoadingController,
    private router: Router,
    private formBuilder: FormBuilder,
    //private google: GoogleMap
  ) { 
    this.formData = this.formBuilder.group({
      streetName: [''],
      houseNumber: [''],
      zipCode: [''],
      city: ['']
    })
  }
  
  ngOnInit() {}
  
  async ionViewDidEnter(){
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

  
  toggleImg() {
    const showMap = document.getElementById('showMap');
    const mapText = document.getElementById('mapText');

    if (showMap.style.display === 'block') {
      showMap.style.display = 'none';
    }
    else {
      showMap.style.display = 'block';
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
        mapText.innerHTML = "Geolocation is not supported by this browser.";
      }
      function showPosition(position) {
        const lati = position.coords.latitude;
        const long = position.coords.longitude;
        mapText.innerHTML = "Latitude: " + lati + 
        "<br>Longitude: " + long;
      }
    }
  }   
  
  onSubmit() {
    const straatnaam = this.formData.value['streetName'];
    const huisnummer = this.formData.value['houseNumber'];
    const postcode = this.formData.value['zipCode'];
    const woonplaats = this.formData.value['city'];
    const adresLine = `Hulpdiensten zijn onderweg naar ${straatnaam} huisnummer ${huisnummer}, postcode ${postcode} ${woonplaats}, blijf waar u bent.`;
    alert(adresLine);
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
  
}

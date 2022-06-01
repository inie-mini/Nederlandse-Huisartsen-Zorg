import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { MenuController, LoadingController } from '@ionic/angular';
import { Auth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
import { google } from 'google-maps';
import { AppModule } from 'src/app/app.module';

@Component({
  selector: 'app-not-mobile',
  templateUrl: './not-mobile.page.html',
  styleUrls: ['./not-mobile.page.scss'],
})
export class NotMobilePage implements OnInit {

  @ViewChild('map') mapElement;
  google: any;
  map: any;
  data = '';

  private formData: FormGroup;

  constructor(
    private geolocation: Geolocation,
    private auth: Auth,
    public authService: AuthService,
    public menuCtrl: MenuController,
    //private chatService: ChatService,
    private loadingCtrl: LoadingController,
    private router: Router,
    private formBuilder: FormBuilder
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
  
  async toggleImg() {
    const simsalabim = document.getElementById('showMaps');
    
    if (simsalabim.style.display === 'block') {
      simsalabim.style.display = 'none';
    }
    else {
      simsalabim.style.display = 'block';
      this.geolocation.getCurrentPosition().then((resp) => {
        const lati = resp.coords.latitude;
        const long = resp.coords.longitude;
        this.data = lati + ' breedtegraad & ' + long + ' lengtegraad';
        const coords = new google.maps.LatLng(lati, long);
        const mapOptions: google.maps.MapOptions = {
          center: coords,
          zoom: 15,
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      });
      alert('Ik krijg de billing niet goed ingesteld op mijn google acount, terwijl mijn paypal wel goed is gekoppeld. GoogleMaps wordt wel geactiveerd en laten zien onderaan deze pagina op basis van latitude en longitude. mvg Raymond');
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

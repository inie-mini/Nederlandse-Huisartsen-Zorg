import { Component, OnInit, ViewChild } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { google } from 'google-maps';
// import {Loader, LoaderOptions} from 'google-maps';

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
  constructor(private geolocation: Geolocation) { }

  async toggleImg() {
    const simsalabim = document.getElementById('showMaps');
    // const img = document.getElementById('googleMaps');
  	// const img2 = document.getElementById('mapText');

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
        alert('Ik krijg de billing niet goed ingesteld op mijn google acount, terwijl mijn paypal wel goed is gekoppeld. mvg Raymond');
    }
  }

  // async showAddress(){
  //   const streetname = document.getElementById('streetname');
  //   const streetnumber = document.getElementById('streetnumber');
  //   const city = document.getElementById('city');
  //   alert('Hulpdiensten zijn onderweg naar:' + streetname.nodeValue + streetnumber + ' in ' + city);
  // }

  ngOnInit() {
  }
}


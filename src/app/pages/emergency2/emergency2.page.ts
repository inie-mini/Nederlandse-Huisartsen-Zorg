import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-emergency2',
  templateUrl: './emergency2.page.html',
  styleUrls: ['./emergency2.page.scss'],
})
export class Emergency2Page implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  async showAlert() {
    await this.alertCtrl.create({
      header: '112 wordt nu gebeld',
      buttons: [
        {
          text: 'Ok'
        }
      ]
    }).then(res => res.present());
  }

  ngOnInit() {
  }

}

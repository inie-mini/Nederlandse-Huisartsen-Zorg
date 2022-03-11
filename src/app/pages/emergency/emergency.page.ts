import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Emergency2Page } from '../emergency2/emergency2.page';


@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.page.html',
  styleUrls: ['./emergency.page.scss'],
})
export class EmergencyPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  async openTransparentModal(){
    const modal = await this.modalCtrl.create({
      component: Emergency2Page,
      cssClass: 'emergency2-modal'
    });
  await modal.present();
  }

  ngOnInit() {
  }

  // async showAlert() {
  //   await this.alertCtrl.create({
  //     header: 'LET OP!!!',
  //     message: 'U staat op het punt een noodoproep te doen. Misbruik resulteert in uitschakeling van deze functie.',
  //     buttons: [
  //       {
  //         text: 'Niet levensbedreigend maar wel spoedeisend.', handler: (res1) => {
  //           alert('112 is gebeld.');
  //         }
  //       },
  //       {
  //         text: 'LEVENSBEDREIGENDE SITUATIE',
  //         handler: () => {
  //           this.navCtrl.navigateRoot(url(), '/home.page.html'),
  //         }
  //       }
  //     ]
  //   }).then(res => res.present());
  // }
}

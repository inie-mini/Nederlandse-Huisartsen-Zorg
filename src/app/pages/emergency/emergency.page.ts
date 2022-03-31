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
}

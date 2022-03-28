import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPagePage } from '../not-life-threatening/modal-page/modal-page.page';

@Component({
  selector: 'app-not-life-threatening',
  templateUrl: './not-life-threatening.page.html',
  styleUrls: ['./not-life-threatening.page.scss'],
})
export class NotLifeThreateningPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  async openTransparentModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPagePage,
      cssClass: 'transparent-modal'
    });
    await modal.present();
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.page.html',
  styleUrls: ['./referral.page.scss'],
})
export class ReferralPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    alert("Uw aanvraag is ingediend, u ontvangt zo spoedig mogelijk bericht.")
  }
}

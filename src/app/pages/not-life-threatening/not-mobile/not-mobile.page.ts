import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core' ;

declare const google: any;

@Component({
  selector: 'app-not-mobile',
  templateUrl: './not-mobile.page.html',
  styleUrls: ['./not-mobile.page.scss'],
})
export class NotMobilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

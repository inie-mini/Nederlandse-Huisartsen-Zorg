import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-my-medicines',
  templateUrl: './my-medicines.page.html',
  styleUrls: ['./my-medicines.page.scss'],
})
export class MyMedicinesPage implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  ngOnInit() {
  }

}

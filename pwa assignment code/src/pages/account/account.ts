import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
 import { CommonProvider } from '../../providers/common/common';
import { HomePage } from '../../pages/home/home';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
logindata:any;
filmdata:any;
filmtime:any;
username:any;
filmname:any;
seats:any;
screen:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController,public cs: CommonProvider) {
  }

  ionViewDidLoad() {
  }
  cancelBooking(i){
    this.cs.masterData.bookings.splice( this.cs.masterData.bookings.indexOf(i), 1);
    this.cs.setMasterData();
  }
}


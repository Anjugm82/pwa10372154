import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';
import { ToastController } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';


@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  form: any = {};
  constructor(public navCtrl: NavController, public toastCtrl: ToastController,
    public navParams: NavParams, public cs: CommonProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }
  message(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      showCloseButton: true,
      closeButtonText: 'Ok'

    });
    toast.present();
  }
  validate() {
    if (!this.form.mobile) {
      this.message('Plz Enter Your Mobile Number');
    } else if (this.form.mobile.length != 10) {
      this.message('Plz Enter 10 digit Mobile No.');
    } else if (!this.form.name) {
      this.message('Plz Enter Your Name');
    }
    // else if (!this.form.password) {
    //  this.message('Plz Enter Your Password');
    // }
    else {
      this.book();
    }
  }
  reset() {
    this.form.name = '';
    this.form.mobile = '';
    this.form.email = '';
    this.form.password = '';

  }
  // registration(){
  // this.cs.setuserdata(this.form);
  // this.reset();
  // this.message('you registered Sucessfully');
  // this.navCtrl.push(LoginPage);
  // }


  book() {
  
    var data = {
      user: this.form,
      movie: this.cs.selectedMovie,
      day: this.cs.selectedDay,
      time: this.cs.selectedTime,
      seats:this.cs.selectedSeats
    }

    this.cs.masterData.bookings.push(data);
    this.cs.setMasterData();
    this.cs.selectedSeats=[];
    this.navCtrl.push(TabsPage);
    this.message(" Booked Sucessfully");

  
  }
}

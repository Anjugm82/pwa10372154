import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { AlertController } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';
import { ToastController } from 'ionic-angular';
import { RegistrationPage } from '../../pages/registration/registration';
import { ModalController } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'page-seat',
  templateUrl: 'seat.html',
})
export class SeatPage {
  filmdata: any;
  screen: any;
  dayname: any;
  seats = [];
  index = [];
  num: any;
  d = 'white';
  f = 'green';
  film: any;
  selectedIndex: any;
  booked_seats = [];
  imageUrl: string = 'assets/imgs/seat.png';
  imageUrl_1: string = 'assets/imgs/seat(2).png';
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public toastCtrl: ToastController, public cs: CommonProvider, public navParams: NavParams) {
    //   this.screen=navParams.get('id');
    //   this.dayname=navParams.get('name');
    // this.film=this.screen.Name;

  }

  ionViewDidLoad() {
    this.cs.selectedSeats=[]
    if(this.cs.masterData.bookings){
      console.log(this.cs.masterData.bookings);
      this.cs.masterData.bookings.forEach(row => {
          if(row.movie.title==this.cs.selectedMovie.title && row.time==this.cs.selectedTime && row.day==this.cs.selectedDay){
            console.log(row.seats)
            row.seats.forEach(seat => {
              this.booked_seats.push(seat);
            });
          }
      });
    }
    for (var i = 0; i < 36; i++) {
      console.log(this.booked_seats.indexOf(i+1));
      if (this.booked_seats.indexOf(i+1)>-1) {
        this.seats.push(2);
      } else {
        this.seats.push(1);
      }

    }
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
  selectedchair(i, status) {
    if (status) {
      this.seats[i] = 3;
      this.cs.selectedSeats.push(i+1);
    } else {
      this.seats[i] = 1;
      this.cs.selectedSeats.splice(this.cs.selectedSeats.indexOf(i+1), 1);
    }
 
  }

  checklogin() {
    if (this.cs.selectedSeats.length == 0) {
      this.message('Please Select Seat');
    } else {
        this.openlogin();
 
    }
  }

  openlogin() {
    var key = 1;
    let modal = this.modalCtrl.create(RegistrationPage, {
      data: key
    });
    modal.present();
  }

}

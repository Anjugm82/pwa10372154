import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { SeatPage } from '../../pages/seat/seat';

import { CommonProvider } from '../../providers/common/common';

@Component({
  selector: 'page-timing',
  templateUrl: 'timing.html',
})
export class TimingPage {
  movie: any;

  day: any;
  constructor(public navCtrl: NavController, public cs: CommonProvider, public navParams: NavParams, public loadingCtrl: LoadingController) {
    this.movie = navParams.get('data');
  }

  ionViewDidLoad() {
    var days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    var d = new Date();
    this.day = days[d.getDay()];
    
  }

  openSeat(movie,day,time) {
    this.cs.selectedMovie=movie;
    this.cs.selectedDay=day;
    this.cs.selectedTime=time;
    console.log(this.cs);
    this.navCtrl.push(SeatPage, {
      
    })
  }

  openLoad() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 500
    });
    loader.present();
  }

}

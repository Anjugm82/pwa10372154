import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TimingPage } from '../../pages/timing/timing';
import { CommonProvider } from '../../providers/common/common';
//import { RegistrationPage } from '../../pages/registration/registration';
import { ToastController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userDetails: any;
  screen1 = { "screen": "screen1", "film": "Black Panther", "time1": "11.5 am", "time2": "2.5 pm", "time3": "8.5 pm", "seat": "50" };
  screen2 = { "screen": "screen2", "film": "Ready Player One", "time1": "10.5 pm", "time2": "12.5 pm", "time3": "7.5 pm", "seat": "50" };
  screen3 = { "screen": "screen3", "film": "Pacific Rim Uprising", "time1": "11.5 pm", "time2": "12.5 pm", "time3": "8.5 pm", "seat": "50" };
  movies: any;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public cs: CommonProvider
  ) {

  }
  ionViewDidLoad() {
    this.getMovies();
    console.log( this.cs.masterData);
    
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
  // checkregistration(m){
  //   if(this.userDetails){
  //     this.openTiming(m);
  //   }else{
  //      this.openRegistration();
  //   }
  // }
  // openRegistration(){
  //   this.navCtrl.push(RegistrationPage);
  // }
  openTiming(m) {
    this.navCtrl.push(TimingPage, {
      data: m
    });
  }
  openLogin() {
    this.navCtrl.push(LoginPage);
  }
  openLogOut() {
    localStorage.removeItem("loginData");
    // localStorage.removeItem("filmData");
    //localStorage.removeItem("filmTime");
    this.message("Sucessfully Log Out");
    this.navCtrl.push(HomePage);
  }
  openAccount() {
    this.navCtrl.push(LoginPage);
  }
  getMovies() {
    this.cs.toServer('get', '', '').subscribe(data => {
      this.movies = data;
      this.cs.masterData.movies=data;
      this.cs.setMasterData();
      console.log(this.movies);
    });

  }
}






import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';
import { ToastController } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';
import { RegistrationPage } from '../../pages/registration/registration';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  form: any = {};
  userData: any;
  key: any;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public navParams: NavParams, public cs: CommonProvider) {
    this.key = navParams.get('id');
  }

  ionViewDidLoad() {
    this.userData = this.cs.getuserdata();
    if(!this.userData){
      this.openRegistration();
      
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
  validate() {
    if (!this.form.mobile) {
      this.message('Plz Enter Your Mobile Number');
    } else if (this.form.mobile.length != 10) {
      this.message('Plz Enter 10 digit Mobile No.');
    } else if (!this.form.password) {
      this.message('Plz Enter Your Password');
    } else {
      this.login();
    }
  }
  //  checkmobile(){
  //    console.log("hi");
  //    if(this.form.mobile){
  //   if(this.form.mobile!=this.logindata.mobile){
  //     this.message("Your mobile is not registered");
  //   }
  //   }
  //  }
  login() {
    if (this.form.mobile != this.userData.mobile) {
      this.message("Your mobile is not registered");
    } else {
      if (this.form.mobile == this.userData.mobile && this.form.password == this.userData.password) {
        this.cs.setlogin(this.form);
        this.message("Sucessfully Logged In");
        this.form.mobile = '';
        this.form.password = '';
      } else {
        this.message("Incorrect Login Data");
      }
    }
  }

  openRegistration() {
    this.navCtrl.push(RegistrationPage);
  }
}

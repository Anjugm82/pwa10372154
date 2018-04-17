import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AccountPage } from '../../pages/account/account';

import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab3Root = AccountPage;
  

  constructor(public navCtrl: NavController) {}

}

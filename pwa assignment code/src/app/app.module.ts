import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';
import { TabsPage } from '../pages/tabs/tabs';

import { CommonProvider } from '../providers/common/common';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TimingPage } from '../pages/timing/timing';
import { SeatPage } from '../pages/seat/seat';
import { RegistrationPage } from '../pages/registration/registration';
import { LoginPage } from '../pages/login/login';
import { AccountPage } from '../pages/account/account';

@NgModule({
  declarations: [
    MyApp,TabsPage,
    HomePage,TimingPage,SeatPage,RegistrationPage,LoginPage,AccountPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),  HttpModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,TabsPage,
    HomePage,TimingPage,SeatPage,RegistrationPage,LoginPage,AccountPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
        CommonProvider

  ]
})
export class AppModule {}

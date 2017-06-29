import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { UserDataProvider } from '../providers/user-data/user-data';
import { SettingDataProvider } from '../providers/setting-data/setting-data';
import { CalorieDataProvider } from '../providers/calorie-data/calorie-data';
import { FitnessModel } from '../models/fitness-model';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
        name: '__finalfit',
         driverOrder: ['sqlite','indexeddb', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserDataProvider,
    SettingDataProvider,
    CalorieDataProvider,
    FitnessModel,
  ]
})
export class AppModule {}

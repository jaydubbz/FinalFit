import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  public userData = {
      'age':  36,
      'weight': 190,
      'height': 69
    };

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  // DISPLAY AGE MODAL
  displayAgeModal(){
      let alert = this.alertCtrl.create({
      title: 'Enter your age',
      inputs: [
        {
          name: 'age',
          placeholder: 'AGE'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            
          }
        },
        {
          text: 'Ok',
          handler: data => {
            this.userData.age = data.age;
          }
        }
      ]
    });
    alert.present();
  }

  // DISPLAY WEIGHT MODAL
  displayWeightModal(){
      let alert = this.alertCtrl.create({
      title: 'Enter your weight',
      inputs: [
        {
          name: 'weight',
          placeholder: 'WEIGHT IN LBS'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            
          }
        },
        {
          text: 'Ok',
          handler: data => {
            this.userData.weight = data.weight;
          }
        }
      ]
    });
    alert.present();  
  }

  // DISPLAY SETTINGS MODAL
  displayHeightModal(){
      
      let alert = this.alertCtrl.create({
      title: 'Enter your height',
      inputs: [
        {
          name: 'height',
          placeholder: 'HEIGHT INCHES',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            
          }
        },
        {
          text: 'Ok',
          handler: data => {
            this.userData.height = data.height;
          }
        }
      ]
    });
    alert.present();  
  }

} // EOF

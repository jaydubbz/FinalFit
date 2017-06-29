import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { SettingDataProvider } from '../../providers/setting-data/setting-data';
import { FitnessModel } from '../../models/fitness-model';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  userData: any = {};

  // ERRORS & WARNINGS
  cLimitLow = false;

  constructor(public navCtrl: NavController, public settingData: SettingDataProvider, 
    public alertCtrl: AlertController, public fitModel: FitnessModel) {
    
  }

  ionViewDidLoad() {
    this.userData = this.settingData.get();  
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
            if( data.age ){
              this.userData.age = data.age;
              this.setCalories();
            }
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
            if( data.weight ){
              this.userData.weight = data.weight;
              this.setCalories();
            }
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
            if( data.height ){
              this.userData.height = data.height;
              this.setCalories();
            }
          }
        }
      ]
    });
    alert.present();  
  }

  // DISPLAY CALORIE LIMIT MODAL
  displayCalorieLimitModal(){
      let alert = this.alertCtrl.create({
      title: 'Set your calorie limits',
      inputs: [
        {
          name: 'daily',
          placeholder: 'Daily Limits',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Ok',
          handler: data => {
            if( data.daily ){
              this.userData.dailyLimit = data.daily;

              if( data.daily <= 1000 ){
                this.cLimitLow = true;
              } else {
                this.cLimitLow = false;
              }

              // UPDATE WEEKLY CALORIES
              // BASED ON USER DAILY CALORIE INPUT
              let wkCal = (7*data.daily);

              this.userData.weeklyLimit = wkCal;
              }
            
          }
        }
      ]
    });
    alert.present();
  }

  // DISPLAY GENDER MODAL
  displayGenderModal(){
      let alert = this.alertCtrl.create({
      title: 'What is your gender?',
      inputs: [
        {
          type: 'radio',
          value: 'Male',
          label: 'Male',
        },
        {
          type: 'radio',
          value: 'Female',
          label: 'Female',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Ok',
          handler: data => {
            if(data){
              this.userData.gender = data;

              this.setCalories();
            }
          }
        }
      ]
    });
    alert.present();
  }

    // DISPLAY GOAL MODAL
  displayGoalModal(){
      let alert = this.alertCtrl.create({
      title: 'What is your goal?',
      inputs: [
        {
          type: 'radio',
          value: 'lose',
          label: 'Lose Weight',
        },
        {
          type: 'radio',
          value: 'maintain',
          label: 'Maintain',
        },
        {
          type: 'radio',
          value: 'bulk',
          label: 'Bulk',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Ok',
          handler: data => {
            if(data){
              this.userData.goal = data;

              this.setCalories();
            }
          }
        }
      ]
    });
    alert.present();
  }

  setCalories(): void {
    var age;
    var height;
    var weight;
    var gender;
    var goal;

    if(this.userData.age){
      age = this.userData.age;
    } 
    
    if(this.userData.height){
      height = this.userData.height;
    } 
    
    if(this.userData.weight){
      weight = this.userData.weight;
    } 
    
    if(this.userData.gender){
      gender = this.userData.gender;
    }

    if( this.userData.goal ){
      goal = this.userData.goal;
    }

    if( gender ){
      gender = this.userData.gender;
    }

    
     if( gender == 'Male'){
        this.userData.dailyLimit = this.fitModel.getMaleCalories(height, age, weight, goal);
      } else {
        this.userData.dailyLimit = this.fitModel.getFemaleCalories(height, age, weight, goal);
      }

      this.userData.weeklyLimit = this.userData.dailyLimit * 7;
    
  }


  save(){
    this.settingData.save(this.userData);
    this.navCtrl.pop();
  }

} // EOF

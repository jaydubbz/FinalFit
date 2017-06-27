import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }


  // DISPLAY SETTINGS PAGE
  displaySettings(){
    this.navCtrl.push("SettingsPage");
  }

  // DISPLAY EXERCISE LIST
  displayExerciseList(){
    this.navCtrl.push("ExerciseListPage");
  }

  // DISPLAY Food List
  displayFoodList(){
    this.navCtrl.push("FoodListPage");
  }


} // EOF

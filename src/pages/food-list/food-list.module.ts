import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodListPage } from './food-list';

@NgModule({
  declarations: [
    FoodListPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodListPage),
  ],
  exports: [
    FoodListPage
  ]
})
export class FoodListPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExerciseListPage } from './exercise-list';

@NgModule({
  declarations: [
    ExerciseListPage,
  ],
  imports: [
    IonicPageModule.forChild(ExerciseListPage),
  ],
  exports: [
    ExerciseListPage
  ]
})
export class ExerciseListPageModule {}

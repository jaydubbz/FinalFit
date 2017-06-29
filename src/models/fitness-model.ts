
export class FitnessModel {

  constructor() {}


  // CONVERT HEIGHT (IN TO CM)
  inchesToCM(inches): any{
    return (inches * 2.54);
  }

  // CONVERT HEIGHT (CM TO IN)
  cmToInches(cm): any{
    return (cm * 0.39);
  }

  // CONVERT WEIGHT (LBS TO KG)
  lbsToKG(lbs): any {
    return Math.floor(lbs * 0.45359237);
  }

  // CONVERT WEIGHT (KG TO LBS)
  kgToLBS(kg): any {
    return Math.floor(kg / 0.45359237);
  }

  // GET CALORIES (FEMALE)
  getFemaleCalories(inches, age, lbs, goal): any {
    var bmr = Math.floor((4.7 * inches) + (4.35 * lbs) - (4.7 * age) + 655);
    var bmr = bmr * 1.25;
    var calories;

    if( goal == 'lose' ){
      calories = bmr - 800;
    }
    else if ( goal == 'bulk'){
      calories = bmr + 500;
    } else {
      calories = bmr;
    }

    return Math.floor(calories);
  }

  // GET CALORIES (MALE)
  getMaleCalories(inches, age, lbs, goal): any {
    var bmr = Math.floor((12.7 * inches) + (6.23 * lbs) - (6.8 * age) + 66);
    var bmr = bmr * 1.25;
    var calories;

    if( goal == 'lose' ){
      calories = bmr - 800;
    }
    else if ( goal == 'bulk'){
      calories = bmr + 500;
    } else {
      calories = bmr;
    }

    return Math.floor(calories);
  }

} // EOF

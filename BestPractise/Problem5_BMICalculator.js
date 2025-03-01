

function bmiCalculator(weight,height){
    let bmi = weight/(height*height);
    if(height <= 0 || weight<0){
        console.log("Invalid input, height cannot be zero.")
    }else{
        console.log("Your BMI is: ",bmi)
    }

}

bmiCalculator(-70,1.75)
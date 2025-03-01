

function simpleInterestCal(p,r,t){

    let simpleInterest = (p*r*t)/100;

    if(p <0 || r<0|| t<0){
        console.log("Invalid input, all values must be non-negative")
    }else{

        console.log("The simple interest is: "+ simpleInterest)

    }
}

simpleInterestCal(1000,5,3);
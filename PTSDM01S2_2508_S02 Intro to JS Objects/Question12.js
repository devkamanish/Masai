

// Title: L0 - Find Largest of Three Numbers Using Ternary Operator

// Problem Statement: Create a program that takes three numbers as input and determines the largest number using nested ternary operators. You must solve this problem using only ternary logic without using the Math.max() function.


function largest(num1, num2, num3){
    num1>num2 && num1>num3 ? console.log(num1+ " (The largest number)"): num2>num1 && num2>num3 ? console.log(num2+ " (The largest number"): num3>num1 && num3>num2? console.log(num3+ " (The largest number)"): console.log("All are same")
 }

 largest(1,1,1);


 

// **Title:**L1-Pattern Printing III

// **Problem Statement:**You are given a number stored in a variable with the name N You have to print the pattern as shown below according to the value stored in N For example, consider the value stored in N = 5, then the required pattern will be.

// * * * * *

// *

// *

// *

// * * * * *



function printPatter(num){
    for(let i=0;i<num;i++){
      let row = "";
      for(let j=0;j<num;j++){
        if(i===0 || i===num-1 || j===0){
          row += "*"+ " ";
        }else {
          row += "  ";
        }
      }
      console.log(row)
    }
  }
  
  
  printPatter(5)


  
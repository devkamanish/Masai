// Problem Statement: Given a square matrix, you have to find the reverse U traversal of the matrix. Refer the sample I/O for better understanding. Refer the given figure for better understanding.



let arr =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
    ]
    
    for(let i=0;i<arr.length;i++){
      
     for(let j=0;j<arr[i].length;j++){
      if(i === 0 || j === 0|| i === arr.length-1 || j === arr[i].length-1){
        console.log(arr[i][j])
      }
      }
    }
    
    
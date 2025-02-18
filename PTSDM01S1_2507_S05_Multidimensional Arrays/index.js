console.log("Masai");

// Problem Statement: Given a matrixwith N rows and M columns. Print the matrix elements starting from the top right corner and follow a zig-zag pattern.

function zigZagTraversal(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let result = [];
    
    let direction = -1; 
    for (let i = 0; i < rows; i++) {
        if (direction === -1) {
            for (let j = cols - 1; j >= 0; j--) {
                result.push(matrix[i][j]);
            }
        } else {
            
            for (let j = 0; j < cols; j++) {
                result.push(matrix[i][j]);
            }
        }
        direction *= -1;
    }
    
    console.log(result.join(" "));
}

let matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 1],
    [3, 2, 5, 4, 6],
    [7, 8, 9, 1, 2]
];

zigZagTraversal(matrix);

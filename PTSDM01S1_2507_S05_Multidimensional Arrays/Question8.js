// Title: L0-Your first 2D Array Problem

// Problem Statement: You are given a 2D array, whose dimensions are stored in two variables with the name N and M

// The value stored in N denotes the number of rows, and the value in M denotes the number of columns

// The 2D array is stored in a variable with the name arr

// You have to print the elements of the 2D array, row by row


function print2DArray(N, M, arr) {
    for (let i = 0; i < N; i++) {
        console.log(arr[i].join(" "));
    }
}

const N = 3, M = 2;
const arr = [
    [1, 2],
    [3, 4],
    [5, 6]
];

print2DArray(N, M, arr);
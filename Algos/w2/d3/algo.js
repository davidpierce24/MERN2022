//Diagonal Difference
//Given a squared matrix (2D array) of integers, calculate the absolute difference between the sum of the diagonals (top left to bottom right and top right to bottom left)
// const squareMatrix1 = [
//  [1, 2, 3],
//  [4, 5, 6],
//  [9, 8, 9],
//];
//const expected1 = 2;
//left to right diagonal: 1 + 5 + 9 = 15
//right to left diagonal: 3 + 5 + 9 = 17
//absolute difference = 2
//const squareMatrix2 = [
//  [1, 2, 3, 4, 5],
//  [1, 2, 3, 4, 5],
//  [1, 2, 3, 4, 5],
//  [1, 2, 3, 4, 5],
//  [1, 2, 3, 4, 5],
//];
//const expected2 = 0; 
//left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
//right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
//absolute difference = 0

function diagnonalDifference(arr) {
    let left = 0;
    let right = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            if(i == j){
                left += arr[i][j];
            }
            if(j == arr[i].length-1-i){
                right += arr[i][j];
            }
        }
    }
    let temp = Math.abs(left - right)
    return temp
}

// function diagonalDiff (matrix) {
//     let size = matrix.length;

//     let lTR = 0;
//     let rTL = 0;

//     for (let i = 0; i < size; i++) {
//         lTR += matrix[i][i];
//         rTL += matrix[i][size-1-i]
//     }

//     console.log("Left to Right: " + lTR);
//     console.log("Right to Left: " + rTL);

//     let difference = Math.abs(lTR - rTL);
//     console.log("Absolute difference: " + difference);

//     return difference;
// }

// function diagnonalDifference(arr) {
//     let left = 0;
//     let right = 0;
//     let i = 0;
//     let j = 0;

//     while(i<arr.length){
//         while(j<arr[i].length){
//             if(i == j){
//                 left += arr[i][j];
//                 console.log("this is L" + left)
//             }
//             if(j == arr[i].length-1-i){
//                 right += arr[i][j];
//                 console.log("this is R" + right)
//             }
//             j++
//         }
//         i++
//     }

//     let temp = Math.abs(left - right)
//     return temp
// }



console.log(diagnonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
    ]))

console.log(diagnonalDifference([
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
]))
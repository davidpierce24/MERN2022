// Symmetric Difference
// Given two arrays of integers, return an array of all the numbers the arrays do NOT have in common
// The arrays may or may not be in order
// If there are duplicates of values that are in one array and not the other, only include the value once
// Ex: given [1,2] and [2,1,3] return [3]
// Ex: given [1,1] and [1] return []
// Ex: given [1,2,3] and [4,5,6] return [1,2,3,4,5,6]
// Ex: given [4,1,2,3,4] and [1,2,3,5,5] return [4,5]

// function symDif(arr1, arr2) {
//     let temp = [];
//     for(let i of arr1){
//         if(!arr2.includes(i)){
//             if(!temp.includes(i))
//             temp.push(i)
//         }
//     }
//     for(let j of arr2){
//         if(!arr1.includes(j)){
//             if(!temp.includes(j))
//             temp.push(j)
//         }
//     }
    
//     return temp;
// }


function symDif(arr1, arr2) {
    let temp = [];
    let map = {};
    let map2 = {};
    for(let i of arr1) {
        if(!(i in map)){
            map[i] = 1
        } 
    }
    for(let j of arr2) {
        if(!(j in map2)){
            map[j] = 1
        } 
    }
    for(let k in map){
        if(!(k)){
            temp.push(k)
        }
    }
    console.log(map)
    return temp;
}

console.log(symDif([4,1,2,3,4],[1,2,3,5,5] ))


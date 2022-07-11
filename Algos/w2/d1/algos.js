//Ordered Intersection
//Given two arrays of sorted numbers, return a new array that contains only the numbers that are in both arrays - do NOT count duplicates
//Ex: given [1,2,2,3,4,5] and [2,4,6,7,8] return [2,4]
//Ex: given [1,1,1,2,3,4] and [1,1,3,4,5] return [1,3,4]

function orderedIntersection(arr1, arr2) {
    let temp = [];
    for(let i=0, j=0; i<arr1.length, j<arr2.length; i++, j++){
        
    }
    return temp;
}

// function orderedIntersection(arr1, arr2) {
//     let temp = [];
//     for(let i=0; i<arr1.length; i++){
//         for (let j = 0; j<arr2.length; j++){
//             if(arr2[j] > arr1[i]){
//                 break;
//             }
//             if(arr1[i] === arr2[j]){
//                 if(!temp.includes(arr1[i])){
//                     temp.push(arr1[i])
//                 }
//             }
//         }
//     }
//     return temp;
// }


function unorderedIntersection(arr1, arr2) {
    let temp = [];
    for(let i=0; i<arr1.length; i++){
        for (let j = 0; j<arr2.length; j++){
            if(arr1[i] === arr2[j]){
                if(!temp.includes(arr1[i])){
                    temp.push(arr1[i])
                }
            }
        }
    }
    return temp;
}


console.log(orderedIntersection([1,2,2,3,4,5],[2,4,6,7,8]))
console.log(orderedIntersection([1,1,1,2,3,4],[1,1,3,4,5]))

// function arr() {
//     let temp =[];
//     for(let )
// }
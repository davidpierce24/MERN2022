//Union Sorted Arrays
//Efficiently combine two already-sorted multiset arrays into a new sorted array containing the multiset union.
//Unions by default will take the set of duplicates that has the highest occurrences from one array. (ex, if one array has three 2's and another has two 2's then the result will have three 2's)
//Examples:
//const nums1A = [1, 2, 2, 2, 7];
//const nums1B = [2, 2, 6, 6, 7];
//const expected1 = [1, 2, 2, 2, 6, 6, 7];

//const nums2A = [1, 1, 2, 2, 2, 3, 7, 10, 20, 30];
//const nums2B = [2, 6, 6, 7];
//const expected2 = [1, 1, 2, 2, 2, 3, 6, 6, 7, 10, 20, 30];

function unionSort(arr1, arr2) {
    let temp = [];
    let i=0;
    let j=0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            temp.push(arr1[i])
            i++
        }
        if(arr1[i] > arr2[j]){
            temp.push(arr2[j])
            j++
        }
        if(arr1[i] == arr2[j]){
            temp.push(arr1[i])
            j++
            i++
        }
    }
    for(let z=i; z<arr1.length; z++){
        temp.push(arr1[z])
    }
    for(let z=j; z<arr2.length; z++){
        temp.push(arr2[z])
    }
    return temp;
}



console.log(unionSort([1, 2, 2, 2, 7],[2, 2, 6, 6, 7]))
console.log(unionSort([1, 1, 2, 2, 2, 3, 7, 10, 20, 30],[2, 6, 6, 7]))
console.log(unionSort([2, 6, 6, 7],[1, 1, 2, 2, 2, 3, 7, 10, 20, 30]))
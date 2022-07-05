//Bubble Sort
//Given an array of numbers, sort the numbers by swapping adjacent values that are in the wrong order
function BubbleSort(arr) {
    for(let t=arr.length-1; t>=0; t--){
        for (let i = 0, j = 1; i < arr.length-1, j < arr.length; i++, j++){
            if(arr[i] > arr[j]){
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
    return arr
}

// console.log(BubbleSort([5,9,2,7,6]))


//Selection Sort
//Given an array of numbers, sort the numbers by finding the smallest number in the array and moving it to the beginning. Then iterate through everything except the first number, which is now sorted, and find the next smallest value and move it to index 1. Keep doing this until all values are sorted. 
function SelectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let small = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[small]){
                small = j
            }
        }
        temp = arr[i]
        arr[i] = arr[small]
        arr[small] = temp
    }
    return arr
}

console.log(SelectionSort([5,9,2,5,7,6]))
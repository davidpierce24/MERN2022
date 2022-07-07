function partition(arr, piv) {
    let i = 0;
    let j = arr.length-1;
    let running = 0;
    while(running < arr.length){
        let back
        let front
        while(i <= piv){
            if(arr[i] >= arr[piv]){
                front = i
                break
            }
            i++
        }
        
        while(j >= piv){
            if(arr[j] <= arr[piv]){
                back = j
                break
            }
            j--
        }

        let temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp

        running ++

    }
    
    return arr;
}


console.log(partition([7,9,1,6,2,10,8,4,3], 3))
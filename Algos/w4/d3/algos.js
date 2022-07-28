// Given two strings, return true if the first string can be built from the letters in the 2nd string

const strA1 = "hello world";
const strB1 = "lloeh wordl";
const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
const expected5 = false;
// Explanation: strB5 does not have enough "l" chars.

function twostr(str1, str2){
    if(str2.length < str1.length){
        return false
    }
    let arr1 = str1.toLowerCase().split("");
    let arr2 = str2.toLowerCase().split("");
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arr2[j] == arr1[i]){
                arr2.splice(j,1)
                arr1.splice(i,1)
                i--
                break
            }
        }
    }
    return arr1.length == 0
}

console.log(twostr(strA1, strB1))
console.log(twostr(strA2, strB2))
console.log(twostr(strA3, strB3))
console.log(twostr(strA4, strB4))
console.log(twostr(strA5, strB5))

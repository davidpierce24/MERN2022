// Given a string, find the length of the longest substring of non-repeating characters
// A substring is an unbroken sequence of letters within a larger string

const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew";
const expected3 = 3;
// Explanation: The answer is "wke", with the length of 3

const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"


function subStr(str) {
    let result = '';
    for(let j in str){
        let map = {};
        let temp = '';
        for(let i = j; i < str.length; i++){
            if(str[i] in map){
                break
            } else {
                map[str[i]] = 1;
                temp += str[i];
            }
            if(temp.length > result.length){
                result = temp;
            }
        }
    }
    return result.length;
}

console.log(subStr(str1));
console.log(subStr(str2));
console.log(subStr(str3));
console.log(subStr(str4));
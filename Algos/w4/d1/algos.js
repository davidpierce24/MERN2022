// Can string become a palindrome
// Given a string, return true or false whether the letters provided could become a palindrome (they do not already have to be one, they just need the potential to become one)
// Think carefully here about what the rules are for something being a palindrome and see if you can use those rules to create an efficient method!

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

function isPal (str) {
    if(str.length == 0){
        return false
    }
    if(str.length == 1){
        return true
    }
    let map = {}
    for(let i in str){
        console.log(str[i])
        if(str[i] in map) {
            map[str[i]] += 1;
        } else {
            map[str[i]] = 1;
        }
    }
    console.log(map)
    if(str.length%2 == 0){
        for(let j in map){
            if(map[j]%2 != 0){
                return false
            }
        }
        return true
    } else {
        let count = 0
        for(let k in map){
            if(map[k]%2 != 0){
                count ++
            }
            if(count > 1){
                return false;
            }
        }
        return true
    }
}

console.log(isPal("addadc"))
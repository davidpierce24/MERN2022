const encode = (str) => {
    let table = {};

    for (let i = 0; i < str.length; i++) {
        if (!table[str[i]]) {
            table[str[i]] = 1;
        } else {
            table[str[i]]++;
        }
    }

    let answer = "";

    for (var char in table) {
        answer += char + table[char];
    }

    if (answer.length >= str.length){
        return str;
    }

    return answer;
}

const decode = (str) => {
    let lastChar;
    let answer = "";
    
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])){
            lastChar = str[i];
        } else {
            let numStr = str[i];
            let j = i + 1;

            while (!isNaN(str[j])) {
                numStr += str[j];
                j++;
            }

            i = j - 1;

            for (let k = 0; k < parseInt(numStr); k++) {
                answer += lastChar;
            }
        }
    }

    return answer;
}
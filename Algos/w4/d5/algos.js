function binaryToDecimal(binary){
    let sum = 0;
    let j = 0;

    for (let i = binary.length - 1; i >= 0; i--){
        // i >= 2 if "0b" at the start of the binary string

        if (binary[i] == "1"){
            sum += (2 ** j);
        }

        j++;
    }

    return sum;
}

function decimalToBinary(dec){
    let j = 0;

    while ((2 ** j) <= dec){
        j++;
    }

    j--;

    let answer = "0b";
    let workingDec = dec;

    while (j >= 0){
        if (workingDec >= (2 ** j)){
            answer += "1";
            workingDec -= (2 ** j);
        } else {
            answer += "0";
        }

        j--;
    }

    return answer;
}
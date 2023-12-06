/**
 * @param {number} number
 * @return {number}
 */

var sumInf = function(number) {
    result = 0

    for(num = 1; num < number;num++) {

        if(num % 3 === 0)
            result += num
        if(num % 5 === 0)
            result += num

    }

    return result
}

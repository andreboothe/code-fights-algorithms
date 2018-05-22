// Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).

// Example

// For inputString = "crazy", the output should be
// alphabeticShift(inputString) = "dsbaz".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// Non-empty string consisting of lowercase English characters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 1000.

// [output] string

// The result string after replacing all of its characters.

function alphabeticShift(inputString) {
    inputString = inputString.split('');
    function shift(ch){
        if(ch.charCodeAt(0) != 122) return String.fromCharCode(ch.charCodeAt(0) + 1);
        else return 'a';
    }
    return inputString.map( ch => shift(ch)).join('');
}
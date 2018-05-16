/*--
Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
palindromeRearranging(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.

Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 50.

[output] boolean

true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.
--*/

function palindromeRearranging(inputString) {
   
    let counter = 0;
    let filtered = [];
    inputString = inputString.split('');
    
    let result = true;
    inputString.forEach( e => {
        
        if(!filtered.includes(e)){
           let arr = inputString.filter(char => e == char);
           filtered.push(e);
           if(arr.length % 2 != 0){
               counter++;
               if(counter > 1){
                  result = false;
               }
          }
       }
        
    });
    return result;
}

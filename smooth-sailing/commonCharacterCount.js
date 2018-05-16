/*--
Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".

Input/Output

[execution time limit] 4 seconds (js)

[input] string s1

A string consisting of lowercase latin letters a-z.

Guaranteed constraints:
1 ≤ s1.length ≤ 15.

[input] string s2

A string consisting of lowercase latin letters a-z.

Guaranteed constraints:
1 ≤ s2.length ≤ 15.

[output] integer
--*/
function commonCharacterCount(s1, s2) {
	s1 = s1.split('');
    s2 = s2.split('');
    let counter = 0;
    s1.map(function(e){
        let index = s2.indexOf(e);
        if(index >= 0){
            counter++;
            s2.splice(index,1);
        }
    })
    return counter;
}

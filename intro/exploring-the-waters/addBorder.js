/*--
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
Input/Output

[execution time limit] 4 seconds (js)

[input] array.string picture

A non-empty array of non-empty equal-length strings.

Guaranteed constraints:
1 ≤ picture.length ≤ 100,
1 ≤ picture[i].length ≤ 100.

[output] array.string

The same matrix of characters, framed with a border of asterisks of width 1.
--*/

function addBorder(picture) {
    const maxLength = picture.reduce((acc,cVal) => (acc < cVal.length)?acc = cVal.length: acc,0);
    
    let border = "";
    for(let i = 0; i < maxLength;i++){ border+="*"; }
    picture.push(border);
    picture.unshift(border);
    return picture.map(e => e = "*" + e + "*");
}

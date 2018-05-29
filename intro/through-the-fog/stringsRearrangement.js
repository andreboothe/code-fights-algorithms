// Given an array of equal-length strings, 
// check if it is possible to rearrange the strings in such a way that after the rearrangement the strings at consecutive positions would differ by exactly one character.

// Example

// For inputArray = ["aba", "bbb", "bab"], the output should be
// stringsRearrangement(inputArray) = false;

// All rearrangements don't satisfy the description condition.

// For inputArray = ["ab", "bb", "aa"], the output should be
// stringsRearrangement(inputArray) = true.

// Strings can be rearranged in the following way: "aa", "ab", "bb".
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.string inputArray

// A non-empty array of strings of lowercase letters.

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 10,
// 1 ≤ inputArray[i].length ≤ 15.

// [output] boolean

function stringsRearrangement(inputArray) {
    
    const difference = (a,b) => {
        a  = a.split('');
        b  = b.split('');
        
        return a.reduce((acc,cval,index) => {
                    if(cval !== b[index]) acc++;
                    return acc;
                },0);
    }
    
    const calcDescrepancies = (arr) => {
        let acc = 0;
        for(let i = 0; i < inputArray.length - 1; i++){
            let curr = inputArray[i];
            let next = inputArray[i+1];
            if(difference(curr,next) !== 1) acc++; 
        }
        return acc;
    }
   
   const swap =  (array, pos1, pos2) => {
      var temp = array[pos1];
      array[pos1] = array[pos2];
      array[pos2] = temp;
    };

    const heapsPermute = (array, output, n) => {
      n = n || array.length; // set n default to array.length
      if (n === 1) {
        output(array);
      } 
    else {
        for (let i = 1; i <= n; i += 1) {
            heapsPermute(array, output, n - 1);
            
            let j = 0;
            if (n % 2) {
                j = 1;
            } 
            else {
                j = i;
            }
            swap(array, j - 1, n - 1); // -1 to account for javascript zero-indexing
        }
      }
    };
    
    let descrepancy = calcDescrepancies(inputArray);
    if(descrepancy == 0) return true;
    
    heapsPermute(inputArray, (permutation) =>{
        if(calcDescrepancies(permutation) == 0){
                descrepancy = 0;
                return true;
        }
    });
    
    return (descrepancy == 0)? true: false;
}
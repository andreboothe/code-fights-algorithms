/*
Given a sequence of integers as an array,
determine whether it is possible to obtain a strictly increasing sequence
 by removing no more than one element from the array.

Example

For sequence = [1, 3, 2, 1], the output should be
almostIncreasingSequence(sequence) = false;

There is no one element in this array that can be removed
in order to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be
almostIncreasingSequence(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2].
Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].
*/

function almostIncreasingSequence(sequence) {

    var arr = sequence;
    loop:
    for(var i = 0; i < sequence.length -1; i++){
        if(sequence[i+1] - sequence[i] <= 0){

            if(i == 0 || sequence[i+1] - sequence[i-1] > 0){
               arr.splice(i, 1);
               break loop;
            }
            else {
                arr.splice(i+1, 1);
                break loop;
            }
        }
    }

    for(var i = 0; i < arr.length -1; i++){
        if(arr[i+1] - arr[i] <= 0){
           return false;
        }
    }
    return true;
}

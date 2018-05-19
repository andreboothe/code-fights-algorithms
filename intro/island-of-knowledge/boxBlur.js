/*--
Last night you partied a little too hard. 
Now there's a black and white photo of you that's about to go viral!
 You can't let this ruin your reputation, 
 so you want to apply the box blur algorithm to the photo to hide its content.

The pixels in the input image are represented as integers. 
The algorithm distorts the input image in the following way: 
Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square 
that has its center at x, including x itself. All the pixels on the border of x are then removed.

Return the blurred image as an integer, with the fractions rounded down.

Example

For

image = [[1, 1, 1], 
         [1, 7, 1], 
         [1, 1, 1]]
the output should be boxBlur(image) = [[1]].

To get the value of the middle pixel in the input 3 × 3 square: (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) = 15 / 9 = 1.66666 = 1. The border pixels are cropped from the final result.

For

image = [[7, 4, 0, 1], 
         [5, 6, 2, 2], 
         [6, 10, 7, 8], 
         [1, 4, 2, 0]]
the output should be

boxBlur(image) = [[5, 4], 
                  [4, 4]]
There are four 3 × 3 squares in the input image, so there should be four integers in the blurred output. To get the first value: (7 + 4 + 0 + 5 + 6 + 2 + 6 + 10 + 7) = 47 / 9 = 5.2222 = 5. The other three integers are obtained the same way, then the surrounding integers are cropped from the final result.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.integer image
An image, stored as a rectangular matrix of non-negative integers.

Guaranteed constraints:
3 ≤ image.length ≤ 10,
3 ≤ image[0].length ≤ 10,
0 ≤ image[i][j] ≤ 255.

[output] array.array.integer
A blurred image represented as integers, obtained through the process in the description.
--*/
function boxBlur(image) {
    //return the avg of a matrix rounded down
    function avgMatrix(matrix){
        const numberOfElements = matrix.length * matrix[0].length;
        const reducer = (acc, cval) => {
            cval.forEach(num => acc+= num);
            return acc;
        };
        return Math.floor(matrix.reduce(reducer,0) / numberOfElements);
    }
    
    //return 3x3 sub matrix of a given array based on the row and col value
    function threeByThree(matrix, row, col){
        let result = []; //stores final result
        let r = []; // temporary variable to store an entire row
        for(let i = col; i < col + 3; i++){
            for(let j = row; j < row + 3; j++){
                r.push(matrix[i][j]);
            }
            result.push(r);
            r = [];
        }
        return result;
    }
    
    //return all 3x3 sub matrices of a given matrix
    function allThreeByThree(matrix){
        let result = []; //stores all submatrix
        let submatrix = []; //stores all resulting submatrices of a given row
        for(let col = 0; col < matrix.length - 2; col++){
            for(let row = 0; row < matrix[col].length - 2; row++){
                submatrix.push(threeByThree(matrix,row,col));
            }
            result.push(submatrix);
            submatrix = [];
        }
        return result;
    }
    
    let allSubMatrices = allThreeByThree(image);
    return allSubMatrices.map( row => {
        return row.map( submatrix => {
            return avgMatrix(submatrix);
        });
    });
    
}

/*--
In the popular Minesweeper game you have a board with some mines 
and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. 
Starting off with some arrangement of mines we want to create a Minesweeper game setup.

Example
For
matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]
the output should be

minesweeper(matrix) = [[1, 2, 1],
                       [2, 1, 1],
                       [1, 1, 1]]       
Check out the image below for better understanding:

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.boolean matrix
A non-empty rectangular matrix consisting of boolean values - 
true if the corresponding cell contains a mine, false otherwise.

Guaranteed constraints:
2 ≤ matrix.length ≤ 5,
2 ≤ matrix[0].length ≤ 5.

[output] array.array.integer

Rectangular matrix of the same size as matrix each cell of which contains an integer equal to the number of mines in the neighboring cells. 
Two cells are called neighboring if they share at least one corner.
--*/
function minesweeper(matrix) {
    
    let result = [];
    
    //returns the total number of mines in a given array
    //param: arr - array of boolean values
    function sumMines(arr){
        return arr.filter( mine => mine == true).length;
    }
    
    //returns absolute difference between two numbers
    function difference(a , b) {
        return Math.abs(a - b);
    }
    
    //returns true or false if two cells are adjacent
    //param: cell1 - array of col and row [col,row]
    //       cell2 - array of col and row [col,row]
    function isAdjacent(cell1 , cell2){
        const cell1Col = cell1[0];
        const cell2Col = cell2[0]; 
        const cell1Row = cell1[1]; 
        const cell2Row = cell2[1]; 
        const colDiff = difference(cell1Col,cell2Col);
        const rowDiff = difference(cell1Row,cell2Row);
        
        return  ( colDiff == 1 && cell1Row == cell2Row )? true: 
                ( rowDiff == 1 && cell1Col == cell2Col )? true: 
                ( rowDiff == 1 && colDiff == 1 )? true: false;                      
    }    
    
    //returns all adjacent cells of a given cell
    //param: matrix: the matrix which the cell is found
    //       postion: array with col and row index of a cell eg [col,row] 
    function adjacentCells(matrix, cell){
        
        let result = [];
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[i].length; j++){
                if( isAdjacent([i,j] , cell) ) result.push(matrix[i][j]);
            }
        }
        return result;
    }
    
    for(let i = 0; i < matrix.length; i++){
        let row = [];
        for(let j = 0; j < matrix[i].length; j++){
            row.push(sumMines(adjacentCells(matrix, [i,j])));
        }
        result.push(row);
    }
   return result; 
}

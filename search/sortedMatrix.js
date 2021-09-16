
//You are given a 2d sorted array. Search for an element within the matrix

// O(m+n) - time
// O(1) - space

// Start from the last column of the first row.
// if the value is lesser than target, reduce the col
// else increase the col value
// col  should be gte 0
// row should be lte length of matrix

function searchSortedMatrix(matrix, target) {
    let row = 0;
    let col = matrix[row].length - 1;
    while(col >= 0 && row <= matrix.length) {
        if(matrix[row][col] == target) {
            return [row, col];
        }
        if(matrix[row][col] > target) {
            col--;
        } else if(matrix[row][col] < target) {
            row++
        }
    }
    return [-1,-1];
}

console.log(searchSortedMatrix([
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004]
  ], 44)); // [3,3]
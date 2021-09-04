// Write a function that takes in a non-empty array of integers that are sorted in asc order and return a new array of the 
// same length with the squares of the same number of the original integers also in sorted  in asc order.
//


// O(N log(N)) - time
// O(1) - space - because we are supposed to return a new array
function sortedSquare(array) {

    newArray = array.map(num => num * num);
    newArray.sort((a,b) => a-b)
    return newArray;
}

// O(N) - time
// O(1) - space
// Keep two pointers, one at the start, one at the end.
// As negative elements can be present, numbers on either side be larger as we are dealing with squares
// So, compare the absolute value and whichever is greater, add them to the end of the new array.

function sortedSquareBetter(array) {
    let start = 0;
    let end = array.length - 1;
    let index = array.length - 1;
    const newArray = new Array(array.length).fill(0);
    while(index >= 0) {
        if(Math.abs(array[start]) > array[end]) {
            newArray[index] = array[start] * array[start];
            start++;
        } else {
            newArray[index] = array[end] * array[end];
            end--;
        }
        index--;
    }
    return newArray;
}


console.log(sortedSquare([1,2,3,4,5,6,8,9]))
console.log(sortedSquare([-2,1]))

console.log(sortedSquareBetter([1,2,3,4,5,6,8,9]))
console.log(sortedSquareBetter([-2,1]))
console.log(sortedSquareBetter([-7,-5,-4,3,6,7,8,9]))
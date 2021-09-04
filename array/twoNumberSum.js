// Write a function that takes in a non empty array of distinct integers and an integer representing a target sum.
// if any two numbers in the input aray sum up tp the target sum, the function  should return them in an array , in any order.
// otherwise return empty array


// O(N) - time
// O(N) - space

function twoNumberSum(array, targetSum) {
    const numbers = {};

    for(let i = 0; i < array.length; i++) {
        const val = targetSum - array[i];
        if(numbers[array[i]]) {
            return [array[i], numbers[array[i]]];
        } else {
            numbers[val] = array[i];
        }
    }
    return [];
}


console.log(twoNumberSum([3,5,-4,8,11,,1,-1,6], 10));
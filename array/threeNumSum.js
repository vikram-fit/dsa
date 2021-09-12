// Medium

//Write a function that takes in a non empty array of distinct integers  and an integer representing a target sum
// The function should find all triplets in the array that sum up to the target sum and return a 2d array of all these triplets.
// 


// O(N^3) - time
// O(1) - space

function threeNumSum(array, targetSum) {

    const arrLen = array.length;
    const final = [];

    array.sort((a,b) => a-b);

    for(let i =0; i < arrLen; i++) {
        for(let j = i + 1; j < arrLen; j++) {
            for(let k = j + 1; k < arrLen; k++) {
                if(array[i] + array[j] + array[k] === targetSum) {
                    final.push([array[i], array[j], array[k]].sort((a,b) => a-b))
                }
            }
        }
    }
    return final;
}


// O(N^2) - time
// O(1) - space
function threeNumSumBetter(array, targetSum) {
    array.sort((a,b) => a - b);
    const triplet = [];

    for(let i = 0 ; i < array.length; i++) {
        let left = i + 1;
        let right = array.length - 1;

        while(left < right) {
            if(array[i] + array[left] + array[right] == targetSum) {
                triplet.push([array[i] , array[left] , array[right]].sort((a,b) => a - b));
                left++;
                right--;
            } else if(array[i] + array[left] + array[right] > targetSum) {
                right--;
            } else {
                left++;
            }
        }
    }
    return triplet;
}



// console.log(threeNumSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
// console.log(threeNumSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18));


console.log(threeNumSumBetter([12, 3, 1, 2, -6, 5, -8, 6], 0));
console.log(threeNumSumBetter([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18));
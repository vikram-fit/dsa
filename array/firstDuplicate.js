// Given an array of integers  between 1 and n, inclusive, write a function to return the first integer that appears more than
// once

// O(N) - time
// O(N) - space
function firstDuplicate(array){
    const obj = {};
    let i =0;
    for(i =0; i< array.length; i++) {
        if(obj[array[i]]) break;
        else obj[array[i]] = true;
    }

    return i >= array.length ? -1: array[i];
}

// O(N) - time
// O(1) - space
function firstDuplicateBetter(array) {
    for(let i=0; i < array.length; i++) {
        const num = Math.abs(array[i]);
        if(array[num - 1] < 0) return num;
        array[num - 1]*=-1;
    }
    return -1;
}

console.log(firstDuplicate([2,1,5,2,3,3,4]));
console.log(firstDuplicateBetter([2,1,5,2,3,3,4]));
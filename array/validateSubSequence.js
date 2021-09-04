// Given two arrays of integers, write a function that determines whether the second array  is a subsequence of the first

// O(N) - time
// O(1) - space

function isSubSequence(array, sequence) {
    let arrayCounter = 0;
    let seqCounter = 0;
    let subSeqCounter = 0;

    while(arrayCounter < array.length && seqCounter < sequence.length) {
        if(array[arrayCounter] == sequence[seqCounter]){
            seqCounter++;
            subSeqCounter++;
        };
        arrayCounter++;
    }
    return subSeqCounter == sequence.length;
}



console.log(isSubSequence([5,1,22,25,6,-1,8, 10], [1,6,-1, 10]));
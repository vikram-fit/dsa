//Medium

//Write a function to find the length of the longest peak.
// A peak is adjacent integers that are strictly increasing until they reach a tip and at which point they
// become strictly decreasing.


// O(N) - time
// O(1) - space

// Start at index 1 and compare the adjacent elements to check if it is the peak.
// We keep incrementing the index until we get a peak. (center element is greater than the adjacent ones)
// On finding the peak, we then try to fetch the length of the peak.
// Since we know the adjacent values we jump by 2 places on either side of the currrent element
// If the elements on the left/right are strictly reducing we dec/inc the corresponding counters ensuring they stay on bounds
// we then calculate the length of the peak and keep a track of it, until we find the max value.


function longestPeak(array) {
    let longestPeak = 0;
    let index = 1;
    while(index < array.length - 1) {
        let peak = array[index] > array[index-1] && array[index] > array[index + 1];
        if(!peak) {
            index++;
            continue;
        }

        let leftIndex = index - 2;
        while(leftIndex >= 0 && array[leftIndex] < array[leftIndex + 1]) 
            leftIndex --;

        let rightIndex = index + 2;
        while(rightIndex < array.length && array[rightIndex - 1] > array[rightIndex])
            rightIndex++;

        let peakLength = rightIndex - leftIndex - 1;
        longestPeak = Math.max(longestPeak, peakLength);
        index = rightIndex;
    }
    return longestPeak;
}





console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]));
console.log(longestPeak([]));
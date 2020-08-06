// You're given an unsorted array arr of positive integers and a number s. 
//Your task is to find a contiguous subarray that has a sum equal to s, and return an array containing the two integers that represent its inclusive bounds. 
//If there are several possible answers, return the one with the smallest left bound. If there are no answers, return [-1].

// Your answer should be 1-based, making the first position of the array 1 instead of 0.

// Example

// For s = 21 and arr = [4, 8, 9, 10, 3, 8], the output should be
// findSubarrayBySum(s, arr) = [1, 3].

// The sum of elements from the 1st position to the 3rd position (1-based) is equal to 21: 4 + 8 + 9.

// For s = 15 and arr = [1, 2, 3, 1, 4, 5, 6, 7, 8, 9, 10], the output should be
// findSubarrayBySum(s, arr) = [2, 6].

// The sum of elements from the 2nd position to the 6th position (1-based) is equal to 15: 2 + 3 + 1 + 4 + 5.

function findSubarrayBySum(s, arr) {
    
    if (arr === undefined || arr.length === 0) return 0;
    
    const len = arr.length;
    let sum = arr[0], end = 0, start = 0;
    
    while(end < len) {
        if (s === sum) return [start + 1, end + 1];
        if (s < sum) {
            sum -= arr[start];
            start++;
        }
        if (s > sum) {
            end++;
            sum += arr[end];
        }
    }
    return [-1];
}
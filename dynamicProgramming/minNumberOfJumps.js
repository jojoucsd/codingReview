/*
You're given a non-empty array of positive ints where each int represents the max 
number of steps you can take forward in the array. Ex, if the element at index "1" is 3, 
you can go from index "1" to index "2" , "3", or "4".

Write a function that returns the min numbers of jumps need to reach the final
index.

Note that jumping from index i to index i+x always constitutes one jump, no matter how large x is

Sample Input
array = [3,4,2,1,2,3,7,1,1,1,3]

Sample Output

4 // 3 --> (4 or 2) --> (2 or 3) --> 7 --> 3
*/

// O(n^2) time | O(n space)
minNumberOfJumps = (array) =>{
    const jumps = new Array(array.length).fill(Infinity)
    jumps[0] = 0
    for (let i = 1; i <array.length; i++){
        for (let j = 0; j < i j++){
            if (array[i] >= i-j) {
                jumps[i] = Math.min(jump[j]+1, jumps[i])
            }
        }
    }
    return jumps[jumps.length -1]
}

// O(n) time | O(1) space

minNumberOfJumps1 = (array) =>{
    if (array.length === 1) return 0
    let jumps = 0
    let maxReach = array[0]
    let steps = array[0]
    for (let i = 1; i <array.length -1 ; i++){
        maxReach = Math.max(maxReach, i + array[i])
        step --;
        if (steps === 0){
            jumps++;
            steps = maxReach - i
        }
    }
    return jumps + 1
}
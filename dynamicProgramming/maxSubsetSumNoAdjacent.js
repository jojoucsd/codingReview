/*
Write a function that takes in an array of positive int and returns the max sum of none-adjacent elements 
in the array 

if a sum can't be generate, the function should return 0

Sample Input 

"array": [75, 105, 120, 75, 90, 135]

Output

330 // 75 + 120 + 135
*/

maxSubsetSumNoAdjacent = (arr) =>{
    if (!arr.length) return 0
    if (arr.length === 1) return array[0]

    let second = arr[0]
    let first  = Math.max(arr[0], arr[1])

    for (let i = 2; i < arr.length; i++){
        const current = Math.max(first, second+ arr[i])
        second = first
        frist = current
    }
    return first 
}

maxSubsetSumNoAdjacent1= (array) =>{
    if (!arr.length) return 0
    if (arr.length === 1) return array[0]
    const maxSums = array.slice()
    maxSums[1] = Math.max(array[0] , array[1])
    for (let i = 2; i < array.lenght; i ++) {
        maxSums[i] = Math.max(maxSums[i-1] , maxSums[i-2] + array[i])
    }
    return maxSums[maxSums.length-1]
}
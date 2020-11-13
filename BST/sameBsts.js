/*
An array of integers is said to represent the Binary Search Tree(BST) obtained by inserting each
integer in the array, from left to right, into the BST.

Write a function that takes in two arrays of integers and determines whether these arrays represent
the same BST. Note that you're not allowed to construct any BSTs in your colde.

A BST is a Binary Tree that consists only of BST nodes. A node is said to be a valid BST node 
if and only if it satisfies the BST property: its value is strictly greater than the values of every
node to its left; its value is less than or equal to the values of every node to its right; and
its children nodes are either valid BST nodes themselves or None / null

Sample Input

 arrayOne = [10, 15, 8, 12, 94, 81, 5, 2, 11],
 arrayTwo = [10, 8, 5, 15, 2, 12, 11, 94, 81]

 Sample Output
 true
*/
const arr1 = [10, 15, 8, 12, 94, 81, 5, 2, 11]
const arr2 = [10, 8, 5, 15, 2, 12, 11, 94, 81]

sameBsts = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false ;
    if (arr1.length === 0 && arr2.length ===0) return true;
    if (arr1.length !== arr2.length) return false

    const left1 = getSmaller(arr1)
    const left2 = getSmaller(arr2)
    const right1 = getBiggerOrEqual(arr1)
    const right2 = getBiggerOrEqual(arr2)
    return sameBsts(left1, left2) && sameBsts(right1, right2)
}

getSmaller = (arr) =>{
    const smaller = []
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < arr[0]) {
            smaller.push(arr[i])
        }
    }
    return smaller
}

getBiggerOrEqual = (arr) => {
    const biggerOrEqual = []
    for (let i = 1; i <arr.length ; i++){
        if (arr[i] >= arr[0]){
            biggerOrEqual.push(arr[i])
        }
    }
    return biggerOrEqual
}


sameBsts2 = (arr1, arr2) =>{
    return areSameBsts(arr1, arr2, 0 , 0, -Infinity, Infinity)
}

areSameBsts = (arr1, arr2, rootIdx1, rootIdx2, minVal, maxVal) =>{
    if (rootIdx1 === -1 || rootIdx2 === -1) return rootIdx1 === rootIdx2;
    if (arr1[rootIdx1] !== arr2[rootIdx2]) return false
    
    const leftRootIdx1 = getIdxOfFirstSmaller(arr1, rootIdx1, minVal)
    const leftRootIdx2 = getIdxOfFirstSmaller(arr2, rootIdx2, minVal)
    const rightRootIdx1 = getIdxOfBiggerOrEqual(arr1, rootIdx1, maxVal)
    const rightRootIdx2 = getIdxOfBiggerOrEqual(arr2, rootIdx2, maxVal)

    const currentValue = arr1[rootIdx1]
    const isLeftSame = areSameBsts(arr1, arr2, leftRootIdx1, leftRootIdx2, minVal, currentValue)
    const isRightSame = areSameBsts(arr1, arr2, rightRootIdx1, rightRootIdx2, currentValue, maxVal)
    
    return isLeftSame && isRightSame
}

getIdxOfFirstSmaller = (arr, startingIdx, min) =>{
    for (let i = startingIdx + 1; i < arr.length; i++){
        if (arr[i] < arr[startingIdx] && arr[i] >= min)
            return i
    }
    return -1 
}

getIdxOfBiggerOrEqual = (arr, startingIdx, max) =>{
    for (let i = startingIdx + 1; i < arr.length; i++){
        if(arr[i] >= arr[startingIdx] && arr[i] < max) {
            return i
        }
    }
    return -1 
}
console.log(sameBsts2(arr1,arr2))
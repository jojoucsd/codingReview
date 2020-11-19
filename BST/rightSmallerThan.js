/*

*/

const inputArr = [8, 5, 11, -1, 3, 4, 2] // [5,4,4,0,1,1,0]

rightSmallerThan = (arr) =>{
    // console.log(arr)
    const result = []
    for (let i = 0 ; i < arr.length; i++){
        let current = arr[i]
        let j = i+1
        let count = 0
        while (j < arr.length){
            if (arr[i] > arr[j]){
                count++
            }
            j++
        }
        result.push(count)
    }
    console.log(result)
}

rightSmallerThanBST = (array) =>{
    if (array.length === 0) return []

    const lastIdx = array.length -1
    const bst = new SpecialBST(array[lastIdx], lastIdx, 0)

    for (let i = array.length - 2; i >=0; i--){
        bst.insert(array[i], i)
    }

    console.log(bst)
    // const rightSmallerCounts = array.slice()
    // getRightSmallerCounts(bst, rightSmallerCounts)
    // console.log(rightSmallerCounts)
}

//     getRightSmallerCounts = (bst, rightSmallerCounts) =>{
//         if (bst === null) return
//         rightSmallerCounts[bst.idx] = bst.numSmallerAtInsertTime;
//         getRightSmallerCounts(bst.left, rightSmallerCounts)
//         getRightSmallerCounts(bst.right, rightSmallerCounts)
// }

class SpecialBST {
    constructor(value, idx, numSmallerAtInsertTime){
        this.value = value
        this.idx = idx
        this.numSmallerAtInsertTime = numSmallerAtInsertTime
        this.leftSubtreeSize = 0
        this.left = null
        this.right = null
    }
    insert(value, idx, numSmallerAtInsertTime = 0) {
        if (value < this.value) {
            this.leftSubtreeSize++
            if (this.left ===null) {
                this.left = new SpecialBST(value, idx, numSmallerAtInsertTime);
            }else{
                this.left.insert(value, idx, numSmallerAtInsertTime)
            }
        }else{
            numSmallerAtInsertTime += this.leftSubtreeSize;
            if (value> this.value) numSmallerAtInsertTime++
            if (this.right === null){
                this.right = new SpecialBST(value, idx, numSmallerAtInsertTime);
            }else{
                this.right.insert(value, idx, numSmallerAtInsertTime)
            }
        }
    }
}

rightSmallerThanBST(inputArr)
// rightSmallerThan(inputArr)
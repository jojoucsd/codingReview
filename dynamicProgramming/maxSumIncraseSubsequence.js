/*
array": [10, 70, 20, 30, 50, 11, 30]
[110, [10, 20, 30, 50]]
*/

const arr = [10, 70, 20, 30, 50, 11, 30]

maxSumIncreasingSubsequence=(array)=>{
const sums = array.map(num =>num)
const sequences = new Array(array.length)
let maxSumIdx = 0

 for (let i = 0; i< array.length  ; i++){
     const current = array[i]
    for (let j = 0; j< i; j++){
        const other = array[j]
        if (other < current && sums[j] + current >= sums[i]){
            sums[i] = sums[j] + current
            sequences[i] = j
        }
    }
    if (sums[i] >= sums[maxSumIdx]) maxSumIdx = i
  }
//   console.log(sequences, maxSumIdx)
return [sums[maxSumIdx],buildSequence(array, sequences, maxSumIdx)]
}

buildSequence=(array, sequences, currentIdx)=>{
    console.log(array[currentIdx])
    const incraseSeq = []
    while (currentIdx !== undefined){
        incraseSeq.unshift(array[currentIdx])
        currentIdx = sequences[currentIdx]
    }
    return incraseSeq
}
maxSumIncreasingSubsequence(arr)
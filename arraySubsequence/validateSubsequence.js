//Given two non-empty array of integers, write a function that determines whether the second array is a 
//subsequence of the first one

//sample input
//{"array": [5, 1, 22, 25, 6, -1, 8, 10], "sequence": [1, 6, -1, 10]}

//output
//true

function isValidSubsequence1(array, sequence) {
    let aPointer = 0
    let sPointer = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0 ; j < sequence.length; j++){
            if(array[aPointer] === sequence[sPointer]){
                sPointer++
                break
            }
        }
        aPointer++
    }
    return sPointer === sequence.length
}


function isValidSubsequence2(array, sequence) {
let seqIdx = 0
for (const value of array){
    if(seqIdx === sequence.length) break;
    if(sequence[seqIdx] === value) seqIdx++
}
return seqIdx === sequence.length
}

console.log(isValidSubsequence1([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 25, 22, 6, -1, 8, 10]))

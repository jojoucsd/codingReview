/*
Given an array of integers where each integer represents a jump of its value in the array.
for instance, the int 2 represents a jump of two indices forward in the array; the -3 represents
a jump of three indices backward in the array. 

If a jump spill past the array's bound, it wraps over to the other side. For instance, a jump -1 at
index 0 brings us to the last index of the array. similarly, a jump 1 at the last index brings us to the 0

write a function that return a boolean representing whether the jumps in the array from a single cycle. 
A cycle occurs if starting at any index in the array and following the jumps. every element in the array is
visited exactly once before landing back on the starting index


Sample Input
array = [2,3,1,-4,-4,2] 

=> true

array = [1,-1,1,-1]

=> false
*/

function hasSingleCycle(array) {
    // Write your code here.
      const sum = array.reduce((a,b) => a+b)
        // return sum % array.length == 0 
    //finding sum will tell me if the array landed on the starting index or not, which is part 1 of 
    //my approach
 
      let visited = 0
      let currentIdx = 0
      let visitedArray = array.map(_=>0)
      while (visited < array.length) {
          visited++
          currentIdx = getNextIdx(currentIdx, array)
          visitedArray[currentIdx]++
      }
      console.log(visitedArray)
      // want to construct a visited array if the index is visted will be 1 , if more than once is 2 never will be 0
      
      // lastly return a check if sum % length === 0 and the visited array is all [1s] and no 0 or other digits
  }
  
  getNextIdx = (currentIdx, array) =>{
      const jump = array[currentIdx]
      const nextIdx = currentIdx + jump
      if (nextIdx < 0) {
          return array.length - Math.abs(nextIdx)
      } else if (nextIdx > array.length){
          return nextIdx - array.length
      }else{
          return nextIdx
      }
  }
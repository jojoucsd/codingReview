//{"array": [12, 3, 1, 2, -6, 5, -8, 6], "targetSum": 0}
//[[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

function threeNumberSum(array, targetSum) {
    // Write your code here.
      array.sort((a,b) => a - b) 
      let result = []
      for (let i = 0; i < array.length; i++) {
          let leftPointer = i + 1
          let rightPointer = array.length - 1
          while(leftPointer < rightPointer) {
              let tempSum = array[i] + array[leftPointer] + array[rightPointer]
              if (targetSum === tempSum) {
                  result.push([array[i] , array[leftPointer], array[rightPointer]])
                  leftPointer++
                  rightPointer--
              }else if (tempSum < targetSum){
                  leftPointer++
              }else {
                  rightPointer--
              }
          }
      }
      return result
  }

  function threeNumberSum1(array, targetSum) {
    // Write your code here.
      array.sort((a,b) => a-b)
      let result = []
      for (let i = 0; i < array.length; i++) {
          for (let j = i+1; j < array.length; j++){
              for(let k = j+1; k < array.length; k++){
                  if (targetSum === array[i] + array[j] + array[k]){
                      result.push([array[i], array[j], array[k]])
                  }
              } 
          }
      }
      return result
  }
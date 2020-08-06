//{"array": [7, 6, 4, -1, 1, 2], "targetSum": 16}
//[[7, 6, 4, -1], [7, 6, 1, 2]]

function fourNumberSum(array, targetSum) {
    // Write your code here.
      let result = []
      for (let i = 0 ; i <array.length; i ++) {
          for(let j = i+1; j<array.length; j++){
              for(let k = j+1; k<array.length; k++){
                  for(let l = k+1; l<array.length; l++){
                      if (targetSum === array[i] + array[j] + array[k] + array[l]){
                          result.push([array[i], array[j] , array[k], array[l]])
                      }
                  }
              }
          }
      }
      return result
  }

  function fourNumberSum(array, targetSum) {
    // Write your code here.
      const allPairSums = {}
      const result = []
      for (let i = 1; i < array.length - 1; i++) {
          for (let j = i+1; j < array.length; j++) {
              const currentSum = array[j] + array[i]
              const difference = targetSum - currentSum
              if (difference in allPairSums){
                  for (const pair of allPairSums[difference]) {
                      result.push(pair.concat([array[i], array[j]]))
                  }
              }
          }
          for (let k = 0; k < i; k++) {
              const currentSum = array[i] + array[k]
              if (!(currentSum in allPairSums)){
                  allPairSums[currentSum] = [[array[k],array[i]]]
              }else{
                  allPairSums[currentSum].push([array[k], array[i]])
              }
          }
      }
      console.log(allPairSums)
  }
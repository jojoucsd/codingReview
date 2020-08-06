//Write a function that takes in a non-empty array of distinc integer representing a target sum. if any n numbers in the input array sum up
//to the targetsum, the function should return them in an array, in any order. otherwise return empty array.

//refer to AlgoExpert Content

// array=[3,5,-4,8,11,-1,6]
// targetSum = 10
// Output 
// [-1, 11]

function twoNumberSum(array, targetSum) {
	const combos = {}
	
	for (const int of array) {
		let maybeMatch = targetSum - int
		if (maybeMatch in combos){
			return [maybeMatch, int]
		}else {
			combos[int] = true
		}
	}
	return []
}

function twoNumberSum1(array, targetSum) {
    // Write your code here.
      let result = []
      for (let i = 0; i < array.length; i ++){
          for(let j = i + 1; j< array.length; j++){
              if (array[i] + array[j] === targetSum){
                  result.push(array[i], array[j])
              }
          }
      }
      return result
  }
  
  function twoNumberSum2(array, targetSum) {
    // Write your code here.
      const arraySet = new Set(array)
      let result = []
      for ( const int of array) {
          if (arraySet.has( targetSum - int) && (targetSum- int !== int)){
              result.push([int, targetSum-int])
          }
      }
      return [...new Set(...result)]
  }

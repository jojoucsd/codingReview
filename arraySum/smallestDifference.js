//{"arrayOne": [-1, 5, 10, 20, 28, 3], "arrayTwo": [26, 134, 135, 15, 17]}

//Write a function that takes in two non-empty array of int, finds the pair of numbers (one from each) whose absolute difference
//is closest to zero, return an array with [array1, array2]
//assume only 1 pair with smallest

function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
      arrayOne.sort((a,b) => a-b)
      arrayTwo.sort((a,b) => a-b)
      let pointerA = 0
      let pointerB = 0 
      let current = Infinity
      let smallest = Infinity //If sets 0 won't work, only Infinity
      let result = []
      while ( pointerA < arrayOne.length && pointerB <arrayTwo.length){
          let num1 = arrayOne[pointerA]
          let num2 = arrayTwo[pointerB]
          if (num1 > num2) {
               current = num1 - num2 
               pointerB++
          }else if (num2 > num1){
               current = num2 - num1
               pointerA++
          }else {
              return[num1, num2]
          }
          if (smallest > current){
              smallest = current
              console.log(smallest)
              result = [num1, num2]
          }
      }
      return result
      //console.log(result)
  }
  
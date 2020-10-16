/*
Write a function that takes in an array of integers and returns a sorted version of that array.
Use the Selection Sort algorithm to sort the array.
*/

function selectionSort(array) {
    // Write your code here.
      let startIdx= 0
      while (startIdx < array.length - 1) {
          let smallestIdx = startIdx; 
          for (let i = startIdx + 1 ; i < array.length; i++) {
              if (array[smallestIdx] > array[i]) smallestIdx = i
          }
          swap (startIdx, smallestIdx, array)
          startIdx++
      }
      return array;
  }
  
  swap =(i, j, array) =>{
      const temp = array[j]
      array[j] = array[i]
      array[i] = temp
  }
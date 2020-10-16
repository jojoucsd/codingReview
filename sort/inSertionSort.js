/*
Write a function that takes in an array of integers and returns a sorted version of that array.
Use the Insertion Sort algorithm to sort the array.
*/

function insertionSort(array) {
    // Write your code here.
      for (let i = 1; i < array.length; i++){
          let j = i
          while ( j > 0 && array[j] < array[j - 1]){
              swap(j, j-1, array)
              j -=1
          }
      }
      return array
  }
  
  swap = (i, j , array) =>{
      const temp = array[j]
      array[j] = array[i]
      array[i] = temp
  }
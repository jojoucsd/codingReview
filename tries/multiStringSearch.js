/*
Write a function that takes in a big string and array of small strings ,all of which are 
smaller in length than the big string. The function should return an array of 
booleans, where each boolean represents whether the small string at that index in the array
of small strings is contained in the big string.

Sample Input
bigString = "this is a big string"
smallStrings = ["this", "yo", "is", "a", "bigger", "string" , "kappa"]

Sample Output
[true, false, true, true, false, true, false]
*/

function multiStringSearch(bigString, smallStrings) {
    // Write your code here.
      return smallStrings.map(smallString => isInBigString(bigString, smallString));
  }
  
  isInBigString = (bigString, smallString) =>{
      for (let i= 0; i < bigString.length; i++){
          if (i + smallString.length > bigString.length) break
          if (isInBigStringHelper(bigString, smallString, i )) return true
      }
      return false
  }
  isInBigStringHelper = (bigString, smallString, startIdx) => {
      let leftBig = startIdx
      let rightBig = startIdx + smallString.length - 1
      let leftSmall = 0
      let rightSmall = smallString.length - 1;
      while (leftBig <= rightBig) {
          if (bigString[leftBig] != smallString[leftSmall] || bigString[rightBig] != smallString[rightSmall]){
              return false
          }
          leftBig++
          rightBig--
          leftSmall++
          rightSmall--
      }
      return true
  }
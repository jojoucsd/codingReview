/*
Write a function that takes in an array of integers and returns a sorted version of that array.
Use the Quick Sort algorithm to sort the array.
*/

function quickSort(array) {
    // Write your code here.
      quickSortHelper (array, 0 , array.length -1 )
      // console.log(array)
      return array
  }
  
quickSortHelper = (array , startIdx, endIdx) =>{
	if (startIdx >= endIdx) return;
	const pivotIdx = startIdx;
	let leftIdx = startIdx;
	let rightIdx = endIdx;
	while( rightIdx >= leftIdx) {
		if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
			swap(leftIdx, rightIdx, array)
		}
		if (array[leftIdx] <= array[pivotIdx]) leftIdx++
		if (array[rightIdx] >= array[pivotIdx]) rightIdx--
	}
	swap (pivotIdx, rightIdx, array);
	const leftSubarayIsSmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1)
	if (leftSubarayIsSmaller) {
		quickSortHelper(array, startIdx, rightIdx -1)
		quickSortHelper(array, rightIdx +1, endIdx)
	}else{
		quickSortHelper(array, rightIdx+1 , endIdx);
		quickSortHelper(array, startIdx, rightIdx-1)
	}
}
swap = (i, j, array)=>{
	let temp = array[j]
	array[j] = array[i]
	array[i] = temp
}
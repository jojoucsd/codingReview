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
	let visited = 0
	let currentIdx = 0
	let visitedArray = array.map(_=>0)
	while (visited < array.length) {
		visited++
		currentIdx = getNextIdx(currentIdx, array)
		visitedArray[currentIdx]++
	}
	console.log(visitedArray)
	return visitedArray.every(int=> int===1)
}

getNextIdx = (currentIdx, array) =>{
	const jump = array[currentIdx]
	const nextIdx = (currentIdx + jump) % array.length
	return nextIdx >= 0 ? nextIdx : nextIdx + array.length
}

hasSingleCycle1 = (arr) =>{
	let visited = 0 
	let current = 0
	while (visited < arr.length) {
		if (visited > 0 && current === 0) return false
		visited++
		current = getNextIdx(current, arr)
	}
	return current === 0 
}

//   console.log(hasSingleCycle( [10, 11, -6, -23, -2, 3, 88, 908, -26]))
console.log(hasSingleCycle1 ([10, 11, -6, -23, -2, 3, 88, 908, -26]))
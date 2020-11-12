//Given an unsorted integer array, find the smallest missing positive integer.
//Follow up:
//Your algorithm should run in O(n) time and uses constant extra space.

//Input 
// [1,2,0] => 3; [3,4,-1,1] =>2
const nums = [-1, 1,0,4,2,5]

// includes JS string lookup 

firstMissingPositive = (nums) =>{
    if(nums.length <= 1) return nums[0] == 1 ? 2 : 1
    const max = Math.max(...nums); // why max here ? instead use nums.length ?
    for (let i = 1 ; i <= max + 1; i++){
        if (!nums.includes(i)) return i
    }
    return 1
}

//hash table

firstMissingPositive1 = (nums) =>{
    if (nums.length <= 1) return nums[0] == 1 ? 2:1
    let numHash = {}
    let missing = 1
    for (const num of nums) {
        if (num > 0) {
            numHash[num] = true
        }
    }
    for (missing; missing <= nums.length; missing++){
        if (!numHash[missing]){
            return missing
        }
    }
    console.log(missing)
}

// swap 

firstMissingPositive2 = (nums) =>{
  let i = 0
  while (i < nums.length) {
      if (nums[i] > 0 && nums[i] <=nums.length && nums[nums[i] - 1] !==nums[i]){
          [nums[nums[i]-1], nums[i]] = [nums[i], nums[nums[i] -1]]
      }else{
          i++
      }
  }
  console.log(nums)
  for (i = 0; i < nums.length; i++){
      if (nums[i] !== i+1) return i+1
  }
  return i+1
}

console.log(firstMissingPositive2(nums))
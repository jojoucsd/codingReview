
/*
Write a function that takes in a non-empty array of integers and returns an array of the same
length, where each element in the output array is equal to the product of every other number
in the input array.

In other words, the value at output[i] is equal to the product of every number in the input 
array other than input[i]

Note that you're expected to solve this problem without using division
*/
const arr = [5,1,4,2] // [8, 40 , 10 ,20]

arrayOfProducts = (array) =>{
    const result = []
    for (let i = 0; i < array.length; i++){
        const clone = [...array]
        let removed =clone.splice(i,1)
        result.push(getTotal(clone))
    }
    console.log(result)
}

getTotal = (cloneArr) =>{
    return cloneArr.reduce(multiply, 1)
}
multiply = (a,b) => a * b

arrayOfProducts(arr)
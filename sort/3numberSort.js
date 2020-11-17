/*

Sample Input
array = [1,0,0,-1,-1,0,1,1]
order = [0,1,-1]

Sample Output
[0,0,0, 1, 1, 1, -1, -1]
*/
const inputArr = [1,0,0,-1,-1,0,1,1]
const inputOrder = [0,1,-1]
threeNumberSort = (array , order) =>{
const valueCounts =[0,0,0]
    for (const element of array) {
        const orderIdx = order.indexOf(element)
        valueCounts[orderIdx]++
    }
    // console.log(valueCounts)
    for (let i = 0; i < 3; i++){
        const value = order[i]
        const count = valueCounts[i]
        const numElementsBefore = valueCounts.slice(0, i).reduce((a,b) => a+b ,0)
        for (let n = 0; n < count; n++){
            const currentIdx = numElementsBefore + n
            array[currentIdx] = value
        }
    }
    console.log(array)
}

threeNumsSort = (arr, order) =>{
    const firstOrder = order[0]
    const lastOrder = order[order.length - 1]
    for (let i = 0; i < arr.length ; i++){
        if (arr[i] === firstOrder){
            arr.splice(i, 1)
            arr.unshift(firstOrder)
        }
    }
    for (let i = arr.length -1 ; i >=0; i--){
        if (arr[i] === lastOrder){
            arr.splice(i, 1)
            arr.push(lastOrder)
        }
    }
    console.log(arr)
}

threeNumbersSortAdvance = (arr, order) =>{
    const firstValue = order[0]
    const secondValue = order[1]
    let firstIdx = 0
    let secondIdx = 0
    let thirdIdx = arr.length -1

    while(secondIdx <= thirdIdx){
        const value = arr[secondIdx]

        if(value === firstValue) {
            swap(firstIdx, secondIdx, arr)
            firstIdx++
            secondIdx++
        }else if (value === secondValue){
            secondIdx++
        }else{
            swap(secondIdx, thirdIdx, arr)
            thirdIdx -= 1
        }
    }
    return arr
}

swap = (i, j , arr) =>{
    const temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp
}
console.log(threeNumbersSortAdvance(inputArr, inputOrder))
// threeNumsSort(inputArr, inputOrder)
// threeNumberSort(inputArr, inputOrder)

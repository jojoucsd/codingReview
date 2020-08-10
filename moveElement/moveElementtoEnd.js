let array = [2, 1, 2, 2, 2, 3, 4, 2]

moveElementToEnd = (array, toMove) =>{
    let result = []
    for (let i = 0 ; i < array.length; i ++) {
        if(array[i] !== toMove){
           result.unshift(array[i])
        }else{
            result.push(array[i])
        }
    }
    console.log(result)
}

twoPointerMove = (array, toMove) =>{
    let start = 0
    let end = array.length - 1 
    while (start < end ){
        while(start < end && array[end] === toMove) {
            end --
        }
        if (array[start] === toMove) {
            swap (start, end, array) 
        }
        start++
    }
    console.log(array)
}

swap = (i , j , array) =>{
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

 console.log(twoPointerMove(array, 2))
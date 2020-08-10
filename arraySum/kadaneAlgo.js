kadanesAlgo = (array) => {
    let current = 0
    let max = 0
    for (const num of array) {
        current = Math.max(num, current + num)
        max = Math.max(current, max)
    }
    console.log(max)
}
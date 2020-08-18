/*
River Sizes
Your're given a two-dim array(a matrix) of potentially unequal height
and width containing only 0s and 1s. Each 0 represents land, and each
1 represents part of a river. A river consists of any number of 1s that
are horizontally or vertically adjacent(but not diagonally adjacent).
The number of adjacent 1s forming a river determine its size.

River can be L-shaped

Write a function tht returns an array of the sizes of all rivers representsed in the
input matrix.
*/

const river1 = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0]
  ]
// [2,1,5,2,2]

riverSizes = (matrix) =>{
const sizes = []
const checkedMap =matrix.map(row=>row.map(value=>false))
for (let i = 0 ; i < matrix.length; i++){
    for(let j = 0; j <matrix[i].length; j++){
        if (checkedMap[i][j]) continue
        countRiverSizes(i, j, matrix, checkedMap, sizes)
    }
  }
return sizes
}

countRiverSizes = (i, j , matrix, checkedMap, sizes)=>{
    let currentSize = 0
    const riverStack = [[i, j]]
    while(riverStack.length){
     const currentNode = riverStack.pop()
     i = currentNode[0]
     j = currentNode[1]
     if (checkedMap[i][j]) continue
     checkedMap[i][j] = true
     if (matrix[i][j] ===0) continue
     currentSize++
     const unvisitedNodes = checkNeighbors(i, j , matrix, checkedMap)
     for (const node of unvisitedNodes) {
        riverStack.push(node)
     }
    }
    if (currentSize >0) sizes.push(currentSize)
}

checkNeighbors=(i, j, matrix, checkedMap)=>{
    const unvistedNodes =[]
    if(i > 0 && !checkedMap[i-1][j])unvistedNodes.push([i-1, j])
    if(i < matrix.length -1 && !checkedMap[i+1][j]) unvistedNodes.push([i+1, j])
    if(j > 0 && !checkedMap[i][j-1])unvistedNodes.push([i, j-1])
    if(j < matrix[0].length -1 && !checkedMap[i][j+1]) unvistedNodes.push([i, j+1])
    return unvistedNodes
}
console.log(riverSizes(river1))
/*
Write a function that takes in non-empty sorted array. construct a BST return the root of the BST.

function should minimize the height of the BST

Input {"array": [1, 2, 5, 7, 10, 13, 14, 15, 22]}

Output {
  "nodes": [
    {"id": "10", "left": "2", "right": "14", "value": 10},
    {"id": "14", "left": "13", "right": "15", "value": 14},
    {"id": "15", "left": null, "right": "22", "value": 15},
    {"id": "22", "left": null, "right": null, "value": 22},
    {"id": "13", "left": null, "right": null, "value": 13},
    {"id": "2", "left": "1", "right": "5", "value": 2},
    {"id": "5", "left": null, "right": "7", "value": 5},
    {"id": "7", "left": null, "right": null, "value": 7},
    {"id": "1", "left": null, "right": null, "value": 1}
  ],
  "root": "10"
}
*/

function minHeightBst(array) {
    // return buildMinHeight(array, 0, array.length - 1)
    // return buildMinHeight1(array, null, 0 , array.length-1)
    return buildMinHeight2(array, null, 0 , array.length-1)
  }
  
  buildMinHeight = (array, startIdx, endIdx) =>{
    if (endIdx < startIdx) return null // why needs to return null here ? 
    const midIdx = Math.floor((startIdx + endIdx) / 2)
    const bst = new BST(array[midIdx])
    bst.left = buildMinHeight(array, startIdx, midIdx -1)
    bst.right = buildMinHeight(array, midIdx+1, endIdx)
    return bst 
  }

  buildMinHeight1 = (array, bst , startIdx, endIdx) =>{
    if (endIdx < startIdx) return;
    const midIdx = Math.floor((startIdx + endIdx)/2)
    const currentValue = array[midIdx] 
    if (bst === null) {
        bst = new BST(currentValue)
    }else{
        bst.insert(currentValue)
    }
    buildMinHeight1(array,bst, startIdx, midIdx - 1)
    buildMinHeight1(array, bst, midIdx+1, endIdx)
    return bst
  }

  buildMinHeight2 = (array, bst, startIdx, endIdx) =>{
      if(endIdx < startIdx) return
      const midIdx = Math.floor((startIdx + endIdx)/2)
      const newNode = new BST(array[midIdx])
      if (bst === null) {
          bst = newNode
      }else{
          if(array[midIdx] < bst.value){
              bst.left = newNode
              bst= bst.left
          }else{
              bst.right = newNode
              bst=bst.right
          }
      }
      buildMinHeight2(array, bst, startIdx, midIdx-1)
      buildMinHeight2(array, bst, midIdx+1, endIdx)
      return bst;
  }
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      if (value < this.value) {
        if (this.left === null) {
          this.left = new BST(value);
        } else {
          this.left.insert(value);
        }
      } else {
        if (this.right === null) {
          this.right = new BST(value);
        } else {
          this.right.insert(value);
        }
      }
    }
  }
const arr = [1, 2, 5, 7, 10, 13, 14, 15, 22]
console.log(minHeightBst(arr))
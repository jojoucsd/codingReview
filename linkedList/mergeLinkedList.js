/*

*/

const arr1 = [2,6,7,8]
const arr2 = [1,3,4,5,9,10]


linkedList = (arr) => {
    return arr.reduceRight((next, value) => ({value, next}), null)
}

const linked1 = linkedList(arr1)

console.log(linked1)
const linked2 = linkedList(arr2)
class LinkedList {
    constructor(value){
        this.value = value
        this.next = null
    }
}

mergeLinkedLists = (headOne, headTwo) =>{
    let p1 = headOne
    let p2 = headTwo
    let previous = null;

    while( p1 !== null & p2 !== null) {
        if (p1.value < p2.value){
            previous = p1
            p1 = p1.next
        }else{
            if (previous !==null){
                previous.next = p2
            }
            previous = p2
            p2 = p2.next
            previous.next = p1
        }
    }
    if (p1 === null) {
        previous.next = p2
    }else{
        previous.next = p1
    }
    // console.log(headOne)
    // console.log(headTwo)
    return headOne.value < headTwo.value ? headOne : headTwo
}

mergeLinkedListsAdv = (headOne, headTwo) =>{
    recursiveMerge(headOne, headTwo, null)
    return headOne.value < headTwo.value ? headOne: headTwo
}

recursiveMerge = (p1, p2, p1Prev) =>{
    if (p1 === null) {
        p1Prev.next = p2
        return
    }

    if (p2 === null) return

    if (p1.value < p2.value) {
        recursiveMerge(p1.next, p2, p1)
    }else{
        if (p1Prev !== null) p1Prev.next = p2;
        const newP2 = p2.next
        p2.next = p1
        recursiveMerge(p1, newP2, p2)
    }
}
console.log(mergeLinkedListsAdv(linked1, linked2))
// console.log(mergeLinkedLists(linked1, linked2))
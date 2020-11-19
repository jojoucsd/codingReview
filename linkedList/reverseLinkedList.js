/*

*/

const array = [0,1,2,3,4,5]

linkedList = (arr) => {
    return arr.reduceRight((next, value) => ({value, next}), null)
}

const input = linkedList(array)

reverseLinkedList = (head) =>{
//    console.log(head)
    let previousNode = null;
    let currentNode = head
    while(currentNode !== null) {
        const nextNode = currentNode.next
        currentNode.next = previousNode
        previousNode = currentNode
        currentNode = nextNode
    }
    console.log(previousNode)
}

reverseLinkedList(input)
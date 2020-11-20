/*

*/

const array = [0,1,2,3,4,5]
const k = 2

linkedList = (arr) => {
    return arr.reduceRight((next, value) => ({value, next}), null)
}

const input = linkedList(array)

function shiftLinkedList(head, k) {
    // Write your code here.
      let listLength = 1;
      let listTail = head;
      
      while (listTail.next !== null) {
          listTail = listTail.next;
          listLength++
      }
  
      const offset = Math.abs(k) & listLength
      if (offset ===0) return head
      
      const newTailPosition = k > 0 ? listLength - offset : offset
      let newTail = head
      
          for (let i = 1; i < newTailPosition; i++){
              newTail = newTail.next
          }
          const newHead = newTail.next
          newTail.next = null
          listTail.next = head;
          console.log(newHead)
  }
  
  shiftLinkedList(input, k)
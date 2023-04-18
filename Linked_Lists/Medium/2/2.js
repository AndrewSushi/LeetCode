
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let temp = ListNode();
    let curr = temp;
    let carry = 0;
    while(l1 != null || l2 != null || carry != 0){
        let value = carry;
        if(l1){
            value += l1.val;
            l1 = l1.next;
        }
        if(l2){
            value += l2.val;
            l2 = l2.next
        }
        carry = value / 10;
        curr.val = value % 10;
        if(l1 != null || l2 != null || carry != 0){
            curr.next = ListNode();
            curr = curr.next;
        }else{
            curr.next = null;
        }
    }
    return temp;
};
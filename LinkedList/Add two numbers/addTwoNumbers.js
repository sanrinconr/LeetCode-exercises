/**
 * Definition for singly-linked list.
 *
 */
function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val)
	this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	let out = sumLinked(l1,l2)
    let salida =  null
    //The array get is convert to linkedList
    while(out.length >0){
        salida = new ListNode(out.pop(),salida)
    }
    return salida
	function sumLinked(l1, l2) {
		let out = []
		let actualL1 = l1;
		let actualL2 = l2;
		let carry = false;
		while (actualL1 !== null || actualL2 !== null) {
            let val1 = actualL1 ? actualL1.val : 0
            let val2 = actualL2 ? actualL2.val : 0

			let sum = val1 + val2
            if (carry) {
				sum = sum + 1;
                carry=false
			}

			if (sum > 9) {
				sum = sum % 10
                carry=true
			}
			out.push(sum)
			actualL1 = actualL1 ? actualL1.next : null
			actualL2 = actualL2 ? actualL2.next : null

		}
        if(carry){
            out.push(1)
            carry=false
        }
        return out
	}
};

let l14 = new ListNode(9, undefined)
    let l13 = new ListNode(9, l14)
    let l12 = new ListNode(9, l13)
    let l11 = new ListNode(9, l12)

    let l22 = new ListNode(9, undefined)
    let l21 = new ListNode(9, l22)


    const a = addTwoNumbers(l11, l21)

module.exports = addTwoNumbers
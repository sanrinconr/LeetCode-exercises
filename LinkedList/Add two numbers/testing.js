const addTwoNumbers = require("./addTwoNumbers")

basicTest()
nineList()
sum100Elements()
function basicTest(){
    let l13 = new ListNode(3, undefined)
    let l12 = new ListNode(4, l13)
    let l11 = new ListNode(2, l12)

    let l23 = new ListNode(9, undefined)
    let l22 = new ListNode(6, l23)
    let l21 = new ListNode(5, l22)
    let out = []
    const a = addTwoNumbers(l11, l21)
    let actual = a
    while(actual !== null){
        out.push(actual.val)
        actual = actual.next
    }
    console.log(out.toString() === "7,0,3,1")
}

function nineList(){
    let l14 = new ListNode(9, undefined)
    let l13 = new ListNode(9, l14)
    let l12 = new ListNode(9, l13)
    let l11 = new ListNode(9, l12)

    let l22 = new ListNode(9, undefined)
    let l21 = new ListNode(9, l22)

    let out = []

    const a = addTwoNumbers(l11, l21)
    let actual = a
    while(actual !== null){
        out.push(actual.val)
        actual = actual.next
    }
    console.log(out.toString() === "8,9,0,0,1")
}

function sum100Elements(){
    let arr1 = []
    let arr2 = []
    for(let i= 1 ; i<=100;i++){
        arr1.push(i)
        arr2.push(i*-1)
    }
    let l1 = parseToLinked(arr1)
    let l2 = parseToLinked(arr2)
    const a = addTwoNumbers(l1,l2)
    console.log(a.val === 0 ? true : false)
}


//UTILS
function parseToLinked(array){
    let out = null
    while(array.length> 0){
        out = new ListNode(array.pop(), out)
    }
    return out
    
}
function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val)
	this.next = (next === undefined ? null : next)
}



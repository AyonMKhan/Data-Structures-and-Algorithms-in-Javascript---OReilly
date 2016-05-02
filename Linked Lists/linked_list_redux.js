// LINKED LISTS - coding dojo edition

function SLL(){
	this.head = null;
}
/// standalone functions ///
function addFront(sll, value) {
	var node = {
		val: value,
		next: null
	}
	if(!sll.head) {
		sll.head = node;
		return sll
	}
	else {
		node.next = sll.head;
		sll.head = node;
		return sll
	}
}
function removeFront(sll) {
	if(!sll.head) {
		return null
	}
	else {
		sll.head = sll.head.next;
		return sll
	}
}
function contains(sll, value) {
	var current = sll.head;

	while(current){
		if(current.val == value){
			return true
		}
		else {
			current = current.next;
		}
	}
	return false
}
function front(sll) {
	if(!sll.head) {
		return null
	}
	else {
		return sll.head.val
	}
}

var list = new SLL()
addFront(list, 1)
addFront(list, 2)
addFront(list, 3)
addFront(list, 4)

console.log(front(list))














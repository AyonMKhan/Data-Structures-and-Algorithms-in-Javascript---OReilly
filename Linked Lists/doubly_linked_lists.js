function Node(element) {
	this.element = element;
	this.next = null;
	this.previous = null;
}

function DLList() {
	this.head = new Node("head") // i would've done this differently - i don't see a need to instantiate a default head
	this.find = function(item){
		var currNode = this.head;
		while(currNode.element != item && currNode.next != null) { // added this, not in book
			currNode = currNode.next
		}
		return currNode;
	}
	this.insert = function(newElement, item) { // inserting this way would require you to keep track of the previously inserted node
		var newNode = new Node(newElement);
		var current = this.find(item); // if there isn't the element to insert to, will it insert it at the end? - yes book didn't really cover this? I had to adjust the find function
		newNode.next = current.next;
		newNode.previous = current;
		current.next = newNode
	}
	// this.findPrevious = function(item) { // helper function for remove - this is no long needed as a function
	// 	var currNode = this.head;
	// 	while (!(currNode.next == null) && (currNode.next.element != item)) {
	// 		currNode = currNode.next;
	// 	}
	// 	return currNode
	// }
	this.remove = function(item) {
		var currNode = this.find(item)
		if (!(currNode.next == null)){
			currNode.previous.next = currNode.next;
			currNode.next.previous = currNode.previous;
			currNode.next = null;
			currNode.previous = null;
		}
	}
	this.findLast = function() {
		var currNode = this.head;
		while (!(currNode.next == null)) {
			currNode = currNode.next;
		}
		return currNode;
	}
	this.dispReverse = function(){
		var currNode = this.head;
		currNode = this.findLast();
		while (!(currNode.previous == null)) {
			console.log(currNode.element)
			currNode = currNode.previous;
		}
	}
	this.display = function() {
		var currNode = this.head; 
		while (!(currNode.next == null) && !(currNode.next.element == "head")) {
			console.log(currNode.next.element);
			currNode = currNode.next
		}
	}
	this.advance = advance; 
	// this.back = back; 
	this.head.next = this.head; // turning this circular
}

//// test sample 1
var cities = new DLList();
cities.insert("Conway", "head")
cities.insert("Russelville", "Conway")
cities.insert("Carlisle", "Russellville")
cities.insert("Alma", "Carlisle")
cities.display()
console.log()
cities.remove("Carlisle")
cities.display()
console.log()
cities.dispReverse()

////*** exercises ***////
function advance(n) {
	var currNode = this.head;
	var count = 0
	while (currNode.next != null && count < n) {
		currNode = currNode.next;
		count++
	}
	if (currNode.next == null && count != n){
		console.log("the number you entered exceeds the length of this list")
	}
	return currNode
}
// function back(n) { // do i need to make this a circular linked list???
// 	this.
// }

////coming back to this
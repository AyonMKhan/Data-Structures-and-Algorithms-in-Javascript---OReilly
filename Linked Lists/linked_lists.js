function Node(element){
	this.element = element;
	this.next = null;
}
function LList() {
	this.head = new Node("head") // i would've done this differently - i don't see a need to instantiate a default head
	this.find = function(item){
		var currNode = this.head;
		while(currNode.element != item) {
			currNode = currNode.next
		}
		return currNode;
	}
	this.insert = function(newElement, item) { // inserting this way would require you to keep track of the previously inserted node
		var newNode = new Node(newElement);
		var current = this.find(item);
		newNode.next = current.next;
		current.next = newNode
	}
	this.findPrevious = function(item) { // helper function for remove
		var currNode = this.head;
		while (!(currNode.next == null) && (currNode.next.element != item)) {
			currNode = currNode.next;
		}
		return currNode
	}
	this.remove = function(item) {
		var prevNode = this.findPrevious(item)
		if (!(prevNode.next == null)){
			prevNode.next = prevNode.next.next;
		}
	}
	this.display = function() {
		var currNode = this.head; 
		while (!(currNode.next == null)) {
			console.log(currNode.next.element);
			currNode = currNode.next
		}
	}
}

var cities = new LList(); 
cities.insert("Conway", "head"); 
cities.insert("Russellville", "Conway"); 
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Russellville"); 
cities.display()
console.log()
cities.remove("Carlisle")
cities.display()


// seems like this set up doesn't take into account edge cases.






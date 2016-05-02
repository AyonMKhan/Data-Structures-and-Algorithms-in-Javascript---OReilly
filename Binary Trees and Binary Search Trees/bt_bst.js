function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = function() {
		return this.data
	}
}

function BST() {
	this.root = null;
	this.insert = function(data) {
		var n = new Node(data, null, null);
		if (this.root == null) {
			this.root = n
			return this
		}
		var current = this.root;
		var parent;
		while (true) {
			parent = current;
			if (data < current.data) {
				current = current.left;
				if (current == null) {
					parent.left = n;
					return this
				}
			}
			else {
				current = current.right;
				if (current == null) {
					parent.right = n;
					return this
				}
			}
		}
	}
	this.getMin = function() {
		if(this.root == null) {
			return "no vals"
		}
		else {
			var current = this.root;
			while (current.left != null) {
				current = current.left;
			}
			return current.data;
		}
	}
	this.getMax = function() {
		if(this.root == null) {
			return "no vals"
		}
		else {
			var current = this.root;
			while (current.right != null) {
				current = current.right;
			}
			return current.data
		}
	}
}
function inOrder(node, arr) {
	if (!arr) {
		arr = [];
	}
	if(!(node == null)) {
		inOrder(node.left, arr);
		arr.push(node.data)
		inOrder(node.right, arr);
	}
	return arr;
}
function preOrder(node, arr) {
	if (!arr) {
		arr = [];
	}
	if(!(node == null)) {
		arr.push(node.data)
		preOrder(node.left, arr);
		preOrder(node.right, arr);
	}
	return arr;
}
function postOrder(node, arr) {
	if (!arr) {
		arr = [];
	}
	if(!(node == null)) {
		postOrder(node.left, arr);
		postOrder(node.right, arr);
		arr.push(node.data)
	}
	return arr;
}
function find(bst, val) {
	if(bst.root.data == null) {
		return null;
	}
	else {
		var current = bst.root;
		while (current) {
			if (current.data == val) {
				return current.data
			}
			if (val < current.data) {
				current = current.left;
			}
			else {
				current = current.right;
			}
		}
		return null
	}
}
 
var tree = new BST()
tree.insert(4).insert(3).insert(2).insert(1).insert(5).insert(6).insert(7)

console.log(find(tree, 4))












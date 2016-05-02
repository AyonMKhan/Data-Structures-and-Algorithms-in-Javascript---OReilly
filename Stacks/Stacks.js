function Stack(){
	this.dataStore = [];
	this.top = 0;
	this.push = function(element){
		this.dataStore[this.top++] = element;
	}
	this.pop = function(){
		return this.dataStore[--this.top];
	}
	this.peek = function(){
		return this.dataStore[this.top-1];
	}
	this.length = function(){
		return this.top;
	}
	this.clear = function(){
		this.top = 0
	}
}

// multiple base conversions?
// stacks are useful for palindromes - but below is easier

function pal(str){
	var newS = str.split("").reverse().join("")
	if(newS === str){
		return true
	}
	else {
		return false
	}
}
// console.log(pal("racecar"))

function fact(n){
	var s = new Stack();
	while (n > 1) {
		s.push(n--);
	}
	var product = 1;
	while (s.length() > 0) {
		product *= s.pop()
	}
	return product;
}
// console.log(fact(5))

// 1. A stack can be used to ensure that an arithmetic expression has balanced parentheses. Write a function that takes an arithmetic expression as an argument and returns the postion in the expression where a parenthesis is missing. An example of an arithmetic expression with unbalanced parentheses is 2.3 + 23 / 12 + (3.14159 * .24. 

// 2. A postfix expression evaluator works on arithmetic expressions taking the following form: op1 op2 operator Using two stacks—one for the operands and one for the operators—design and implement a JavaScript function that converts infix expressions to postfix expressions, and then use the stacks to evaluate the expression. 

// 3. An example of a real-world stack is a Pez dispenser. Imagine that your virtual Pez dispenser is filled with red, yellow, and white colors and you don’t like the yellow ones. Write a program that uses a stack (and maybe more than one) to remove the yellow ones without changing the order of the other candies in the dispenser.
var pez = new Stack()
pez.push("yellow")
pez.push("white1")
pez.push("red1")
pez.push("yellow")
pez.push("white2")
pez.push("red2")
pez.push("yellow")
pez.push("white3")
pez.push("red3")

function removeYellow(stack){
	var holderStack = new Stack()

	while(stack.length() >= 0){
		if(stack.peek() == "yellow"){
			stack.pop()
		}		
		else {
			holderStack.push(stack.peek());
			stack.pop()
		}
	}
	while(holderStack.length() >= 0) {
		stack.push(holderStack.peek())
		holderStack.pop()
	}
	console.log("what remains is: " + stack.dataStore)
}
removeYellow(pez)



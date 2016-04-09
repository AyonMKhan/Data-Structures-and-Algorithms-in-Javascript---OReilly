function Checking(amount){
	this.balance = amount;
	this.deposit = deposit;
	this.withdraw = withdraw;
	this.toString = toString;
}
function deposit(amount){
	this.balance += amount;
}
function withdraw(amount){
	if (amount <= this.balance) {
		this.balance -= amount;
	}
	if (amount > this.balance) {
		console.log("insufficient funds")
	}
}
function toString(){
	return "Balance: " + this.balance;
}

var newCheckingAccount = new Checking(100);
newCheckingAccount.deposit(200);
console.log(newCheckingAccount.toString())
//all this can be rewritten using prototypes or tying the function within the parent function



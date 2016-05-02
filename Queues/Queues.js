function Queue() {
	this.dataStore = [];
	this.enqueue = function(element) {
		this.dataStore.push(element);
	}
	this.dequeue = function() {
		return this.dataStore.shift()
	}
	this.front = function() {
		return this.dataStore[0]
	}
	this.back = function() {
		return this.dataStore[this.dataStore.length-1]
	}
	this.toString = function() {
		return this.dataStore.join(", ")
	}
	this.empty = function() {
		if (this.dataStore.length == 0) {
			return true
		}
		else {
			return false
		}
	}
}

function Dancer(name, gender) {
	this.name = name;
	this.gender = gender;
}

var maleDancers = new Queue()
var femaleDancers = new Queue()
maleDancers.enqueue(new Dancer("mike", "m"))
maleDancers.enqueue(new Dancer("jake", "m"))
maleDancers.enqueue(new Dancer("larry", "m"))
femaleDancers.enqueue(new Dancer("larrissa", "f"))
femaleDancers.enqueue(new Dancer("karen", "f"))
femaleDancers.enqueue(new Dancer("bonquiqui", "f"))
femaleDancers.enqueue(new Dancer("boniqua", "f"))

function dance(males, females) {
	console.log("the dance partners are: ");
	while (!males.empty() && !females.empty()){
		var mPerson = males.dequeue();
		var fPerson = females.dequeue();
		console.log("male dancer is: " + mPerson.name + ", female dance partner is: " + fPerson.name)
	}
	if (!males.empty()) {
		console.log(males.front().name + " is waiting to dance")
	}
	if (!females.empty()) {
		console.log(females.front().name + " is waiting to dance")
	}
}
// dance(maleDancers, femaleDancers)

//// Radix sort example using queueus ////
function distribute(nums, queues, n, digit) { // digit represents either the ones or the tens place
	for (var i = 0; i < n; i++){
		if (digit == 1) {
			queues[nums[i] % 10].enqueue(nums[i]) // 
		}		
		else {
			queues[Math.floor(nums[i] / 10)].enqueue(nums[i])
		}
	}
}
function collect(queues, nums) { // simply reputting the queue-array's first value in that object and putting it back into the original random/nums array but sorted either in the first position or the tens position depending on which time you're running it
	var i = 0;
	for (var digit = 0; digit < 10; digit++){
		while (!queues[digit].empty()) {
			nums[i++] = queues[digit].dequeue()
		}
	}
}

//generating storage for sorted values
var queues = []
for(var i = 0; i < 10; i++){
	queues[i] = new Queue()
}
// generating random nums 
var randomNums = []
for(var i = 0; i < 10; i++){
	randomNums[i] = Math.floor(Math.floor(Math.random() * 101))
}

console.log("before radix sort")
console.log(randomNums)
distribute(randomNums, queues, 10, 1)
collect(queues, randomNums)
console.log("first time through dist and collect " + randomNums)
distribute(randomNums, queues, 10, 10)
collect(queues, randomNums)
console.log(randomNums)





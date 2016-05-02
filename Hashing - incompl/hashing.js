function HashTable(){
	this.table = new Array(137)
	this.simpleHash = function(data) {
		var total = 0;
		for (var i = 0; i < data.length; ++i) {
			total += data.charCodeAt(i);
		}
		console.log(data + " " + total)
		return total % this.table.length
	}
	this.showDistro = function() {
		var n = 0;
		for (var i = 0; i < this.table.length; ++i){
			if (this.table[i] != undefined) {
				console.log(i + ": " + this.table[i])
			}
		}
	}
	this.put = function(key, data) {
		var pos = this.betterHash(key);
		var index = 0;
		if (this.table[pos][index] == undefined) {
			this.table[pos][index+1] = data
		}
		else {
			while (this.table[pos][index] != undefined) {
				++index
			}
			this.table[post][index] = data
		}
		index++;
	}
	this.betterHash = function(string) {
		const H = 37;
		var total = 0;
		for (var i = 0; i < string.length; ++i) {
			total += H * total + string.charCodeAt(i)
		}
		// console.log(string + " " + total % 137)
		total = total % this.table.length;
		if (total < 0){
			total += this.table.length-1
		}
		return parseInt(total)
	}
	this.get = function(key) {
		return this.table[this.betterHash(key)]
	}
	this.buildChains = function() {
		for (var i = 0; i < this.table.length; i++){
			this.table[i] = new Array();
		}
	}
}

// var hash = new HashTable()
// var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"]
// for (var i = 0; i < someNames.length; i++) {
// 	hash.put(someNames[i]);
// }
// hash.showDistro() // this still misses david, who gets overwritten by jonathan - both have a hash of 80 after the better hash formula...


// handling collisions - effectively, use 2 dimensional arrays. one for the hash as the key, the other array as the actual value to push


var hTable = new HashTable()
hTable.buildChains()
var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"]
for (var i = 0; i < someNames.length; i++) {
	hTable.put(i, someNames[i])
}
hTable.showDistro()










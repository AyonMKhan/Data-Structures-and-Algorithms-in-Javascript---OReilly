function Queue() {
	this.dataStore = [];
	this.enqueue = function(element) {
		this.dataStore.push(element);
	}
	this.dequeue = function() {
		var priority = this.dataStore[0].code;
		for (var i = 0; i < this.dataStore.length; i++){
			if (this.dataStore[i].code < priority) {
				priority = i
			}
		}
		return this.dataStore.splice(priority, 1)
	}
	this.front = function() {
		return this.dataStore[0]
	}
	this.back = function() {
		return this.dataStore[this.dataStore.length-1]
	}
	this.toString = function() {
		var retStr = ""
		for (var i = 0; i < this.dataStore.length; i++){
			retStr += this.dataStore[i].name + " code: " + this.dataStore[i].code + "\n"
		}
		return retStr;
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

function Patient(name, code) {
	this.name = name; 
	this.code = code;
}

var p = new Patient("Smith",5); 
var ed = new Queue(); 
ed.enqueue(p); 
p = new Patient("Jones", 4); 
ed.enqueue(p); 
p = new Patient("Fehrenbach", 6); 
ed.enqueue(p); 
p = new Patient("Brown", 1); 
ed.enqueue(p); 
p = new Patient("Ingram", 1); 
ed.enqueue(p); 
console.log(ed.toString()); 
var seen = ed.dequeue(); 
console.log("Patient being treated: " + seen[0].name); 
console.log("Patients waiting to be seen: ") 
console.log(ed.toString());








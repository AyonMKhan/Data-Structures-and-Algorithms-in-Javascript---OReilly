// Union A new set is obtained by combining the members of one set with the members of another set. 
// Intersection A new set is obtained by adding all the members of one set that also exist in a second set. 
// Difference A new set is obtained by adding all the members of one set except those that also exist in a second set.

function Set() {
	this.dataStore = [];
	this.add = function(data) {
		if (this.dataStore.indexOf(data) < 0) {
			this.dataStore.push(data);
			return true
		}
		else {
			return false
		}
	}
	this.remove = function(data){
		if (this.dataStore.indexOf(data) > 0) {
			var toRemove = this.dataStore.indexOf(data)
			this.dataStore.splice(toRemove, 1)
			return true
		}
		else {
			return false
		}
	}
	this.show = function() {
		return this.dataStore;
	}
	this.contains = function(data) {
		if (this.dataStore.indexOf(data) > -1) {
			return true
		}
		else {
			return false
		}
	}
	this.union = function(set) {
		var tempSet = new Set();
		for (var i = 0; i < this.dataStore.length; i++) {
			tempSet.add(this.dataStore[i]);
		}
		for (var i = 0; i < set.dataStore.length; i++){
			if (!tempSet.contains(set.dataStore[i])) {
				tempSet.dataStore.push(set.dataStore[i])
			}
		}
		return tempSet
	}
	this.intersect = function(set) {
		var tempSet = new Set()
		for (var i = 0; i < this.dataStore.length; i++) {
			if (set.contains(this.dataStore[i])) {
				tempSet.add(this.dataStore[i])
			}
		}
		return tempSet
	}
	this.size = function() {
		return this.dataStore.length
	}
	this.subset = function(set) {
		if (this.size() > set.size()) {
			return false
		}
		else {
			for (key of this.dataStore) {
				console.log("key is: " + key)
				if(!set.contains(key)) {
					return false
				}
			}
		}
		return true
	}
	this.difference = function(set) {
		var tempSet = new Set()
		for (var i = 0; i < this.dataStore.length; i++) {
			if (!set.contains(this.dataStore[i])) {
				tempSet.add(this.dataStore[i])
			}
		}
		return tempSet;
	}
}


var cis = new Set(); var it = new Set(); cis.add("Clayton"); cis.add("Jennifer"); cis.add("Danny"); it.add("Bryan"); it.add("Clayton"); it.add("Jennifer"); var diff = new Set(); diff = cis.difference(it); console.log("[" + cis.show() + "] difference [" + it.show()      + "] -> [" + diff.show() + "]");







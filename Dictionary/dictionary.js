function Dictionary() {
	this.datastore = new Array()
	this.add = add;
	this.find = find;
	this.remove = remove;
	this.showAll = showAll;
	this.count = count;
	this.clear = clear;
}
function add(key, value) {
	this.datastore[key] = value;
}
function find(key) {
	return this.datastore[key]
}
function remove(key) {
	delete this.datastore[key]
}
function showAll() { // for each .. in has been deprecated - must use for .. of
	for (key of Object.keys(this.datastore).sort()) {
		console.log(key + " -> " + this.datastore[key])
	}
}
function count() {
	var n = 0;
	for (x of Object.keys(this.datastore)) {
		++n
	}
	return n
	// can't use .length because it doesn't work on string keys
}
function clear(){
	for (key of Object.keys(this.datastore)){
		delete this.datastore[key]
	}
}

// var pbook = new Dictionary()
// pbook.add("mCheong", 2068772777)
// // pbook.add("mCheong", 2068772777)
// // pbook.add("mCheong", 654) // dupes don't work - or at least they get overwritten
// pbook.add("kCheong", 2537770011)
// pbook.add("kyCheong", 2532279970)
// pbook.add("jCheong", 2532263678)
// console.log("kim's phone number " + pbook.find("kCheong"))
// // pbook.remove("jCheong")
// pbook.showAll()
// pbook.clear()
// pbook.showAll()
// console.log(pbook.datastore)

var obj = {
	"mike": 1,
	"asdf": 1,
	"qwer": 1,
	"zxcv": 1,
}
var arr = [5,34,1234,21,3,566,4]

console.log(Object.keys(obj).sort())
console.log((arr).sort())
console.log(Object.keys(arr).sort())
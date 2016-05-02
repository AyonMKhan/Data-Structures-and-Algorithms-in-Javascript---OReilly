function List() {   
	this.listSize = 0;   
	this.pos = 0;   
	this.dataStore = []; // initializes an empty array to store list elements   
	this.clear = clear;   
	this.find = find;
	this.toString = toString;   
	this.insert = insert;   
	this.append = append;   
	this.remove = remove;   
	this.front = front;   
	this.end = end;   
	this.prev = prev;   
	this.next = next;   
	this.length = length;   
	this.currPos = currPos;   
	this.moveTo = moveTo;   
	this.getElement = getElement;   
	this.length = length;   
	this.contains = contains; 

	this.addGreater = addGreater;
	this.addSmaller = addSmaller;
	this.displayNameAndGender = displayNameAndGender;
}
function append(element){
	this.dataStore[this.listSize++] = element; //weirdly enough, listSize increments after element is set to prev. different from ++listSize (or in this case ++this.listSize)
}
function find(element){ // helper function. gets the element in the datastore array where the element was found
	for (var i = 0; i < this.dataStore.length; i++) {
		if (this.dataStore[i] == element) {
			return i
		}
	}
	return -1
}
function remove(element){ // uses splice to get that element out, assuming it's in the list - returns t if found, otherwise false
	var foundAt = this.find(element);
	if (foundAt > -1) {
		this.dataStore.splice(foundAt, 1);
		--this.listSize;
		return true;
	}
	return false
}
function length(){
	return this.listSize
}
function toString() {
	return this.dataStore;
}

var newList = new List()
newList.append("Mom")
newList.append("Dad")
newList.append("Sis")
// console.log(newList.toString())
// newList.remove("Sis")
// console.log(newList.toString())

function insert(element, after) {
	var insertPos = this.find(after);
	if (insertPos > -1) {
		this.dataStore.splice(insertPos+1, 0, element); // inserting into the returned array index
		this.listSize++;
		return true;
	}
	return false // return false if no "after" to insert to
}
function clear() {
	delete this.dataStore; // not sure why you have to actually delete rather than just set it to an empty array?
	this.dataStore = []
	this.listSize = this.pos = 0
}
function contains(element) { // not sure why it is done this way instead of using indexOf
	for (var i = 0; i < this.dataStore.length; i++){
		if (this.dataStore[i] == element) {
			console.log(this.dataStore[i])
			return true
		}
	}
	return false
	// var exists =  this.dataStore.indexOf(element)
	// if (exists > -1) { 
	// 	return true
	// } 
	// else
	// 	return false
}
// console.log(newList.contains("Sis"))
// console.log(newList.length())

function front() {
	this.pos = 0;
}
function end() {
	this.pos = this.listSize-1
}
function prev() {
	if (this.pos > 0){
		--this.pos;
	}
}
function next() {
	if (this.pos < this.listSize-1) {
		++this.pos
	}
	// return this // returning "this" so i can method chain
}
function currPos() {
	return this.pos;
}
function moveTo(position){
	this.pos = position;
}
function getElement() {
	return this.dataStore[this.pos];
}


var names = new List(); 
names.append("Clayton"); 
names.append("Raymond"); 
names.append("Cynthia"); 
names.append("Jennifer"); 
names.append("Bryan"); 
names.append("Danny");
// console.log(names.currPos())
// console.log(names.getElement())
// console.log(names.next().next().getElement())
// console.log(names.currPos())

// i can traverse through the list since I am using a couple to method chain.
// plus - can just console.log the dataStore with this type of data structure
// ***turning off method chaining so i can do the rest of the follow throughs***

var movies = require('./list/films') //had to set the list to an array since i'm using node, not spidermonkey
var movieList = new List();
for (var i = 0; i < movies.length; i++) {
	movieList.append(movies[i])
}
// console.log(movieList.dataStore)
function displayList(list) { // had to modify this loop since i wasn't getting the same results. need to check back on book's code but at this point, i just wanted to get this list iterator function to work
	for (var i = 0; i < list.length(); i++) {
		list.moveTo(i)
		console.log(list.getElement())
	}
}
// displayList(movieList)
function displayList2(list) {
	for (var i = 0; i < list.length(); i++) {
		if (list.getElement() instanceof Customer) {
			list.moveTo(i)
			console.log(list.getElement()["name"] + ", " + list.getElement()["movie"]);
		}
		else {
			list.moveTo(i)
			console.log(list.getElement())
		}
	}
}
var customers = new List();
function Customer(name, movie) {
	this.name = name;
	this.movie = movie;
}

function checkOut(name, movie, filmList, customerList) {
	if (filmList.contains(movie)) {
		var c = new Customer(name, movie) 
			customerList.append(c);
			filmList.remove(movie);
		}
		else {
			console.log(movie + " is not available")
		}
}
///////*** the above imported snippet of code is not working
// console.log(movies[3] == "Pulp Fiction") // not sure why this is saying it's not in the list....
// console.log(movieList.contains("Pulp Fiction"))

// console.log(movieList.dataStore.indexOf("Pulp Fiction"))
// checkOut("Jane Doe", "Pulp Fiction", movieList, customers)

// displayList2(customers)
// console.log(movieList.dataStore[3])
// console.log(movieList.remove("Pulp Fiction")) ///// it's not here? why?

/// *Exercises**
// Write a function that inserts an element into a list only if the element to be inserted is larger than any of the elements currently in the list. Larger can mean either greater than when working with numeric values, or further down in the alphabet, when working with textual values.
// var numList = new List()
// numList.append(1)
// numList.append(2)
// numList.append(3)
// numList.append(4)
function addGreater(newElem){
	for (var i = 0; i < this.length(); i++) {
		this.moveTo(i)
		if(newElem <= this.getElement()){
			console.log("num is not greater than the num in the list")
			return 
		}
	}
	this.append(newElem)
}
// numList.addGreater(5)
// displayList2(numList)
// Write a function that inserts an element into a list only if the element to be inserted is smaller than any of the elements currently in the list.
function addSmaller(newElem){
	for (var i = 0; i < this.length(); i++) {
		this.moveTo(i)
		if(newElem >= this.getElement()){
			console.log("num is not smaller than the num in the list")
			return 
		}
	}
	this.append(newElem)
}
// numList.addSmaller(9)
// numList.addSmaller(0)
// displayList2(numList)
// Create a Person class that stores a person’s name and their gender. Create a list of at least 10 Person objects. Write a function that displays all the people in the list of the same gender.
function Person(name, gender) {
	this.name = name;
	if(gender == "m" || gender == "f"){
		this.gender = gender;
	}
	else {
		console.log("must be m or f")
		return
	}
}
function displayNameAndGender(list){
	for(var i = 0; i < list.length(); i++) {
		if (list.getElement() instanceof Person) {
			list.moveTo(i)
			console.log("name is: " + list.getElement()["name"] + ", gender is: " + list.getElement()["gender"]);
		}
	}
}
var personList = new List()
personList.append(new Person("mike", "m"))
personList.append(new Person("kyong", "f"))
personList.append(new Person("jun", "m"))
personList.append(new Person("kim", "f"))
personList.append(new Person("jack", "m"))

displayNameAndGender(personList)

// **will have to come to these last two exercises when i figure out why the list isn't tracking the imported array.
// 4. Modify the video-rental kiosk program so that when a movie is checked out it is added to a list of rented movies. Display this list whenever a customer checks out a movie. 
// 5. Create a check-in function for the video-rental kiosk program so that a returned movies is deleted from the rented movies list and is added back to the available movies list.


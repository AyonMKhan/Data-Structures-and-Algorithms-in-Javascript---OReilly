// // creation
// var nums = []
// var nums2 = new Array();
// var nums3 = new Array(1,2,3,4,5);
// var nums4 = new Array(10)
// console.log(typeof nums)
// console.log(nums instanceof Array)
// console.log(nums.constructor.name) /// dingdingding. winrar

// console.log("this is weird".split(" "))

// var name = ["mike", "ike", "sike", "ike"]
// console.log(name.indexOf("ike")) // returns first index if found, -1 if not found
// console.log(name.lastIndexOf("ike")) // returns last index if found, -1 if not found
// console.log(name.join("")) // turns into string - no space if "", if empty, includes commas
// var names2 = ["abc", "def", "hij"]
// console.log(name.concat(names2)) // joins arrays

// console.log(name.splice(1)) // can take more than 1 arg
// console.log(names2)
// console.log(names2.slice(1, Infinity)) // can take more than 1 arg

// var nums = [1,2,3,7,8,9]; 
// var newElements = [4,5,6]; 
// nums.splice(3,0,newElements)
// console.log(nums)

// var nums = [1,2,3,7,8,9]; 
// nums.splice(3,0,4,5,6); 
// console.log(nums);

// var nums = [1,2,3,4,5]; 
// nums.reverse();
// console.log(nums);

// var names = ["David","Mike","Cynthia","Clayton","Bryan","Raymond"]; 
// nums.sort();
var nums = [3,1,2,100,4,200]; 
// // nums.sort(); // doesn't work well with nums

	// ////// CALLBACKS ///////
function compare(num1, num2) { // ususally compares strings but you can compare nums if you reduce and the sum is neg means left is smaller than right
	// console.log(num1, num2)
	// console.log(nums)
	return num1 - num2;
}
nums.sort(compare) //callback
console.log(nums)

// function square(num) {  
// 	console.log(num, num * num); 
// }
// var nums1 = [1,2,3,4,5,6,7,8,9,10]; 
// nums1.forEach(square);

// var nums2 = [2,4,6,8,10]
// var even = nums2.every(function(n){ // passing anon function as arg, will eval every int and return either t/f
// 	return n % 2 == 0;
// })
// console.log(even)
// var someEven = nums2.some(function(n){
// 	return n % 2 == 0;
// })
// console.log(someEven)

// var useReduce = nums2.reduce(function(n1, n2){ // running total sum. there is also a reverse right but starts from the right side. you can do things like concat a word
// 	return n1 + n2
// })
// console.log(useReduce)

	///// CALLBACKS THAT RETURN NEW ARRAYS /////
// var grades = [77, 88, 99, 56]
// var newGrades = grades.map(function(n){
// 	return n + 3
// })
// console.log(newGrades)
// var words = ["hello", "from", "korea"]
// var newWords = words.map(function(w){
// 	return w[0]
// })
// console.log(newWords)

// var nums = []
// for (var i=0; i<20; i++){
// 	nums.push(i)
// }
// var filterEven = nums.filter(function(x){
// 	return x % 2 == 0
// })
// console.log(filterEven)

// var grades = []
// for (var i=0; i<10; i++){
// 	grades.push(Math.floor(Math.random() * 101));
// }
// console.log(grades)
// var passingGrades = grades.filter(function(x){
// 	return x >= 60;
// })
// console.log(passingGrades)

// function afterc(str) {   
// 	if (str.indexOf("cie") > -1) {      
// 		return true;   
// 	}   
// 	return false; 
// }
// var words = ["recieve","deceive","percieve","deceit","concieve"]; 
// var misspelled = words.filter(afterc); 
// console.log(misspelled);

// MultiDi Arrays

// Array.matrix = function(numrows, numcols, initial){
// 	var arr = []
// 	for (var i = 0; i < numrows; i++){
// 		var columns = []
// 		for (var j = 0; j < numcols; j++){
// 			columns[j] = initial;
// 		}
// 		arr[i] = columns;
// 	}
// 	return arr
// }
// var testMatrix = Array.matrix(5, 5, 0)
// console.log(testMatrix)
// console.log(typeof testMatrix == "Object")

// you can use toFixed(2) to get two decimal places 

// Create a grades object that stores a set of student grades in an object. Provide a function for adding a grade and a function for displaying the student’s grade average.
// function Grades(){
// 	this.grade = null;
// 	this.count = 0
// 	this.add = add;
// 	this.avg = avg;
// }
// function add(grade) {
// 	if (!this.grade){
// 		this.grade = 0
// 	}
// 	this.grade += grade;
// 	this.count++
// }
// function avg(){
// 	return this.grade / this.count
// }
// var newGrade = new Grades();
// newGrade.add(100)
// newGrade.add(90)
// console.log(newGrade.avg())
// //////
// Store a set of words in an array and display the contents both forward and backward.
// var arr = ["hi", "bye", "die"]
// console.log(arr)
// console.log(arr.reverse())
//////
// Modify the weeklyTemps object in the chapter so that it stores a month’s worth of data using a two-dimensional array. Create functions to display the monthly average, a specific week’s average, and all the weeks’ averages.
// function weeklyTemps() {   
// 	this.currentWeek = [];
// 	this.dataStore = [];   
// 	this.add = add;   
// 	this.average = average; 
// }
// function add(temp) {
// 	if(this.currentWeek.length > 6){
// 		this.dataStore.push(this.currentWeek);
// 		this.currentWeek = [];
// 	}
// 	this.currentWeek.push(temp); 
// }
// function average() {   
// 	var total = 0;   
// 	for (var j = 0; j < this.currentWeek.length; j++){
// 		total += this.currentWeek[j];
// 	}
// 	for (var i = 0; i < this.dataStore.length; ++i) { 
// 		for (var k = 0; k < this.dataStore[i].length; k++){
// 			total += this.dataStore[i][k]; 
// 		}  
// 	}   
// 	return total / ((this.dataStore.length * 7) + this.currentWeek.length); 
// }
// var newWeekTemps = new weeklyTemps()
// newWeekTemps.add(10)
// newWeekTemps.add(20)
// newWeekTemps.add(30)
// newWeekTemps.add(40)
// newWeekTemps.add(50)
// newWeekTemps.add(10)
// newWeekTemps.add(20)
// newWeekTemps.add(30)
// newWeekTemps.add(40)
// newWeekTemps.add(50)
// newWeekTemps.add(10)
// newWeekTemps.add(20)
// newWeekTemps.add(30)
// newWeekTemps.add(40)
// newWeekTemps.add(50)
// newWeekTemps.add(10)
// newWeekTemps.add(20)
// newWeekTemps.add(30)
// newWeekTemps.add(40)
// newWeekTemps.add(50)
// console.log(newWeekTemps.average())

// Create an object that stores individual letters in an array and has a function for displaying the letters as a single word.
function Letters(){
	this.char = [];
	this.addLetters = addLetters;
	this.displayWord = displayWord;
}
function addLetters(k){
	this.char.push(k);
}
function displayWord(){
	return this.char.join(" ");
}
var newLet = new Letters()
newLet.addLetters("hi")
newLet.addLetters("I")
newLet.addLetters("am")
newLet.addLetters("Mike")
// console.log(newLet.displayWord())




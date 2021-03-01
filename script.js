console.log("Javascript practise");

// in-line comment

/* This is a 
multi-line comment */





/* Data Types:
undefined, null, boolean, string, symbol, number and object
*/





/* 1------variable*/
/*
var myName = "Suraj"; //var is used for through out the code

myName = 8;

let ourName = "Adhikary"; //let is useful only with in the scope

const pi = 3.14; //const is used for unchangable value
*/





/* 2------Storing values with Assignment Operator*/
/*
var a;
var b = 2;
console.log(a);

a = 7;

b = a;

console.log(b);
*/





/* 3------Initializing Variables with Assignment Operator*/
/*
var a = 5;
var b = 10;
var c = "I am a";


a = a + 1;
b = b + 5;
c = c + " String";

console.log(a);
console.log(b);
console.log(c);
*/





/* 4------Case Sensitivity in variables*/
/*
//javaScript is case sensitive
var titleCaseOver; // In variable first letter should be small
					//first letter of second word should be capital letter 

titleCaseOver = 3000; 
*/





/* 5------Escape quatation mark in String*/
/*
var myStr = "I am a \"double quoted\" string inside \"double quoted\"";
			//just add backslash before quotation
console.log(myStr);
*/





/* 6------Quoting String with Single Quotes*/
/*
var myStr = 'I am a "double quoted" string inside "double quoted"';
			//we can use single quote in starting as well no need to add backslash
console.log(myStr);
*/





/* 7------Concatination of String*/
/*
var myName = "I am" + " Suraj";
console.log(myName);

var firstName = "Suraj ";
var lastName = "Adhikary";
var name = firstName + lastName;
console.log(name);

var adjective = "awesome";
var sentence = "I am ";
sentence += adjective;
console.log(sentence);
*/





/* 8------Find String Length*/
/*
var nameLength = 0;
var name = "Suraj";

nameLength = name.length;

console.log(nameLength);
*/





/* 9------Bracket Notation to Find First Character or nth character in String*/
/*
var firstLetterOfFirstName = "";
var secondLetterOfFirstName = "";
var firstName = "Suraj";

firstLetterOfFirstName = firstName[0];
secondLetterOfFirstName = firstName[1];

console.log(firstLetterOfFirstName);
console.log(secondLetterOfFirstName);
*/





/* 10------String Immutibility*/
/*
var myStr = "Jello World";

myStr[0] = "H"; // won't work
myStr = "Hello World";

console.log(myStr);
*/





/* 11------Bracket notation to find the last character of a string*/
/*
var lastLetterOfFirstName = "";
var firstName = "Suraj";

lastLetterOfFirstName = firstName[firstName.length - 1];

console.log(lastLetterOfFirstName);
*/





/* 12------Word Blanks*/
/*
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
	var result = "";

	result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;

	return result;
}


console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));
*/





/* 13------Arrays*/
/*
var myArray = ["Suraj", 46];

var nestedArray = [["Bulls", 23], ["whiteSnow"]]; //nested Array
*/





/* 14------Access array data with index*/
/*
var myArray = [15, 23, 56];

var myData = myArray[0];

console.log(myData);
*/





/* 15------Modify array data with index*/
/*
var myArray = [15, 23, 56];

myArray[1] = 20;

console.log(myArray);
*/





/* 16------Access Multi-Dimensional Arrays With Indexes*/
/*
var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];

var myData = myArray[3][0][2]; //[arrayIndex][withIn arrayIndex][withIn within arrayIndex]

console.log(myData);
*/





/* 17------manipulate array with Push */
/*
var myArray = [["John", 23], ["cat", 3]];

myArray.push("dog", 4);

console.log(myArray);
*/





/* 18------manipulate array with Pop */
/*
var myArray = [1, 2, 3];

var removedFromMyArray = myArray.pop();
// removedFromMyArray is now equal to 3 (lastElement) and myArray equals to [1, 2] 

console.log(myArray);
*/





/* 19------manipulate array with Shift */
/*
var myArray = [1, 2, 3];

var removedFromMyArray = myArray.shift();
// removedFromMyArray is now equal to 1 (firstElement) and myArray equals to [2, 3] 

console.log(myArray);
*/





/* 20------manipulate array with unshift */
/*
var myArray = [1, 2, 3];

myArray.shift(); //myArray is now equals [2, 3]

myArray.unshift("Happy"); //myArray is now equals ["Happy", 2, 3]

console.log(myArray);
*/





/* 21------Function*/
/*
function reusableFunction(){
	console.log("hi! There");
}

reusableFunction();
*/





/* 22------Passing value to function with arguments*/
/*
function functionWithArguments(a, b){
	console.log(a * b);
}

functionWithArguments(9, 8);
*/





/* 23------Return value with function*/
/*
function timesFive(num) {
	return num * 5;
}

console.log(timesFive(8));
*/





/* 24------set in line*/
/*
function nextInLine(arr, item) {
	arr.push(item);
	return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr)); //JSON.stringify is used to convert the array into string for better understandng, we can use simple testArr no problem
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
*/





/* 25------If statement*/
/*
function trueOrFalse(isItTrue) {
	if(isItTrue) {
		return "Yes, it is true";
	}

	return "No, it is false";
}

console.log(trueOrFalse(true));
*/





/* 26------strict equal operator*/
/*  3 == '3' --> will return True, type conversion autometically
	3 === '3' --> strictly equal operator; will return false, compare integer with string
	3 !== '3' --> strictly inequal operator; will return true.
*/
/*
function compareEquality(a, b) {
	if (a === b) {
		return "Equal";
	}

	return "Not Equal";
}

console.log(compareEquality(10, '10'));	
*/





/* 27------Switch statement */
/*
function caseInSwitch(val) {
	var answer = "";
	switch(val) {
		case 1:
			answer = "alpha";
			break;

		case 2:
			answer = "beta";
			break;

		case 3:
			answer = "gamma";
			break;

		case 4:
			answer = "delta";
			break;

		case 5:
		case 6:
		case 7:
			answer = "thita";
			break;

		default :
			answer = "stop";
			break;
	}
	return answer;
}

console.log(caseInSwitch(6));
*/





/* 28------return boolean result */
/*
function isLess(a, b) {
	// if (a < b) {
	// 	return true;
	// } else {
	// 	return false;
	// }
	//we can skip the above code because computer answer only in true or false

	return a < b;
}

console.log(isLess(30,20));
*/





/* 29------create Javascript Object */
/*
var myCar = {
	"brand": "Lamborgini",
	"model": "Aventador",
	"engine": "V12 Turbo",
	"price": "6.30 crore INR"
}
*/





/* 30------access Object properties with dot notation */
/*
var myCar = {
	"brand": "Lamborgini",
	"model": "Aventador",
	"engine": "V12 Turbo",
	"price": "6.30 crore INR"
};

//access with dot notation
var carModel = myCar.model;
var carPrice = myCar.price;

console.log(carModel);
console.log(carPrice);
*/





/* 31------ access object properties with bracket notation*/
/*
var myCar = {
	"brand name": "Lamborgini",
	"model name": "Aventador",
	"engine type": "V12 Turbo",
	"price in India": "6.30 crore INR"
};

//we have to use bracket notation only if the object variables has space in it
//access with bracket notation
var carModel = myCar["model name"];
var carPrice = myCar['price in India'];

console.log(carModel);
console.log(carPrice);
*/





/* 32------access object properties with variables */
/*
var testObj = {
	12: "Namath",
	16: "Montana",
	19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];

console.log(player);
*/





/* 33------updating object properties */
/*
var myCar = {
	"brand": "Lamborgini",
	"model": "Aventador",
	"engine": "V12 Turbo",
	"price": "6.30 crore INR"
}

//access with dot notation
myCar.model = "The Lamborgini";
myCar.price = "7 crore INR";

console.log(myCar.model);
console.log(myCar.price);
*/





/* 34------add properties in an object */
/*
var myCar = {
	"brand": "Lamborgini",
	"model": "Aventador",
	"engine": "V12 Turbo",
	"price": "6.30 crore INR"
}

//add properties
myCar.color = "Blue";
myCar['speed'] = "350 kmph";

console.log(myCar.color);
console.log(myCar.speed);
*/





/* 35------delete properties in object */
/*
var myCar = {
	"brand": "Lamborgini",
	"model": "Aventador",
	"engine": "V12 Turbo",
	"price": "6.30 crore INR",
	"colour": "blue"
}

//delete properties
delete myCar.colour;

console.log(myCar.colour);
*/





/* 36------using ojects for lookups */
/*
function phoneticLookup(val) {
	var result = "";

	
	// switch(val) {
	// 	case "Steve":
	// 		result = "Jobs";
	// 		break;
	// 	case "Elon":
	// 		result = "Musk";
	// 		break;
	// 	case "Mark":
	// 		result = "Zuckarburg";
	// 		break;
	// 	case "Jeff":
	// 		result = "Bezos";
	// 		break;
	// 	case "Bill":
	// 		result = "Gates";
	// 		break;
	// 	case "Rechard":
	// 		result = "Branson";
	// 		break;
	// }
	
	//Instead of using this Switch statement we can simply use Objects and perform the same task.

	var lookup = {
		"Steve": "Jobs",
		"Elon": "Musk",
		"Mark": "Zuckarburg",
		"Jeff": "Bezos",
		"Bill": "Gates",
		"Rechard": "Branson"
	};

	// result = lookup.val; //we can't use dot notation to access the data, we have to use the bracket notation
	result = lookup[val];

	return result;
}

console.log(phoneticLookup("Elon"));
*/





/* 37------check the property exist in the object or not*/
/*
var myObj = {
	"gift": "pony",
	"pet": "kitten",
	"bed": "sleigh"
};

function checkObj(checkProp) {
	if (myObj.hasOwnProperty(checkProp)) {
		return myObj[checkProp];
	} else {
		return "Not found";
	}
}

console.log(checkObj("gift"));
*/





/* 38------manipulating complex objects */

// 1. myMusic is an Array.
// 2. inside myMusic there is an oject set.
// 3. inside that object set there is an object named "formats" which is an array. 
// 4. Don't get confused, the data within the "{" and "}" is known as objects.
/*
var myMusic = [
	{
		"artist": "Billy Joel",
		"title": "Piano man",
		"release_year": 1973,
		"formats": [
			"CD",
			"LP",
			"Youtube video"
		],
		"gold": true;
	}
]

*/





/* 39------Accessing nested Objects */
/*
var myStorage = {
	"car": {
		"inside": {
			"glove box": "maps",
			"passenger seat": "crumbs"
		},
		"outside": {
			"trunk": "jack"
		}
	}
};

var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);
*/





/* 40------Accessing nested Arrays */
/*
var myPlants = [
	{
		type: "flowers",
		list: [
			"rose",
			"Lily",
			"Tulip"
		]
	},
	{
		type: "trees",
		list: [
			"fir",
			"pine",
			"birch"
		]
	}
]

var secondTree = myPlants[1].list[1];

console.log(secondTree);
*/





/* 41------Record collection*/
/*
var collection = {
	
	"2548": {
		"album": "Slippery When Wet",
		"artist": "Bon Jovi",
		"tracks": [
			"Let It Rock",
			"You Give Love a Bad Name"
		]
	},

	"2468": {
		"album": "1999",
		"artist": "Prince",
		"tracks": [
			"1999",
			"Little Red Corvette"
		]
	},

	"1245": {
		"artist": "Robert Palmer",
		"tracks": []
	},

	"5439": {
		"album": "ABBA Gold"
	}

};

//Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection)); //collectionCopy will copy the object

//update records
function updateRecords(id, prop, value) {
	if (value === "") {
		delete collection[id][prop];
	} else if (prop === "tracks") { //tracks is the array, so we need to have special treatment for him. ;)
		collection[id][prop] = collection[id][prop] || [];
		collection[id][prop].push(value);
	} else {
		collection[id][prop] = value;
	}

	return collection;
}

updateRecords("2548", "tracks", "test");
console.log(updateRecords("5439", "artist", "ABBA"));
*/





/* 42------ Iterate with while loop */
/*
var myArray = [];

var i = 0;
while(i < 5){
	myArray.push(i);
	i++;
}

console.log(myArray);
*/





/* 43------ Iterate with for loop */
/*
var myArray = [];

for (var i = 0; i < 5; i++){
	myArray.push(i);
}

console.log(myArray);
*/





/* 46------ addition of array elements using for loop */
/*
var myArray = [4, 5, 10, 8, 17];
var myTotal = 0;

for(var i = 0; i < myArray.length; i++) {
	myTotal += myArray[i];
}

console.log(myTotal);
*/





/* 47------ nested for loop */
/*
function multiplyAll(arr) {
	var prod = 1;

	for(var i = 0; i < arr.length; i++) {
		for(var j = 0; j < arr[i].length; j++) {
			prod *= arr[i][j];
		}
	}

	return prod;
}

var product = multiplyAll([[1,2], [3,4], [5,6,7]]);

console.log(product);
*/





/* 48------ do-while loop */
//unlike while loop, do-while loop will run the condition atleast once for sure.
/*
var myArray = [];
var i = 10;

do {
	myArray.push(i);
	i++;
} while(i < 5);

console.log(i , myArray);
*/





/* 49------ Profile Lookup */
/*
var contact = [

	{
		"firstName": "Naruto",
		"lastName": "Uzumaki",
		"number": "9933029088",
		"likes": ["Sasuke", "Iruka", "Jaraya", "Kakashi"]
	},

	{
		"firstName": "Sasuke",
		"lastName": "Uchiha",
		"number": "9064009597",
		"likes": ["Naruto", "Itachi"]
	},
	
	{
		"firstName": "Harry",
		"lastName": "Potter",
		"number": "9800345612",
		"likes": ["Hogwarts", "Magic", "Hagrid"]
	},

	{
		"firstName": "Sherlock",
		"lastName": "Holmes",
		"number": "9153426703",
		"likes": ["Intriguing cases", "violin"]
	}

];

function lookUpProfile(name, prop) {
	for (var i = 0; i < contact.length; i++) {
		if (contact[i].firstName === name) {
		    return contact[i][prop] || "No such property";
		}
	}

	return "No such contact";
}

var data = lookUpProfile("Sasuke", "lastName");

console.log(data);
*/





/* 50------ Generate Random Fraction Number */
/*
function randomFraction(argument) {
	
	//Math.random() function will generate random number between 0 and 1, it can be 0 but never become 1.
	return Math.random();
}

console.log(randomFraction());
*/





/* 51------ Generate Random Whole Number */	 
/*
var randomNumberBetween0and19 = Math.floor(Math.random() * 20); //will return number between 0 and 19

function randomWholeNumber() {
	
	return Math.floor(Math.random() * 10); //will return number between 0 and 9
}

console.log(randomWholeNumber());
*/





/* 52------ Generate random whole number within a range*/
/*
function randomRange(myMin, myMax) {
	
	return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(8, 15);

console.log(myRandom);
*/





/* 53------ Use of parseInt function */
/*
function convertToInteger(str) {
	return parseInt(str); //parseInt will convert any string into integer
}

console.log(convertToInteger("67"));
*/





/* 54------ Use parseInt function with radix */
/*
function convertToInteger(str) {
	return parseInt(str, 2); //if it was default then computer would think it as an decimal number but now computer think it as binary number
}

console.log(convertToInteger("101101"));
*/





/* 55------ Use coditional (Tarnary operator) */
/*
function checkEquals(a, b) {
	
	return a === b ? "Yes" : "No";
}

console.log(checkEquals(7, 2));
*/





/* 56------ Using multiple conditional (Tarnary operator) */
/*
function checkSign(num) {
	return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
}

console.log(checkSign(-6));
*/





/* 57------ Difference between var and let */
/*
//let doesn't let you declare the variable twice, which is possible in var. 
var myName = "Suraj";
var myName = "Tuku";
//Possible in var

let Name = "Anita";
let Name = "Arit";
//not possible in let

//var keyword is used in globaly or inside a function
//let keyword is usefull only in block of parenthesis
*/





/* 58------ Using Read-only keyword const */
/*
function printManyTimes(str) {
	"use strict";

	const SENTENCE = str + " awesome"; //declare const variable with capital letter , to remember it.

	for (let i = 0; i < str.length; i+=2) {
		console.log(SENTENCE);
	}

}

printManyTimes("I am");
*/





/* 59------ Mutate the const array */
/*
const s = [4, 6, 9];
function editInPlace() {
	"use strict";

	// s = [9, 6, 4]; //will not work

	s[0] = 1;
	s[1] = 6;
	s[2] = 4;
	s[3] = 0;

}

editInPlace();

console.log(s);
*/





/* 60------ Prevent Object Mutation */
/*
function freezeObj() {
	"use strict";
	const MATH_CONSTANTS = {
		PI: 3.14
	};

	Object.freeze(MATH_CONSTANTS); // use Object.freeze() function, if you don't want to change the value of object

	try {
		MATH_CONSTANTS.PI = 99;
	} catch( ex ) {
		console.log(ex);
	}

	return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
*/





/* 61------ Use Arrow Functions to Write Concise Anonymous Functions */
/*
// var magic = function() { //Anonymous function
// 	return new Date();
// };

//Instead of this, we can simply write like this, to make it more simple

const magic = () => new Date();

*/





/* 62------ Write arrow function with parameters */
/*
// var myConcat = function(arr1, arr2) {
// 	return arr1.concat(arr2);
// };

//Arrow Function

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));
*/





/* 63------ Write higher order Arrow Functions */
/*
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
	const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
	return squaredIntegers;
};


const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
*/





/* 64------ Write higher order Arrow Functions */
/*
const increment = (function() {
	return function increment(number, value = 1) {
		return number + value;
	};
})();
console.log(increment(5, 2));
console.log(increment(3));
*/





/* 65------ Use the Rest Operator with Function Parameters */
/*
// const sum = (function() {
// 	return function sum(x, y, z) {
// 		const args = [x, y, z];
// 		return args.reduce((a, b) => a + b, 0);
// 	};
// })();

const sum = (function() {
	return function sum(...args) {  //"..." is the rest operator, which converts all arguments into an array called args
		return args.reduce((a, b) => a + b, 0);
	};
})();

console.log(sum(1, 2, 3, 8));
*/





/* 66------ Use the Spread Operator to Evaluate Arrays In-Place */
/*
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
(function() {
	//arr2 = arr1;  // arr2 and arr1 are equals array, changes made in any of those will take place in both the array
	arr2 = [...arr1];  //"..." is the Spread operator, just like rest operator. It will copy the exact array
	arr1[0] = "DEC";
})();
console.log(arr2);
*/





/* 67------ Use Destructing Assignment to Assign Variables form Objects */
/*
var voxel = {x: 3.14, y: 7.4, z: 6.54 };

var x = voxel.x; // x = 3.14
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54

const { x : a, y : b, z : c } = voxel; // a = 3.14, b = 7.4, c = 6.54, will copy the value of x, y and z into a, b and c respectively

console.log(a, b, c);

const AVG_TEMPERATURES = {
	today: 77.5,
	tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
	"use strict";

	const { tomorrow : tempOfTomorrow } = avgTemperatures; //will copy the tomorrow field of avgTemperature into tempOfTomorrow

	return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));
*/





/* 68------ Destructing Assignment with Nested Objects */
/*
const LOCAL_FORECAST = {
	today: { min: 72, max: 83 },
	tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
	"use strict";

	const { tomorrow : { max : maxOfTomorrow }} = forecast;

	return maxOfTomorrow;

}

console.log(getMaxOfTmrw(LOCAL_FORECAST));
*/





/* 69------ Use Destructing Assignment to Assign Variables form Arrays */
/*
const [z, x, , y] = [1, 2, 3, 4, 5, 6]; // assigned 1, 2 and 4 into z, x, y. skipped 3
console.log(z, x, y);

let a = 8, b = 6;
(() => {
	"use strict";
	[a, b] = [b, a];
})();

console.log(a);
console.log(b);
*/





/* 70------ Use Destructing Assignment with the Rest Operator */
/*
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {

	const [ , , ...arr] = list; // says leave the first and second number and take remaining numbers into the variable arr
	
	return arr;
}
const arr = removeFirstTwo(source);

console.log(arr);
console.log(source);
*/





/* 71------ Use Destructing Assignment to Pass an Object as a Function's Parameters */
/*
const stats = {
	max: 56.78,
	standard_deviation: 4.34,
	median: 34.54,
	mode: 23.87,
	min: -0.75,
	average: 35.85
};

const half = (function() {

	// return function half(stats) {
	// 	return (stats.max * stats.min) / 2.0;
	// };

	//instead of passing entire data of stats, we can simply pass the required information only

	return function half({ max, min }) {
		return (max * min) / 2.0;
	};

})();

console.log(stats);
console.log(half(stats));
*/





/* 72------ Create Strings using Template Literals */
/*
const person = {
	name: "Suraj",
	age: "22"
};


//Template literal with multi-line and string interpolation

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} year old.`;

//The advantage of using Template literal (`) instead of quotation mark is
// 1. we can make multi-line string.
// 2. we can write single or double quotation mark, we don't even have to escape it.
// 3. we can write the variables in the string. (e.g:    ${person.name}    ) 


console.log(greeting);

const result = {
	success: ["max-length", "no-amd", "prefer-arrow-functions"],
	failure: ["no-var", "var-on-top", "linebreak"],
	skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
	const resultDisplayArray = [];
	for(let i = 0; i < arr.length; i++){
		resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
	} 

	return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray);

*/





/* 73------ Write Concise Object Literal Declarations Using Simple Fields*/
/*
const createPerson = (name, age, gender) => ( { name, age, gender } );
console.log(createPerson("Suraj", 22, "male"));
*/





/* 74------ Write Concise Declarative Functions */
/*
const bicycle = {
	gear: 2;
	setGear(newGear) {  // This line works exactly same as this line => setGear: function(newGear)
		"use strict";
		this.gear = newGear;
	}
};

bicycle.setGear(3);
console.log(bicycle.gear);
*/





/* 75------ Use class Syntex to Define a Constructor Function */
/*
function makeClass() {
	class Vegetable {
		constructor(name){
			this.name = name;
		}
	}
	return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);
*/


















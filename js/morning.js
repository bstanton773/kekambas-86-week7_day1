console.log('Hello this is the main.js file');

// Basics of JavaScript

/*
    MultiLine Comment in JavaScript
    -- Variable Declarations in JavaScript --
    Primitive Types: Strings, Numbers, Booleans, Undefined, Null
    Objects: Objects, Arrays, Functions
*/


// Declaring a String Type
var myName = 'Brian';

// console.log() is equivalent to python's print()
console.log(myName);
console.log(typeof myName);

// Strings can be deilimited by '', "", or ``. The tick marks `` have a special behavior to format
console.log('My name is ${myName}')
console.log("My name is ${myName}")
console.log(`My name is ${myName}`)


// Declaring with no value
var myAge;
console.log(myAge);
console.log(typeof myAge);

// setting myAge to an Integer
myAge = 99;
console.log(myAge);
console.log(typeof myAge);

// Declaring a Float
var pi = 3.14159;
console.log(pi)
console.log(typeof pi)

// Booleans
var someBool = true;
var anotherBool = false;

console.log(someBool, anotherBool)
console.log(typeof someBool, typeof anotherBool)


// Undefined Datatype
var something;
console.log(something);
console.log(typeof something);


// Null Datatype
var nullThing = null;
console.log(nullThing);
console.log(typeof nullThing);


// OBJECT TYPES //

// Object
var person1 = {};
console.log(person1);
console.log(typeof person1);

var person2 = {
    first: 'Brian',
    last: 'Stanton',
    age: 99,
    address: {
        number: '123 W 4th',
        city: 'Chicago',
        state: 'Illinois'
    }
};


console.log(person2);
console.log(typeof person2);


// Access data within an object
// Bracket notation
console.log(person2['age']);
console.log(person2['last']);
console.log(person2['address']['city']);


// Dot Notation
console.log(person2.age);
console.log(person2.last);
console.log(person2.address.city)


// Array Type
var myCoolArray = [10, 20, 30, 'brian', true, null, undefined, [1, 2, 3], {test: 'test123'}];
console.log(myCoolArray);
console.log(typeof myCoolArray);

// Must use bracket notation with Array index
console.log(myCoolArray[2]);

// length property on Array
console.log(myCoolArray.length);


function test(){};

console.log(test);
console.log(typeof test);

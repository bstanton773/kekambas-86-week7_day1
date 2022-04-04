// console.log('Hello this is connected')

// var sets our variables as a global variable
var myName = 'Brian';
var myAge;

console.log(myName);
console.log(myAge);

// let - declare a variable - similar to var but block scoped
let yourName = 'Student';
let yourAge;


console.log(yourName);
console.log(yourAge);

// You can re-assign both var and let declared variables
myName = 'Brian S';
yourName = 'Cool Student';

console.log(myName, yourName);

// You can redeclare var, but cannot redeclare let
var myName = {first: 'Brian', last: 'Stanton'};
console.log(myName);

// let yourName = {first: 'Cool', last: 'Student'}; \\ SyntaxError: Identifier 'yourName' has already been declared
// console.log(yourName);


// Block Scoping

if (true){
    var test1 = 'This is a test'; // Global Variable - var
    let test2 = 'This is also a test'; // Block Scope Variable - let
    console.log('Hello');
};

console.log(test1);

// console.log(test2); // ReferenceError: test2 is not defined

// const Declaration
// similar to let (block scoped and cannot be redeclared), but also cannot be reassigned a value either

const myCurrentAge = 99
console.log(`My current age: ${myCurrentAge}`)

const myBirthday = true;

if (myBirthday){
    const myFavColor = 'Blue';
    console.log('Happy Birthday!')
    // myCurrentAge += 1 // TypeError: Assignment to constant variable.
    console.log(`My current age: ${myCurrentAge}`)
};

// console.log(`My favorite color is ${myFavColor}!`) //  ReferenceError: myFavColor is not defined

// const declarations with non-primitive types
const cities = ['Chicago', 'New York', 'Los Angeles'];

console.log(cities);

cities[1] = 'Denver';

console.log(cities);

// cities = ['Austin', 'Portland'];


// Variable Hoisting
console.log(hoistingExample);

console.log('Some other stuff');



var hoistingExample = 'I am an example of hoisting';

myFuncTest();

function myFuncTest(){console.log('This function is executing')};

// console.log(newHoist);

const newHoist = 'Testing hoisting with let';



console.clear();


/*
    JavaScript Operators
*/

// Math Operators

// Addition (+)
let sum = 5 + 5;
console.log(sum);
sum += 5; // sum = sum + 5
console.log(sum);
sum++; // sum = sum + 1 OR sum += 1
console.log(sum);

// Subtraction (-)
let diff = 15 - 5;
console.log(diff);
diff -= 5; // diff = diff - 5
console.log(diff);
diff--; // diff = diff - 1 OR diff -= 1
console.log(diff);

// Multiplication (*) and Division (/)
let prod = 5 * 5;
console.log(prod);
prod *= 5;
console.log(prod);

let quotient = 25 / 5;
console.log(quotient);
quotient /= 5;
console.log(quotient);


// Exponents (**)
let square = 5 ** 2;
console.log(square);
square **= 2;
console.log(square);

// Modulo (%)
let remainder = 19 % 4;
console.log(remainder);
remainder %= 2;
console.log(remainder);


// Floor Division
let floor = Math.floor(10/3)
console.log(floor);


let firstHalf = 'My name '
let secondHalf = 'is Brian'

let full = firstHalf + secondHalf
console.log(full);


let intro = 'My age is ';
let personAge = 55;

let stringAndInt = intro + personAge;
console.log(stringAndInt);


console.log(square, typeof square);

let crazyStuff = square + '4';
console.log(crazyStuff); // A. undefined B. 629 C. 6254 D. 625+4    
console.log(typeof crazyStuff);


let moreCrazyStuff = square - '4';
console.log(moreCrazyStuff); // A. undefined B. 621 C. 6254 D. 625-4  


// JavaScript Comparisons
console.clear();

// Equal To And Allow Type Conversion (==), Less Than (<), Greater Than (>), Not Equal with type conv(!=), Not Equal no type conv (!==)
// Less Than or Equal To (<=), Greater Than or Equal To (>=)
// Equal To And No Type Conversion (===)

console.log(5 == 5);
console.log(5 == 5.0);
console.log(5 == '5'); 
console.log(5 === '5'); 

console.log(1 == true);

console.log('HELLO')
console.log(5 != '5')
console.log(5 !== '5')


console.log('10' > 5);

let x = '1000';
let y = '9';

console.log(x > y);


// Object Comparisons -- ONLY CARES ABOUT REFERENCE
let objA = {
    a: 123,
    b: 456
};

let objB = {
    a: 123,
    b: 456
};


console.log(objA === objB);

let objC = objA;

console.log(objA === objC);
console.log(objB === objC);


let arr1 = [1, 2, 3, 4]
let arr2 = [1, 2, 3, 4]
console.log(arr1 === arr2);
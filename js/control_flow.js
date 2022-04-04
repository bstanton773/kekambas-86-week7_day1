// Control Flow!

// Conditionals 
// if (condition){code to execute if true}
let myPersonAge = 15;

console.log('Begin');

if (myPersonAge >= 65){
    console.log('Senior')
} else if (myPersonAge >= 18){
    console.log('Adult')
} else {
    console.log('Child')
}
console.log('End');


// Ternary Operator - (condition) ? value if true : value if false

let ageGroup = (myPersonAge >= 65) ? 'Senior' : 'Adult';
console.log(ageGroup);


let ageGroup2 = (myPersonAge >= 65) ? 'Senior' : (myPersonAge >= 18) ? 'Adult' : 'Child';
console.log(ageGroup2);


// Multiple Conditions
// && = and
// || = or

myPersonAge = 85

if (myPersonAge > 18 && myPersonAge < 40){
    console.log('Young Adult')
}

if (myPersonAge < 10 || myPersonAge > 75){
    console.log('You get in for free!')
}


console.clear();


/*
    Looping In JavaScript
    for, for...in, for...of, while, do while
*/

// Standard for loop
// for (counter; expression/condition; incrementation/decrementation){ code to execute each loop }

console.log('Loop has started');

for (let i = 0; i < 10; i++){
    console.log(i);
};


console.log('Loop has ended');

console.log('Loop has started');

for (let i = 10; i > 0; i-=2){
    console.log(i);
};


console.log('Loop has ended');


let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

for (let x=0; x < colors.length; x++){
    console.log(x, colors[x])
}


// for...in - used to iterate over an object
// for (let <key_name> in <object>){ code to execute each loop }

let teams = {
    mlb: 'White Sox',
    nba: 'Bulls',
    nfl: 'Bears',
    nhl: 'Blackhawks'
}


for (let t in teams){
    console.log(t, teams[t]);
}


// for...of - used to iterate over an iterable (Array, String, etc.)
// for (let <variable> of <iterable>){ code to execute each loop }
let planets = ['Mars', 'Jupiter', 'Earth', 'Mercury', 'Saturn', 'Uranus', 'Venus', 'Neptune']

for (let p of planets){
    console.log(p);
};


const myString = 'Hello world'

for (let letter of myString){
    console.log(letter);
};


// while loop
// while (condition){ code to execute until condition is false }

let num1 = 1;

while (num1 < 25){
    console.log(num1);
    num1 += 5
}

console.clear();
// DO While Loop ... DO the first part AT LEAST ONCE
// if the condition is still met, continue the while loop
// do { code to execute } while (condition)

let k = 0;
do {
    console.log(k);
    k++
} while( k < 10);






// Add loops and conditions together
for (let p of planets){
    if (p === 'Earth'){
        console.log(`${p} is a nice place to live...for now`)
    } else {
        console.log(`${p} is inhabitable`)
    }
}
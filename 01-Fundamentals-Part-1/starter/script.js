const country = "The United States of America";
const continent = "North America";
let population = 330000000;
let isIsland = false;
const language = 'English';


/*
//The Console
let js = "amazing";

let sum = 40 + 8 + 23 - 10;
console.log(sum);

console.log("Jonas");
console.log(23);

//Variables
let firstName = "yar";
console.log("hi " + firstName)
console.log("hi " + firstName)
console.log("hi " + firstName)

let country = "The United States of America";
let continent = "North America";
let population = "300,000,000";

console.log(country);
console.log(continent);
console.log(population);

console.log("hi, my name is " + firstName);
console.log("I live in  " + country);
console.log("Population: " + population)
console.log("in " + continent);
*/

/*
// Data types
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 38);
// console.log(typeof 'yar');

javaScriptIsFun = 'YES!'

console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

let isIsland = false;
let language;

console.log(isIsland)
console.log(typeof isIsland);
console.log(population)
console.log(typeof population);
console.log(country)
console.log(typeof country);
console.log(language)
console.log(typeof language);
*/

/*
//Let, CONST, Var

//use when variable is mutating alot
let age = 25;
age = 26;

//goto variable command
const birthyear = 1999;
//birthyear = 1998

//old school js
var job = 'Teacher'
job = 'Game Dev'

//avoid this practice
lastName = 'Pascual Mateo';
console.log(lastName)

//Practice
country = 'China'
*/

/*
//Basic Operators

//Math Operators
const now = 2037
const ageYar = now - 1999;
const ageNate = now - 1991;
console.log('yar is ' + ageYar + ' in ' + now);
console.log('nate is ' + ageNate + ' in ' + now);

console.log(ageYar * 2, ageYar / 10, 2 ** 3);
//2 ** 3 is 2 to the power of 3 => 2 * 2 * 2

const firstName = 'Yarince'
const lastName = 'Pascual Mateo'
console.log('My name is ' + firstName + ' ' + lastName);
//typeof is also in this catagory

//assigmeent operators
let x = 10 + 5; //15
x += 10 //x = x + 10 = 25
x *= 4 //x = x * 4 = 100
x++ // x = x + 1 = 101
x-- // x = x - 1 = 100
console.log(x)

//comparason opeerators
console.log(ageYar > ageNate);// >, <, >=, <=
console.log(ageNate >= 18);

const isFullAge = ageNate >= 18;

console.log(now - 1999 > now - 1991);

//practice
console.log(population / 2);
population++
console.log(population);
console.log(population > 6000000);
console.log(population < 33000000);
console.log(description);
*/

/*
//Strings and Template literals

//setup
const fName = 'Yarince'
const job = 'teacher'
const byear = 1999;
const year = 2040

//Strings
const yarince = "I'm " + fName + ', a ' + (year - byear) + ' years old ' + job;
console.log(yarince);

//Template literals
const yarNew = `I'm ${fName}, a ${year - byear} years old ${job}! `
console.log(yarNew);

console.log(`just a regular string....`);

console.log(`string
multiple
lines`)

//practice
let description = country + ' is in ' + continent + ', and its ' + population + ' people speak ' + language + ' or other languages'

description = `${country} is in ${continent}, and its ${population} people speak ${language} or other languages`

console.log(description);
*/
/*
//taking decisions if/eelse statments

const age = 19;

if (age >= 18) {
    console.log('Yar can start driving now 🚗');
} else {
    const yearsLeft = 18 - age
    console.log(`yar is to young, wait another ${yearsLeft} years`);
}

const birthyear = 1999;
let century
if (birthyear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century)

//practice
const avg = 33000000;
if (population > avg) {
    console.log(`${country}'s population is ${population - avg} above the average`)
} else if (population == avg) {
    console.log(`${country} have the average population of ${population}`)
} else {
    console.log(`${country}'s population is ${avg - population} below the average`)
}
*/

/*
//Type Conversion and coercion

//Type Conversion
const inputYear = '1999'
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18)

console.log(Number('jonas'));
console.log(typeof NaN);

console.log(String(23), 23)

//Type Coercion
console.log('I am ' + 25 + ' Years old');
console.log('23' - '10' - 3)//- turns them into a numbeer
console.log('23' + '10' + 3)//+ turns them into a string
console.log('23' * '2')//* turns them into a number
console.log('23' / '2')// / turns them into a number

let n = '1' + 1;//turns into a string '11'
n = n - 1;//turns n into a number and subtracts 1
console.log(n)//outputs 10

//practice
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> '617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143
*/

/*
//Truthy and Falsy Values

//5 Falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('yar'))
console.log(Boolean({}))
console.log(Boolean(''))

const money = 100;
if (money) {
    console.log("Don't spend it all ;)")
} else {
    console.log('You should get a job')
}

let height = 10;
if (height) {
    console.log('YAY!! height is defined')
} else {
    console.log('Height is undefined')
} 
*/

//Equality Opeerations
const age = 18;

//Strict equal
if (age === 18) console.log('you just became an adult (Strict)')

//loose equal
if (age == 18) console.log('you just became an adult (loose)')

const favourite = Number(prompt("what's your favourite number?"));
console.log(favourite)
console.log(typeof favourite)

//'28' == 28 => true '28' === 28 => false
if (favourite === 28) {
    console.log(`Cool, ${favourite} is a cool number`)
} else if (favourite === 7) {
    console.log(`7 is also a cool number`);
} else if (favourite === 9) {
    console.log(`9 is also a cool number`);
}
else {
    console.log('Number is not 28, 7 , 9');
}

if (favourite !== 28) console.log('Why not 28')

//practice
const numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));

if (numNeighbours === 1) {
    console.log('only 1 border!')
} else if (numNeighbours > 1) {
    console.log('More than 1 border')
} else {
    console.log('no borders')
}
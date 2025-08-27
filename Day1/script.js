// console.log("Hello");

//Booleans
true;
false;

//Null
null;

// Undefined
undefined;

//objects
//{}

//variables (var, let, const)
// let greeting = "Hello World!";
// console.log(greeting);

// // using let - allows reassignment
// greeting = "Good Bye!";
// console.log(greeting);

// // block scope
// {
//   let greeting = "Hello again!";
//   console.log(greeting);
// }

// const cannot be reassgined
// const thisIsMyGreeting = "Hello";
// console.log(thisIsMyGreeting);
// thisIsMyGreeting = "Good Bye";

//arithmetic operators
// console.log(2 + 2);
// let sum = 2 + 3;
// console.log(sum);

// //this
// let newNumber = 9;
// newNumber = newNumber + 1;

// //is the same as this..//
// let newNum = 9;
// newNum += 1;

// //which is also the same as..
// let newNumb = 9;
// newNumb++; //increment by 1 only

// console.log(newNumber);

//find the sum
// let num1 = 4;
// let num2 = 4;
// let sum = num1 + num2;
// console.log(sum);

// // find the sum - include a few more variables and switch up operaters
// let newNum = 10;
// let newNum2 = 5;
// console.log(newNum + newNum2);

// let num3 = 5;
// num3 += 1;
// console.log(num3);
// let num4 = 20;
// num4++;
// console.log(num4);

// //find the average declare and assign 10 diff values
// let numb1 = 1,
//   numb2 = 2,
//   numb3 = 3,
//   numb4 = 4,
//   numb5 = 5,
//   numb6 = 6,
//   numb7 = 7,
//   numb8 = 8,
//   numb9 = 9,
//   numb10 = 10;

// //find average of first 5
// let sum1 = numb1 + numb2 + numb3 + numb4 + numb5;
// let average1 = sum1 / 5;
// console.log(average1);

// //first average of last 5
// let sum2 = numb6 + numb7 + numb8 + numb9 + numb10;
// let average2 = sum2 / 5;
// console.log(average2);

// //find average of the two results
// let sum3 = average1 + average2;
// let finalAverage = sum3 / 2;
// console.log(finalAverage);

console.log(3 > 4);
console.log(5 < 10);
console.log(78 >= 60);
console.log(55 > 80);

// loose equality 2 =
console.log(5 == 5);

//strict equality 3 =
console.log(5 === 6);

console.log(3 === 3.0);

console.log("hello " + "world");
console.log("the numer is " + 7);

// escape sequence

// const frost =
//   "Nature's first green is gold, \
// Her hardest hue to hold. \
// Her early leaf's a flower; \
// But only so an hour. \
// Then leaf subsides to leaf. \
// So Eden sank to grief, \
// So dawn goes down to day. \
// Nothing gold can stay.";

// console.log(frost);

const frost = `Nature’s first green is gold,
Her hardest hue to hold.
Her early leaf’s a flower;
But only so an hour.
Then leaf subsides to leaf.
So Eden sank to grief,
So dawn goes down to day.
Nothing gold can stay.`;

console.log(frost);

const a = 5;
const b = 10;

console.log(`'a' is assigned a value of "${a}," and 'b' is assigned a value of "${b}."
Therefore, 'a' plus 'b' is equal to ${a + b}.`);
// 'a' is assigned a value of "5," and 'b' is assigned a value of "10."
// Therefore, 'a' plus 'b' is equal to 15.

let firstName = "Slim";
let lastName = "Shady";
let age = "40";

let message = `Hi, my name is ${firstName} ${lastName}. My age is ${age}`;
console.log(message);

let message2 = "My name is " + firstName + " " + lastName + ".";
console.log(message2);

console.log(1 + 2 === 3);

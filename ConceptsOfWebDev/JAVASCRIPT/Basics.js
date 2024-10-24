/* JAVASCRIPT : High-Level Dynamic Interpreted Programming Language;
 > It's a weakly typed language;
 > Sometimes refered to as js;
 > Allows Client-Side Scripting to create completly dynamic web pages;
 > In JAVASCRIPT we generally follow CAMEL-CASE (camelCase);
 > (=) is an assignment operator;
 > Classes will use UpperCamelCase;
 > Code inside the braces are considered as a block and it describes the scope as well;
*/

/* Mutating & Non-Mutating:

 > Mutating: functions/methods which change variable which called it;
    eg: array.push("string"/variable);
 > Non-Mutating: functions/methods which not change variable which called it;
    eg: .indexOf("string"/variable);

 >> strings are immutable;
 >> arrays are mutable;
*/

//single line commenting

console.log("Shree Narayan");
var score = 90;
var score = 70;

/* Instead of var we use let and const;
var : provides redeclaration of variable and change it's value again and again;
let : doesn't allow redeclaration of variable but it's value can be changed again;
const : doesn't allow redeclaration of variable and it's value can't be changed again;
*/

/* 7 data types :-
1.> numbers;
2.> string: (''), ("");
3.> boolean: (true), (false);
4.> null: (null) - {intentionally absence of value};
    eg: let value = null;
5.> undefined: variable declared but value not given;
6.> object;
7.> symbols;
*/

// Template Literals::Here we use (``) :
first = "Hello";
second = "World";
let fullName = `We want to say ${first} ${second}`;
console.log(fullName);

/* variables.methods(): Eg-
.indexOf();
.trim();
.include();
etc.
*/
console.log(fullName.toUpperCase());

// typeof [variable]: tells type of variable weather number, string, boolean, etc;
/* Mathamatical Operators & Pricidence: 
1.> +
2.> -
3.> /
4.> %
5.> *
6.> ** (power)

>>> Also, remember pricidence rule also;
1.> () - brackets
2.> ** - power
3.> *, /, % (from left to right)
4.> +, - (from left to right)
*/ 

/* Loose Equality(==) & Strict Equality(===) llly, for Not-Equality => (!=) & (!==):
-
>> Loose Equality(==);
>> Loose Not Equality(!=);
>> Strict Equality(===);
>> Strict Not Equality(!==);
-
*/

let age1 = 22;
console.log(age1 == "22"); 
/* Gives True:
>> focus only on value not on dataType;
*/ 

let age2 = 23;
console.log(age2 === "23"); // gives false;
console.log(age2 === 23); 
/* Gives True:
>> focus on value as well as dataType;
*/ 

/* Type Conversion:
>> Number(variable);
>> String(variable);
>> Boolean(variable) : 
    Except (0) every other number is (true) in booleanType conversions;
    Except a blank string or empty string ("") every other string is (true) in booleanType conversions;
*/

// Arrays are basically objects only;

/* Array Methods: you can modify the arrays;
--> Most of the array methods are similar to a string but not all;

>> .join({seperator}) - default {seperator} value is (,);
>> .indexOf({name});
>> .concat({variable/string});
>> .length;
>> .push({variable/string});
>> .pop();
*/

/* Comparison Operator: returns boolean value;
 >> ==
 >> ===
 >> !=
 >> !==
 >> >
 >> <
 >> >=
 >> <=
*/

/* Short Hand: (Increment/Decrement)

>> Increment:
    > a++;
    > ++a;
    > a+=2;
>> Decrement:
    > a--;
    > --a;
    > a-=2;
>> Others:
    > a*=2;
    > a/=2;
    > a**=2;
    > a%=2;
 etc.
*/

/* Logical Operators: OR, AND, NOT, Other Comparision Operators(strict/loose):
 --> Always return boolean value;
    > ||
    > &&
    > !
    > Equalities and other comparision operators OR conditional operators as explained above, etc.
*/

/* Type Coercion:
let a = 6;
let b = "9";

[a+b] => conversion to string {"69"};
[a-b] => NaN {Not a Number};
[a*b] => NaN;
*/

// Control Flow:
/*> For Loops: {4 types};
-
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}

array.forEach(element => {
    console.log(array[element]);
});

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
    }
}

for (const iterator of object) {
    const element = object[iterator];
}
-
 > These 4 types are also present in the code snippet of vscode;
*/
/*> While Loop:
-
while (condition) {
    function;
    condition-- or condition++ or etc.
}
-
*/
/*> Do-While: It will execute at least one time;
-
do {
    function;
    condition++ or condtion-- or etc.
} while (condition);
-
*/
/*> If, Else, Else-If;
-
if (condition) {
    function;
}else if (condition) {
    function;
} else {
    function;
}
-
*/
/*> Break & Continue Statement: They are also known as jump statements
-
break : will get you out of that current loop;
continue : will skip the code below it in the current loop;
-
*/
/*> Switch-Case:
-
switch (key) {
    case value1:
        function;
        break;
    case value2:
        function;
        break;
    case value3:
        function;
        break;
        .
        .
        .
    default:
        function;
        break;
}
-
*/
//> Ternary Operator: (condition) ? (function1) : (function2) ; 

/* Truthy/Falsy Values:
-
 > Truthy : true, 10, "0", 'a', [] (empty arr.), {} (empty obj.);
 > Falsy : false, 0, "", '', undefined, null;
-
*/

/* Functions:
-
function camelCase(arguments & parameters){
    // body of function;
}

let camelCase = function(arguments & parameters){
    // body of function;
}
-
> Arrow Function:
-
let camelCase = (arguments & parameters) => body of function;
-
02:19:00
-
IIFE: Here we can use the function as a module;
Immidiatly Invoke Function Expression;
Executed only once;
-
(function(){
    console.log("this function will never execute again");
})()
-
(function(name){
    console.log("this function will never execute again");
})("IIFE")
-
*/

/* setTimeout & setInterval:
 > setTimeOut => run function "once" after "interval" of time.
    eg: setTimeout(func|code, delay, arg1, arg2,....);
 > setInterval => run function repeatedly, starting after interval of time.
    eg: setInterval(func|code, delay, arg1, arg2,....);
*/
function greeting(name){
    console.log(`wlcm ${name} to our coder dost family`);
}
setTimeout(greeting, 5000, "Paras"); // Here, 5000ms = 5sec;
setTimeout(function(){
    console.log("Hello");
}, 5000);

setInterval(greeting, 5000, "Interval"); // Here, 5000ms = 5sec;
setInterval(function(){
    console.log("Hello");
}, 5000);

/* Hoisting: variables declared are hoisted towards the top of their scope;
    eg: for (var);
*/

/* Objects in javascript:
let car = {
    color: "red",
    model: 2022,
    series: 'X',
    company: "Honda"
}; 
> Accessing the javascript object properties;
-
console.log(car["color"]); gives (red) output;
console.log(car.color); gives (red) output;
delete car.color
-
> You can also modify th eobject properties;
*/
let obj= {
    prop1 : "value1",
    prop2 : "value2"
}
delete obj.prop1; //It's return value is always true;
 
[2:45:00 time stamp to Write];


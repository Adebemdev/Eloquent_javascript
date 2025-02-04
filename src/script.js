/*

function User(name) {
  // this = {} implicitly

  // modifies this by adding properties
  this.name = name;
  this.sayHi = function () {
    console.log('Greeting to you: ' + this.name);
  };
}

let user = new User('Bem');
user.sayHi();

let obj = {};

function A(name) {
  this.name = name;
  return obj;
}
function B(name) {
  this.name = name;
  return obj;
}

let a = new A('Adeola');
let b = new B('Busayo');

console.log(a == b);

// Exercises 3
function Calculator() {
  this.read = function () {
    // this.a = +prompt('Enter a value', 0);
    // this.b = +prompt('Enter a value', 0);
  };

  this.sum = function () {
    // console.log(this.obj.a + this.obj.b);
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

console.log(calculator, calculator.sum(), calculator.mul());

// Exercise 2
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value = this.value + +prompt('a', 0);
  };
}

let accumulator = new Accumulator(2);
accumulator.read();
console.log(accumulator.value);
let user = {};

alert(user?.address?.street);

let html = document
.querySelector('.elem')
?.document.querySelector('.elem').innerHTML;
alert(html);

console.log(html);
alert(user.address.street);

let html = document.querySelector('.elem').innerHTML;
console.log(html);

let userAdmin = {
  admin() {
    alert('I am Admin');
  },
};

let userGuest = {};

userAdmin.admin?.();
userGuest.admin?.();

let key = 'firstName';

let userName = {
  firstName: 'John',
};

console.log(userName?.[key]);

let id1 = Symbol('id');
let id2 = Symbol('id');

console.log(id1.toString(), id2.toString());

let user = {
  name: 'John',
};
let id = Symbol('id');
user[id] = 1;

console.log(user[id]);


// Symbols in the object literal


let id = Symbol('id');

const user = {
  name: 'John',
  [id]: 123,
  age: 30,
};

for (let key in user) {
  alert(user[key]);
}

let clone = Object.assign({}, user);
console.log(clone[id]);


let id = Symbol.for('id');

let idAgain = Symbol.for('id');

alert(id === idAgain);

let user = {
  name: 'John',
  money: 1000,

  toString() {
    return `name: ${this.name}`;
  },

  valueOf() {
    return this.money;
  },
};

alert(user);
alert(+user); // valueOf -> 1000
alert(user + 500);

let user1 = { name: 'He' };
let user2 = { name: 'She' };

alert(user1 + user2);

function Bird() {
  this.name = 'Sweety';
}

let obj = new Bird();
console.log(Object); // Native Object in js
console.log(obj);

let date1 = Date.now();
let date2 = Date.now();
console.log(date1 - date2);



/// How to make a pyramide character
let character = '#';
let count = 8;
let rows = [];

for (let i = 1; i < count; i++) {
  rows.push(padRow(i, count));
}

// To track the character entering the arrays
let result = '';

for (const row of rows) {
  result += row + '\n';
}

console.log(result);

function padRow(rowNumber, rowCounts) {
  return (
    ' '.repeat(rowCounts - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    ' '.repeat(rowCounts - rowNumber)
  );
}

// Program
let total = 0,
  count2 = 1;
while (count2 <= 10) {
  total += count2;
  count2 += 1;
}
console.log(total);

console.log('This is the first line\nAnd this is the second');

*/
let user = {
  name: 'John',
  sayHi() {
    console.log('Hey 🖐 buddy!');
  },
};

user.sayHi();

let str = 'hello';

console.log(str.toUpperCase());

alert(typeof 0);
alert(typeof new Number(1));

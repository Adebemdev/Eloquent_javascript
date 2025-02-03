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
*/

let obj = {
  tostring() {
    return '6';
  },
};

alert(obj * 2);
alert(obj + 2);

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
////                                                             ////
////      _____              __               __                 ////
////     / ___/__  ___  ___ / /_______ ______/ /____  _______    ////
////    / /__/ _ \/ _ \(_-</ __/ __/ // / __/ __/ _ \/ __(_-<    ////
////    \___/\___/_//_/___/\__/_/  \_,_/\__/\__/\___/_/ /___/    ////
////                                                             ////
////    In the examples below make sure you name each            ////
////    constructor differently as to not override eachother.    ////
////    I need to be able to test them in gh-pages on the        ////
////    console. Also make sure there are no javascript errors   ////
////    and check your code in js hint. Finally make sure it     ////
////    is formatted/indented correctly. Code is in place        ////
////    that validates each answer. It will currently say:       ////
////    `Assertion failed` for each question. Once you answer    ////
////    the question correctly that will go away. Use this to    ////
////    check your work                                          ////
////                                                             ////
////                                                             ////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////

// 1. ------------------------------------------------------------ //

// Create a simple constructor function called `Foo` and create a new
// instance from it called `foo`.

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //

function Foo() {
}
var foo = new Foo()
// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// ==== Validating =============================================== //

console.assert(foo instanceof Foo);

// --------------------------------------------------------------- //

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// 2. ------------------------------------------------------------ //

// Create a constructor function called `Dog` that sets a property
// on itself within the constructor. The property should be called
// `says` and the value should be `life is ruff`

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //
function Dog() {
  this.says = "life is ruff"  
}


// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// ==== Validating =============================================== //

console.assert(new Dog().says === "life is ruff");

// --------------------------------------------------------------- //

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// 3. ------------------------------------------------------------ //

// Create a constructor function called `Cat` that has a method on
// it's prototype called `growl` that returns the string `meow`.
// create an instance of this called `cat`

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //
function Cat() {
  this.growl = function(){
  	return 'meow'
  }
}
var cat = new Cat

// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// ==== Validating =============================================== //

console.assert(cat instanceof Cat);
console.assert(cat.growl() === "meow");

// --------------------------------------------------------------- //

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// 4. ------------------------------------------------------------ //

// Create a constructor called `Student`. The constructor should take one 
// argument, which will fill that student's `expertise` attribute. The
// student should also have a `knowledge` attribute, which has a beginning
// value of zero. Yet another property of a student object should be the 
// `learn` method, which will take one input: the amount of knowledge the
// student will gain. In short, make the following assertions pass:

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //
function Student(input) {
  this.knowledge = 0,
  this.expertise = input,
  this.learn = function(gains){
  	this.knowledge += gains
  }
}

// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// ==== Validating =============================================== //


var jasper = new Student('hydroponics')

console.assert(jasper.expertise === "hydroponics")
console.assert(jasper.knowledge === 0)  
jasper.learn(1)
console.assert(jasper.knowledge === 1)
jasper.learn(100)
console.assert(jasper.knowledge === 101)  

// --------------------------------------------------------------- //
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// 5. ------------------------------------------------------------ //

// Create a constructor called `Key`. Create another constructor
// called `Safe`. Make the Safe constructor take 2 arguments. The
// first argument can be any piece of data to keep safe. Store it 
// in a variable that is local to the constructor (i.e. var secret, 
// not this.secret)
// The 2nd param to the `Safe` constructor needs to be an instance
// of `Key` you need to store it privately as well. Add a function
// to the Safe prototype called `unlock` that accepts a key. If the
// key matches the key that was used to create the Safe; then return
// the secret data.

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //
function Key(){
}

function Safe(topSecret, inputKey) {
  var secret = topSecret,
  var key = inputKey,
  this.unlock = function(testKey){
  	if(testKey === key){
  		return secret
  	}
  }
}


// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// ==== Validating =============================================== //

var sensitive = "shhhhh!";
var rightKey  = new Key();
var wrongKey  = new Key();
var safe      = new Safe(sensitive, rightKey);

console.assert(safe.unlock(wrongKey) !== sensitive);
console.assert(safe.unlock(rightKey) === sensitive);

// --------------------------------------------------------------- //

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
////                                                             ////
////                  ___                                        ////
////                 / _ )___  ___  __ _____                     ////
////                / _  / _ \/ _ \/ // (_-<                     ////
////               /____/\___/_//_/\_,_/___/                     ////
////                                                             ////
////                                                             ////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// Bonus. -------------------------------------------------------- //

// Create a constructor called `Validator`. Give it a method on it's
// prototype called `email` that takes a string and returns true if
// the string is a valid email address and false if it is not.

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //



// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// ==== Validating =============================================== //

if (typeof Validator === "function") {
  var valid = new Validator();
  console.assert(valid.email("name@theironyard.com"));
  console.assert(!valid.email("name-at-theironyard.com"));
}

// --------------------------------------------------------------- //

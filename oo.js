// var myfunction = function(x)
// {
//       // x is equal to 4
//       x = 5;
//       // x is now equal to 5
// }

// var x = 4;
// console.log(x); // x is equal to 4
// myfunction(x); 
// console.log(x); // x is still equal to 4


// //////////////////


// var myfunction = function()
// {
//       // x is equal to 4
//       x = 5;
//       // x is now equal to 5
// }

// var x = 4;
// console.log(x); // x is equal to 4
// myfunction(); 
// console.log(x); // x is still equal to 4

// ////////////////// 


// function Car( model, year, miles ) {
 
//   this.model = model;
//   this.year = year;
//   this.miles = miles;
 
//   this.toString = function () {
//     return this.model + " has done " + this.miles + " miles";
//   };
// }
 
// // Usage:
 
// // We can create new instances of the car
// var civic = new Car( "Honda Civic", 2009, 20000 );
// var mondeo = new Car( "Ford Mondeo", 2010, 5000 );
 
// // and then open our browser console to view the
// // output of the toString() method being called on
// // these objects
// console.log( civic.toString() );
// console.log( mondeo.toString() );

// //// VS

// function Car( model, year, miles ) {
 
//   this.model = model;
//   this.year = year;
//   this.miles = miles;
 
// }
 
 
// // Note here that we are using Object.prototype.newMethod rather than
// // Object.prototype so as to avoid redefining the prototype object
// Car.prototype.toString = function () {
//   return this.model + " has done " + this.miles + " miles";
// };
 
// // Usage:
 
// var civic = new Car( "Honda Civic", 2009, 20000 );
// var mondeo = new Car( "Ford Mondeo", 2010, 5000 );
 
// console.log( civic.toString() );
// console.log( mondeo.toString() );

// var testModule = (function () {
 
//   var counter = 0;
 
//   return {
 
//     incrementCounter: function () {
//       return counter++;
//     },
 
//     resetCounter: function () {
//       console.log( "counter value prior to reset: " + counter );
//       counter = 0;
//     }
//   };
 
// })();
 
// // Usage:
 
// // Increment our counter
// testModule.incrementCounter();
 
// // Check the counter value and reset
// // Outputs: counter value prior to reset: 1
// testModule.resetCounter();

// debugger

function Animal(name, floor){
	this.name = name;
	this.floor = floor
	console.log("")
	for(var i=0; i < .length; i++){
		
	}
}

Animal.prototype.sayName = function(){
	console.log(this.name);
}

Animal.sayFloor = function(){
	console.log(this);
}

var cow = new Animal("cow", 2);
var monkey = new Animal("monkey", 3)

cow.sayName();
Animal.sayFloor();


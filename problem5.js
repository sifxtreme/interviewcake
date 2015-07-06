/*

Write a function fib() that a takes an integer nn and returns the nnth fibonacci ↴ number.
Let's say our fibonacci series is 0-indexed and starts with 0. So:

fib(0) # => 0
fib(1) # => 1
fib(2) # => 1
fib(3) # => 2
fib(4) # => 3
...

*/

var fib = function(n){
	var fibs = [];
	for(var i = 0; i < n; i++){
		

	}
}

var fibRecursive = function(n){
	if(n < 1){
		return 0;
	}
	else if(n == 1){
		return 1;
	}
	else{
		return fibRecursive(n-1) + fibRecursive(n-2)
	}

}

var fibs = [];
var fibRecursiveHash = function(n){
	if(n < 1){
		return 0;
	}
	else if(n == 1){
		return 1;
	}
	else if(typeof fibs[n] !== "undefined"){
		return fibs[n]
	}
	else{
		fibs[n] = fibRecursiveHash(n-1) + fibRecursiveHash(n-2)
		return fibs[n]
	}

}




console.log(fibRecursive(0))
console.log(fibRecursive(1))
console.log(fibRecursive(2))
console.log(fibRecursive(3))
console.log(fibRecursive(4))
console.log(fibRecursive(5))
console.log(fibRecursive(6))
console.log(fibRecursive(7))
console.log(fibRecursive(8))
console.log(fibRecursive(9))
console.log(fibRecursive(10))
console.log("-------------------------")
console.log(fibRecursiveHash(10))
console.log(fibs);
console.log("-------------------------")


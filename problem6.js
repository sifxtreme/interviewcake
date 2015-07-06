/* 

You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
Write a function get_products_of_all_ints_except_at_index() that takes an array of integers and returns an array of the products.

For example, given:

  [1, 7, 3, 4]
your function would return:

  [84, 12, 28, 21]
by calculating:

  [7*3*4, 1*3*4, 1*7*4, 1*7*3]
Do not use division in your solution.

*/

var getProductExceptAtIndexBrute = function(numbers){
	var results = [];
	var count = 0;

	for(var i=0; i<numbers.length; i++){
		results[i] = 1;
		for(var j=0; j<numbers.length; j++){
			count++
			if(i != j){
				results[i] *= numbers[j];	
			}
		}		
	}
	console.log(count);

	return results;
}

var getProductExceptAtIndex = function(numbers){
	var factor = 1;
	var results = [];
	var count = 0;

	for(var i=0; i<numbers.length; i++){
		results[i] = 1 * factor;
		for(var j=i; j<numbers.length; j++){
			count++
			if(i != j){
				results[i] *= numbers[j];	
			}
		}
		factor *= numbers[i];
	}
	console.log(count);

	return results
}

var getProductExceptAtIndexSolution = function(numbers){
	var results = [];

	var factor = 1;
	for(var i=0; i<numbers.length; i++){
		results[i] = 1 * factor;
		factor *= numbers[i];
	}

	var factor = 1;
	for(var i=numbers.length-1; i>=0; i--){
		results[i] *= factor;
		factor *= numbers[i];
	}

	return results
}

var arr = [1, 7, 3, 4];

console.log(getProductExceptAtIndexBrute(arr))
console.log(getProductExceptAtIndex(arr))
console.log(getProductExceptAtIndexSolution(arr))
/*

In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.
Each order is represented by an "order id" (an integer).

We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

For example:

my_array     = [3,4,6,10,11,15]
alices_array = [1,5,8,12,14,19]

print merge_arrays(my_array, alices_array)
# prints [1,3,4,5,6,8,10,11,12,14,15,19]

*/

function mergeSortedArrays(arr1, arr2){
	if(arr1.length == 0){
		return arr2;
	}
	if(arr2.length == 0){
		return arr1;
	}

	var sorted = [];

	var arr1Pointer = 0;
	var arr2Pointer = 0;

	var arr1Length = arr1.length;
	var arr2Length = arr2.length;

	while(arr1Pointer < arr1Length || arr2Pointer < arr2Length){
		if(arr1Pointer == arr1Length){
			sorted.push(arr2[arr2Pointer])
			arr2Pointer++;
		}
		else if(arr2Pointer == arr2Length){
			sorted.push(arr1[arr1Pointer])
			arr1Pointer++;
		}
		else{
			if(arr1[arr1Pointer] < arr2[arr2Pointer]){
				sorted.push(arr1[arr1Pointer])
				arr1Pointer++;
			}
			else{
				sorted.push(arr2[arr2Pointer])
				arr2Pointer++;	
			}
		}
	}

	return sorted;
}

var my_array     = [3,4,6,10,11,15]
var alices_array = [1,5,8,12,14,19]

console.log( mergeSortedArrays(my_array, alices_array) )
 // prints [1,3,4,5,6,8,10,11,12,14,15,19]
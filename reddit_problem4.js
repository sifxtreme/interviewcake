
// var a = [5559,55,553,4,53,5,505,2,1,7,8];
var a = [5,55556,2,3,4,56];
var n = []; /* final empty array */

var checkDigits = function(currentDigit,j){
	var aDigit = parseInt(String(number).charAt(currentDigit)); /* get the digit of the current digit of array (starts with 0) */
	var nDigit = parseInt(String(n[j]).charAt(currentDigit)); /* get the digit of the current digit for the new array of the index j (starts with 0)*/

	if(aDigit > nDigit){ /* if the array's first digit is bigger than the index 0 of the new array, then add this number at the front*/
		n.splice(j,0,number);
		currentDigit = 0;
	} 

	else if (aDigit == nDigit){ /* if the digits are the same, rerun function with the next digit of the same numbers */
		currentDigit = currentDigit + 1;
		checkDigits(currentDigit,j);
	}

	else if(aDigit < nDigit){ /* if the array digit is smaller, check the next number on the n array */
		j++;
		currentDigit = 0;
		checkDigits(currentDigit, j);
	}

	else if (isNaN(aDigit)){
		var set = parseInt(String(number).charAt(currentDigit-1));

		for (var k = 0; k<n[j].toString().length-currentDigit; k++){
			var iterateDigit = parseInt(String(n[j]).charAt(currentDigit+k));

			if(set > iterateDigit){
				n.splice(j,0,number);
				currentDigit = 0;
				return;
			}
		}
		j++;
		currentDigit = 0;
		checkDigits(currentDigit, j);
	}

	else if (isNaN(nDigit)){
		var set = parseInt(String(n[j]).charAt(currentDigit-1));

		for (var k = 0; k < number.toString().length-currentDigit; k++){
			var iterateDigit = parseInt(String(number).charAt(currentDigit+k));

			if(set > iterateDigit){
				j++;
				currentDigit = 0;
				checkDigits(currentDigit, j);
				return;
			}
		}
		n.splice(j,0,number);
		currentDigit = 0;
	}



	else{
		n.push(number);
		currentDigit = 0;
	}

}

for(var i = 0; i <a.length; i++){ /* iterate until we run out of array elements */
	var number = a[i]; /* set number to be the array element at index i */
	var j = 0;

	if(n.length== 0){
		n.push(number); /* if the n is empty, add the number */
	}

	else{
		var currentDigit = 0; /* current digit we are checking for each number */

		if(j < n.length){
			checkDigits(currentDigit,j); /* check digits checks the digit and the element of the n array */
		}
	}
}

console.log(n);
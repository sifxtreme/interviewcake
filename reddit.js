/*
Five programming problems every Software Engineer should be able to solve in less than 1 hour

https://www.reddit.com/r/programming/comments/358tnp/five_programming_problems_every_software_engineer/

*/

var problem1 = function(){

	var sumUsingForLoop = function(numList){
		var sum = 0;
		for(var i=0; i < numList.length; i++){
			sum += numList[i];
		}

		return sum;
	};

	var sumUsingWhileLoop = function(numList){
		var sum = 0;
		while(numList.length){
			sum += numList.pop();
		}

		return sum;
	};

	var sumUsingRecursion = function(numList){
		if(numList.length <= 0){
			return 0;
		}

		return numList.pop() + sumUsingRecursion(numList);
	};

	var numList = [4,8,12,100];
	console.log(sumUsingForLoop(numList));

	numList = [4,8,12,100];
	console.log(sumUsingWhileLoop(numList));

	numList = [4,8,12,100];
	console.log(sumUsingRecursion(numList));

};

var problem2 = function(){
	var list1 = ["a","b","c","d","e"];
	var list2 = [1,2];
	var combinedList = [];

	for(var i=0; i < Math.max(list1.length, list2.length); i++){

		if(list1[i]){
			combinedList.push(list1[i]);
		}

		if(list2[i]){
			combinedList.push(list2[i]);
		}
	}

	console.log(combinedList);

};

var problem3 = function(){
	var fibList = [];

	fibList.push(0);
	fibList.push(1);

	for(var i=2; i < 100; i++){
		fibList.push(fibList[i - 1] + fibList[i - 2]);
	}

	console.log(fibList);

};

var problem4 = function(){
	var listOfNumbers = [52,5,3];
	var largestNumber = 0;
	var finalString = "";

	for(var i=0; i < listOfNumbers.length; i++){
		if(listOfNumbers[i] > largestNumber){
			largestNumber = listOfNumbers[i];
		}
	}


	var lengthOfLargestNumber = largestNumber.toString().length;

	for(i=0; i < listOfNumbers.length; i++){
		var numString = listOfNumbers[i].toString();
		var howManyZeros = lengthOfLargestNumber - numString.length;
		var addZeros = howManyZeros;
		while(addZeros){
			numString += 0;
			addZeros--;
		}
		numString += howManyZeros / 10;
		listOfNumbers[i] = numString;
	}

	listOfNumbers.sort();

	for(i=listOfNumbers.length - 1; i >= 0; i--){
		var currentNumberString = listOfNumbers[i];
		var numberOfZerosToRemove = 1;
		var numberArray = currentNumberString.split(".");
		if(numberArray[1]){
			numberOfZerosToRemove += parseInt(numberArray[1]);
		}
		var numberStringToAdd = currentNumberString.substring(0, numberArray[0].length - numberOfZerosToRemove);
		finalString += numberStringToAdd;
	}

	console.log(finalString);


};

// problem1();
// problem2();
// problem3();
problem4();











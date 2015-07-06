/**

Imagine you landed a new job as a cashier...
Your quirky boss found out that you're a programmer and has a weird request about something they've been wondering for a long time.

Write a function that, given:

an amount of money
a list of coin denominations
computes the number of ways to make amount of money with coins of the available denominations.

Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number
of ways to make 4¢ with those denominations:

1¢, 1¢, 1¢, 1¢
1¢, 1¢, 2¢
1¢, 3¢
2¢, 2¢

**/

var takePower = function(num, power){
	if(power == 0){
		return 1;
	}
	else if(power == 1){
		return num;
	}
	else{
		return num * takePower(num, power - 1);
	}

}

// console.log(takePower(2,4));
// console.log(takePower(3,4));
// console.log(takePower(4,4));
// console.log(takePower(5,4));
// console.log(takePower(6,1));
// console.log(takePower(6,0));

var coin = function(amount, denominations, currentArray){

	if(amount < 0){
		return null;
	}
	else if(amount == 0){
		return currentArray;
	}
	else{
		for(var i=0; i<denominations.length; i++){
			var selectedCoin = denominations[i];

			var newCurrentArray = currentArray.concat([selectedCoin]);
			test = coin(amount - selectedCoin, denominations, newCurrentArray)
			if(test){
				waysToMakeMoney.push(test);
			}
			
		}
	}

}

var uniqueWaysToMakeChange = function(amount_left, denominations_left){
	if(amount_left < 0){
		return 0;
	}
	else if(amount_left == 0){
		return 1;
	}
	else if(denominations_left.length == 0){
		return 0;
	}

	var coin_selected = denominations_left[0];
	var coins_left = denominations_left.slice(1, denominations_left.length)

	

	var possibilities = 0
	while(amount_left >= 0){
		possibilities += uniqueWaysToMakeChange(amount_left, coins_left)
		amount_left -= coin_selected;
	}

	return possibilities;
}

var uniqueWaysToMakeChangeBottomsUp = function(amount, denominations){
	var data = [];
	var length = amount + 1; // user defined length

	for(var i = 0; i < length; i++) {
    data.push(0);
	}

	data[0] = 1;

	for(var i=0; i < denominations.length; i++){
		for(var j=denominations[i]; j < amount + 1; j++){
			higher_amount_remainder = j - denominations[i];
			data[j] = data[j] + data[higher_amount_remainder]
		}
		console.log(data);
	}

	return data[amount];
}

// var waysToMakeMoney = [];
// coin(4, [1,2,3], [])
// console.log(waysToMakeMoney);

var denoms = [1,2,3,4]
var amount = 12;

var s = uniqueWaysToMakeChange(amount, denoms);
console.log(s);

var s = uniqueWaysToMakeChangeBottomsUp(amount, denoms);
console.log(s);
// console.log(s)





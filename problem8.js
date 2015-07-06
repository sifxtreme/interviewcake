/* 

You are a renowned thief who has recently switched from stealing precious metals to stealing cakes because of the insane profit margins. You end up hitting the jackpot, breaking into the world's largest privately owned stock of cakes—the vault of the Queen of England.
While Queen Elizabeth has a limited number of types of cake, she has an unlimited supply of each type.

Each type of cake has a weight and a value, stored in tuples ↴ with two positions:

An integer representing the weight of the cake in kilograms
An integer representing the monetary value of the cake in British pounds
For example:

  # weighs 7 kilograms and has a value of 160 pounds
(7, 160)

# weighs 3 kilograms and has a value of 90 pounds
(3, 90)
You brought a duffel bag that can hold limited weight, and you want to make off with the most valuable haul possible.

Write a function max_duffel_bag_value() that takes an array of cake tuples and a weight capacity, and returns the maximum monetary value the duffel bag can hold.

For example:

  cake_tuples = [(7, 160), (3, 90), (2, 15)]
capacity    = 20

max_duffel_bag_value(cake_tuples, capacity)
# returns 555 (6 of the middle type of cake and 1 of the last type of cake)
Weights and values may be any non-negative integer. Yes, it's weird to think about cakes that weigh nothing or duffel bags that can't hold anything. But we're not just super mastermind criminals—we're also meticulous about keeping our algorithms flexible and comprehensive.

*/

cake_tuples = [[7, 160], [3, 90], [2, 15]]
capacity    = 20


function max_duffel_bag_value_iterative(cake_tuples, capacity){
	var duffel_bag_values = [];
	for(var i=0; i <= capacity; i++){
		duffel_bag_values[i] = 0;
	}

	for(var i=0; i <= capacity; i++){
		var arr = []; 
		// there can be optimizations with the arr array (instead just have an integer)
		for(var j=0; j < cake_tuples.length; j++){
			var money = cake_tuples[j][1];
			var weight = cake_tuples[j][0];

			var value = 0;

			if(typeof duffel_bag_values[i - weight] !== "undefined"){
				value = money + duffel_bag_values[i - weight]
			}

			arr.push(value)
		}
		duffel_bag_values[i] = Math.max.apply(null, arr);
	}

	return duffel_bag_values;
}

var values = max_duffel_bag_value_iterative(cake_tuples, capacity);

console.log(values[capacity])


// Review Knapsack 0/1





// def find_dupes(n): # n is an array of 1B numbered from 1-1B
// end()

// def find_dupes(n):
//   alreadySeen = Hash.new

//   n.each do |number|
//     if(!alreadySeen[number])
//       alreadySeen[number] = true
//     else
//       puts number
//     end
//   end
// end

// def find_dupes(n):
//   alreadySeen = Hash.new

//   n.each do |number|
//     if(!alreadySeen[number])
//       alreadySeen[number] = true
//     else
//       puts number
//     end
//   end
// end

// def find_dupes(n):
//   n.each do |number|
//     if(!alreadySeen[number])
//       alreadySeen[number] = true
//     else
//       puts number
//     end
//   end
// end

// [1,2,3,6,7,8,2]


// You have 5 GB RAM limitation.  the initial array is in memory, taking up 4GB.
// How can you write the method to fit in RAM?


// def fibo(n): # n is the nth index of the fibo sequence.  return the value at that index

// var fib = function(n){
//  if(n == 0 || n == 1){
//    return 1;
//  }
//  else{
//    return fib(n - 1) + fib(n - 2)
//  }

// }

// var fib = function(n){
//  var fibArray = [];
//  fibArray[0] = 1;
//  fibArray[1] = 1;

//  for(var i = 2; i < n; i++){
//    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
//  }

//  return fibArray[n - 1];
// }

var fib = function(n){
  var fibArray = [];
  if(n < 2){
    return 1;
  }
  
  fibN = 1;
  fibNMinus1 = 1;
  fibNMinus2 = 1;

  for(var i = 2; i <= n; i++){
    fibN = fibNMinus1 + fibNMinus2;
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = fibN;
  }

  return fibN;
};

var fib = function(n){
  var fibArray = [];
  if(n < 2){
    return 1;
  }
  
  fibNMinus1 = 1;
  fibNMinus2 = 1;

  for(var i = 2; i < n; i++){
    fibNMinus1 = fibNMinus1 + fibNMinus2;
    fibNMinus2 = fibNMinus1 - fibNMinus2;
  }

  return fibNMinus1 + fibNMinus2;
};

var fib = function(n){
  if(n < 2){
    return 1;
  }
  
  fibNMinus1 = 1;
  fibNMinus2 = 1;

  for(var i = 2; i < n; i++){
    if( i % 2 === 0){
      fibNMinus2 = fibNMinus1 + fibNMinus2;  
    }
    else{
      fibNMinus1 = fibNMinus1 + fibNMinus2;  
    }
  }

  return fibNMinus1 + fibNMinus2;
};

describe("fibonnaci series", function() {

  it("expects the correct values for a fib series", function() {
    n = 5;
    // 1,1,2,3,5,8, 13,21
    expect(fib(3)).toEqual(3);
  });
});
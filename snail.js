snail = function(array) {
  if(array.length === 0){
    return;
  }
  if(array.length === 1){
    return array[0];
  }
  
  var resultsArray = [];
  
  var xPointer = 0;
  var yPointer = 0;
  var xLeftLimit = 0;
  var xRightLimit = array.length - 1;
  var yUpLimit = 1;
  var yDownLimit = array.length - 1;
  var movementDirection = "right";
  var yNeeded = Math.floor(array.length / 2);
  var xNeeded = array.length - 1 - Math.floor(array.length / 2);
  while(xPointer != xNeeded || yPointer != yNeeded){

    resultsArray.push(array[yPointer][xPointer]);
    
    if(movementDirection == "right"){
      if(xPointer == xRightLimit){
        xRightLimit--;
        yPointer++;
        movementDirection = "down";
      }
      else{
        xPointer++;
      }
    }
    else if(movementDirection == "down"){
      if(yPointer == yDownLimit){
        yDownLimit--;
        xPointer--;
        movementDirection = "left";
      }
      else{
        yPointer++;
      }
    }
    else if(movementDirection == "left"){
      if(xPointer == xLeftLimit){
        xLeftLimit++;
        yPointer--;
        movementDirection = "up";
      }
      else{
        xPointer--;
      }
    }
    else{
      if(yPointer == yUpLimit){
        yUpLimit++;
        xPointer++;
        movementDirection = "right";
      }
      else{
        yPointer--;
      }
    }
  }

  resultsArray.push(array[yPointer][xPointer]);

  return resultsArray;
};

results = snail([[1,2,3,4,5,6],[20,21,22,23,24,7],[19,32,33,34,25,8],[18,31,36,35,26,9],[17,30,29,28,27,10],[16,15,14,13,12,11]]);



console.log(results);
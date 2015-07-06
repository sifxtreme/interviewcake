// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 0.12)
    var sum = 0;
    for(var i=0; i < A.length; i++){
        sum += A[i];
    }

    console.log(sum);
    
    var leftSum = 0, rightSum = sum;
    for(i=0; i < A.length; i++){
        leftSum += A[i];
        // console.log(rightSum);
        rightSum -= A[i];
        // if(i === 0){
        //     console.log(leftSum);
        //     console.log(rightSum);
        // }
        if(leftSum == rightSum){
            return i;
        }
    }
    
    return -1;
}

var A = [-1,3,-4,5,1,-6,2,1];
solution(A)
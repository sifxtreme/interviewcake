/*

You're working with an intern that keeps coming to you with JavaScript code that won't run because the braces, brackets, and parentheses are off. To save you both some time, you decide to write a braces/brackets/parentheses validator.
Let's say:

'(', '{', '[' are called "openers."
')', '}', ']' are called "closers."
Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.

Examples:

"{ [ ] ( ) }" should return true
"{ [ ( ] ) }" should return false
"{ [ }" should return false

*/

var bracketsValid = function(brackets){
	var brackets = brackets.replace(/ /g, "");
	
	var currentStack = []

	for(var i=0; i < brackets.length; i++){
		if(brackets[i] == "{" || brackets[i] == "(" || brackets[i] == "["){
			currentStack.push(brackets[i]);
		}
		else{
			if(brackets[i] == "}" && currentStack[currentStack.length - 1] == "{"){
				currentStack.pop();
			}
			else if(brackets[i] == "]" && currentStack[currentStack.length - 1] == "["){
				currentStack.pop();
			}
			else if(brackets[i] == ")" && currentStack[currentStack.length - 1] == "("){
				currentStack.pop();
			}
			else{
				return false;
			}
		}
	}

	console.log(brackets)

	if(currentStack.length){
		return false;
	}

	return true;
}

console.log(bracketsValid("{ [ ] ( ) }"));
console.log(bracketsValid("{ [ ( ] ) }"));
console.log(bracketsValid("{ [ }"));
console.log(bracketsValid("{ [ ( ] ) }"));
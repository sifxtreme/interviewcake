

var reverseLetters = function(word){
	var word = word.split("");
	var wordLength = word.length;
	for(var i=0; i < wordLength; i++){
		if(i < wordLength / 2){
			var tmpLetter = word[i];
			word[i] = word[wordLength - i - 1]
			word[wordLength - i - 1] = tmpLetter
		}
	}

	return word.join("");
}

// var reverseWords = function()

message = 'find you will pain only go you recordings security the into if'

var reversedPhrase = reverseLetters(message)

console.log(reversedPhrase);

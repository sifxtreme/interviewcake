var s1 = 'After beating the eggs, Dana read the next step:';
var s2 = 'Add milk and eggs, then add flour and sugar.';
var s3 = "We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake."

var getWordCloud = function(words){
	var wordbank = {};
	var word = "";
	for(i in words){
		var letter = words[i]

		if( (letter == " " || letter == "." || letter == "," || letter == ":" || letter == ")" || letter == "(") ){
			if(wordbank[word.toLowerCase()]){
				wordbank[word.toLowerCase()]++;
			}
			else{
				wordbank[word.toLowerCase()] = 1;
			}
			word = "";
		}
		else{
			word += letter
		}
		
	}

	delete wordbank['']



	return wordbank;
}

console.log(getWordCloud(s1));
console.log(getWordCloud(s2));
console.log(getWordCloud(s3));


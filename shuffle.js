
var cardArray = [2,3,4,5,6,7,8,9,10,10,10,10,10,10,10,10]

function shuffle(o){
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
}

console.log(shuffle(cardArray))

var xx;

for(var i=0, xx=0; i < cardArray.length; i++, xx--);

console.log(xx);
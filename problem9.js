/*

Delete a node from a singly linked list ↴ , given only a variable pointing to that node.
The input could, for example, be the variable b below:

a = Node('A')
b = Node('B')
c = Node('C')

a.next = b
b.next = c

delete_node(b)

*/

function Node(name){
	this.name = name;
}

var a = new Node('A')
// var a = Node('A') -> this would be undefined
var b = new Node('B')
var c = new Node('C')

a.next = b
b.next = c

console.log(a);
console.log(b);
console.log(c);

var delete_node = function(node){
	
}


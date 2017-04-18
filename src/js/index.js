// Javascript Entry Point


//IIFEE pattern (Immediately Invoked Function Expression)

var foo = "foo";

(function() {
	var foo = "foo2";
	console.log(foo);
});

console.log(foo);

// Hoisting - functions first

foo();

var foo = 2;

function foo() {
	console.log('bar');
}
function foo() {
	console.log('foo');

}

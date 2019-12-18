console.log('Connected');

// var firstName = 'Brendan';
// var lastName = 'Eich';

// console.log('firstname: ', firstName);
// console.log('lastname: ', lastName);

// var fullName = `
// Full Name

// ---

// First Name: ${firstName}
// Last Name: ${lastName}`;

// console.log(fullName);

// var price = 23.09;
// var tax = 0.07;
// var total = price * (1 + tax);
// // ! DOES REAL MATH! UNLIKE RUBY WHICH HAS FLOAT ETC
// console.log(total);

// let movies = [ 'topgun', 'endgame', 'FNL', 'RTT', 'Driven' ];

// movies.forEach((movie) => {
// 	console.log(movie);
// });

// function sayHello(name) {
// 	console.log(`Hello ${name}!`);
// }
// function fullName(first, last) {
// 	return `${first} ${last}`;
// }

// let name = fullName('James', 'Guest');
// sayHello(name);

// // ! -FUNCTION DECLARATIONS- (CAN BE USED OUT OF ORDER because = JS compiler puts the function into memory first):
// var sum = add(6, 7); // 'add' is being called within the sum variable
// console.log(sum); // <<<< here

// function add(num1, num2) {
// 	// 'add' is defined here (out of order)
// 	var sum = num1 + num2;
// 	return sum;
// }
// // ! -FUNCTION EXPRESSIONS- (CAN ONLY BE USED AFTER THEY'VE BEEN DEFINED!):
// var mult = function(num1, num2) {
// 	var product = num1 * num2;
// 	return product;
// };

// var sum = mult(3, 4);
// console.log(sum);

// // ! THIS:
// var dog = {
// 	name: 'Fido',
// 	sound: 'Woof!!!',
// 	readCollar: function() {
// 		console.log(this.name);
// 	},
// 	speak: function() {
// 		console.log(this.sound);
// 	},
// 	speakAfterWait: function(time) {
// 		setTimeout(() => {
// 			this.speak();
// 		}, time * 1000);
// 	}
// };

// dog.readCollar();
// dog.speak();
// dog.speakAfterWait(1);

// var object = {
// 	logThis: function() {
// 		console.log(this);
// 	}
// };

// var runFunc = function(func) {
// 	func();
// };

// object.logThis();

// runFunc(object.logThis);
// ! DOM:
// var $button = document.querySelector('button');
// var $counter = document.querySelector('p');

// var count = 0;
// var intitalFontSize = 16;

// function handleButtonClick() {
// 	count++;
// 	$counter.textContent = count;

// 	$counter.style.fontSize = intitalFontSize + count + 'px';
// }

// $button.addEventListener('click', handleButtonClick);

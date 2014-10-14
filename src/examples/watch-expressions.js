'use strict';

// Grocery list array
var groceryList = [
	'Bread',
	'Milk',
	'Eggs',
	'Fish',
	'Cereal'
];

// Get the node that launches the grocery cart
var watchExpressionButton = document.querySelector('.js-watch-expression-button');

// When the button is clicked,
watchExpressionButton.addEventListener('click', function() {

	// Create an empty array
	var groceryCart = [];

	// Push an item into the array during each loop
	for(var i = 0; i <= groceryList.length ; i++) {
		groceryCart.push(groceryList[i]);
	}
});

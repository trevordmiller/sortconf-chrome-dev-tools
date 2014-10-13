// Yes, this is global. Deal with it.

'use strict';

var groceryList = [
	'Bread',
	'Milk',
	'Eggs',
	'Fish',
	'Cereal'
];

var watchButtonNode = document.querySelector('.watch-button');
watchButtonNode.addEventListener('click', function() {

	debugger;

	// Create an empty array
	var groceryCart = [];

	// Push an item into the array during each loop
	for(var i = 0; i <= 5; i++) {
		groceryCart.push(groceryList[i]);
	}
});

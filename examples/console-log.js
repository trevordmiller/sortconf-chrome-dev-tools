'use strict';

// Grab the button to add the listener to
var consoleLogButton = document.querySelector('.js-console-log-button');

// When the button is clicked,
consoleLogButton.addEventListener('click', function(e) {

	// Stop link from doing anything
	e.preventDefault();

	// Grab the input node and get the color from it
	var favoriteColorInput = document.querySelector('.js-favorite-color-input');
	var favoriteColor = favoriteColorInput.value;

	// Log the favorite color
	console.log(favoriteColor);
});

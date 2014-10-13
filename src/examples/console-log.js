'use strict';

var consoleLogButton = document.querySelector('.js-console-log-button');
consoleLogButton.addEventListener('click', function(e) {

	// Stop link action
	e.preventDefault();

	// Grab the input node and get the color from it
	var favoriteColorInput = document.querySelector('.js-favorite-color-input');
	var favoriteColor = favoriteColorInput.value;

	// Log the favorite color
	console.log(favoriteColor);
});

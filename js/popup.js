// When the page has finished loading, the code below will run.
$(document).ready(function () {
	
	// This code listens for when a thumbnail is clicked.
	$('.thumbnail').click(function (event) {
		
		// Once the thumbnail is clicked, this code finds the hidden popup right after the image in the HTML.
		var popup = $(this).next('.popup');
		// Now we remove the hidden class from the popup and it will appear on top of the screen!
		popup.removeClass('hidden');
	});
	
	// This code listens for when a popup is clicked.
	$('.popup').click(function (event) {
		
		// Get the selected popup...
		var popup = $(this);
		// And hide it by adding the hidden class back onto it!
		popup.addClass('hidden');
	});
});
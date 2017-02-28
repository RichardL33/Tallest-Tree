// Tallest Tree JS

$(document).ready(function() {

	var maxHeight = -1;

	// Loop through elements
	$('.ELEMENT').each(function() {
		// Get height of tallest element
		maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
	});

	// Loop through elements
	$('.ELEMENT').each(function() {
		// Set elements to the tallest height
		$(this).height(maxHeight);
	});
});
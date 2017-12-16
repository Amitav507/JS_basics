document.addEventListener('mousemove', function (event) {


	// This takes care of IE
	if (window.event) { 
		event = window.event;
	}

	// Gets the position of your mouse
	var mousepositonx = event.clientX;
	var mousepositony = event.clientY;
	
	//Gets the element id of the element the background image is applied to
	var elementid = document.getElementById('bk');
	
	//Sets the background position to chage based on the mouse position
	elementid.style.backgroundPositionX = mousepositonx/7 + 'px';
	elementid.style.backgroundPositionY = mousepositony/7+ 'px';

}, false);

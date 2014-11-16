// The array of internal facing links.
var links;

// The onclick button functionality.
function buttonOnClick(button)
{
	// Retract the navbar. Notice that we use the url element
	// added in initButtons().
	retractNavbar(function(){window.location.href=button.url;});
	
	// Fade out the page.
	$(window).fadeOut(duration*frameTime);
	
	// Remove button handlers from all other buttons, since we don't
	// want to screw with race conditions.
	for(i = 0; i < internalButtons.length; ++i)
	{
		buttons[i].on("click", function(){});
	}
}

// Initializes button callbacks.
function initButtons()
{
	// Take each button and add a url element and set the
	// onclick function. Also add it to the button array.
	$(".button").each(function(index){
		this.url = this.attr("href");
		this.click(function(){buttonOnClick(this);});
		buttons.push(this);
		this.fadeIn(duration*frameTime);
	});
}

// Initializes the page.
function init()
{
	// Create the button array.
	internalButtons = [];
	
	// Fade in the page.
	$(window).fadeIn(duration*frameTime);
	
	// Start the navbar animation, initializing the buttons upon completion.
	expandNavbar(function(){initButtons();});
}
// The ID of the nav-bar loading interval.
var navBarLoadID;

// The X location of each of the lines. They are subtly offset from each other.
var x1 = 0;
var x2 = 5;
var x3 = 10;

// The per-frame delta of the length of the line.
var lineDrawingDelta1 = ((window.width)/30);
var lineDrawingDelta2 = ((window.width-10)/30);
var lineDrawingDelta3 = ((window.width-20)/30);

// The interval used to animate the navigation bar art.
var interval;

// The canvas and rendering context.
var canvas, ctx;

// Creates an animation interval for the nav-bar html5 canvas.
function loadNavbar()
{
	// Extract the canvas and get a rendering context.
	canvas=document.getElementById("nav_canvas");
	ctx=canvas.getContext("2d");
}

function expandNavbar(callback)
{
	// Set the rendering interval.
	interval = setInterval(function(){
		drawLines();
		if(!incrementLines())
		{
			clearInterval(interval);
			callback();
		}
	}, 15);
}

// Retracts the navbar.
function retractNavbar(callback)
{
	// Set the rendering interval.
	interval = setInterval(function(){
		drawLines();
		if(!decrementLines())
		{
			clearInterval(interval);
			callback();
		}
	}, 15);
}


// Draws the lines. What do you expect.
function drawLines()
{

	//First line.
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "#ff7b00";
	ctx.moveTo(0, 5);
	ctx.lineTo(x1, 5);
	ctx.stroke();

	//Second line.
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "#606060";
	ctx.moveTo(5, 10);
	ctx.lineTo(x2, 10);
	ctx.stroke();

	//Third line.
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "#00d4ff";
	ctx.moveTo(10, 15);
	ctx.lineTo(x3, 15);
	ctx.stroke();
}

// Decrements the lines.
function decrementLines()
{
	// Increment length values if we haven't yet reached our target length.
	if(x1>lineDrawingDelta1)
	{
		x1 = x1-lineDrawingDelta1;
		x2 = x2-lineDrawingDelta2;
		x3 = x3-lineDrawingDelta3;
		return true;
	}
	else return false;
}

function incrementLines()
{
	// Increment length values if we haven't yet reached our target length.
	if(x1<window.width-lineDrawingDelta1)
	{
		x1 = x1+lineDrawingDelta1;
		x2 = x2+lineDrawingDelta2;
		x3 = x3+lineDrawingDelta3;
		return true;
	}
	else return false;
}
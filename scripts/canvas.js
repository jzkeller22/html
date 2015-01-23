/*
Description
The HTML5 <canvas> tag is used to draw graphics, on the fly, via scripting 
	- you must use a script to actually draw the graphics.
The getContext() method returns an object that provides methods and properties for drawing on the canvas.
http://www.w3schools.com/tags/ref_canvas.asp
*/

$(document).ready(function() {
	// get canvas from dom
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

	// fill rectangle
	ctx.fillStyle = "#FF0000";
	ctx.fillRect(0,0,150,75);
	// fill rectable with gradient
	var grd = ctx.createLinearGradient(0,0,200,0); 
	grd.addColorStop(0,"red"); 
	grd.addColorStop(1,"white"); 
	ctx.fillStyle = grd;
	ctx.fillRect = (10,10,150,80); 
	
	// draw a line
	ctx.moveTo(0,0);
	ctx.lineTo(400,200);
	ctx.stroke();

	// draw a circle
	ctx.beginPath(); 
	ctx.arc(95,50,40,0,2*Math.PI); 
	ctx.stroke(); 

	// draw text
	ctx.font = "30px Arial";
	ctx.fillText("Hello World!", 100,150); 

	// stroke text
	ctx.font = "30px Arial"; 
	ctx.strokeText("Hello World Again!", 250,50);

	// draw circular gradient
	var grd2 = ctx.createRadialGradient(75,50,5,90,60,100);
	grd2.addColorStop(0,"red");
	grd2.addColorStop(1,"white");
	ctx.arc(50,50,50,0,2*Math.PI); 
	ctx.fillStyle = grd2;
	ctx.fill(); 

	// draw an image - not actually implemented
	var img = document.getElementById(""); 
	//ctx.drawImage(img,10,10); 

});
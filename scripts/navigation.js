// Menu Navigation

$(document).ready(function() {

	//window.applicationCache.addEventListener('updateready', onUpdateReady);
	//if(window.applicationCache.status === window.applicationCache.UPDATEREADY) {
	//	onUpdateReady();
	//}

	$("nav").append("<a href='index.html'>Home</a> | ");
	$("nav").append("<a href='dom.html'>DOM</a> | ");
	$("nav").append("<a href='canvas.html'>Canvas</a> | ");
	$("nav").append("<a href='svg.html'>SVG</a> | ");
	$("nav").append("<a href='audiovideo.html'>Audio & Video</a> | ");
	$("nav").append("<a href='funwithcss.html'>Fun with CSS</a> | ");
	$("nav").append("<a href='geolocation.html'>Geolocation</a> | ");
	$("nav").append("<a href='WebWorker.html'>Web Worker</a> | ");
	$("nav").append("<a href='JavaScript.html'>JavaScript</a> | ");
	$("nav").append("<a href='WebStorage.html'>Web Storage</a> | ");
	$("nav").append("<a href='WebSocket.html'>Web Socket</a> | ");
	$("nav").append("<a href='BorderImage.html'>Border Image</a> | ");
	$("nav").append("<a href='TutsFlipper.html'>Tuts Flipper</a> | ");
	$("nav").append("<a href='CSSSelectors.html'>CSS Selectors</a> | ");
	$("nav").append("<a href='AnimatedAndAdaptive.html'>Animated and Adaptive UI</a> | ");
	$("nav").append("<a href='XmlHttpRequest.html'>XmlHttpRequest</a> | ");
	$("nav").append("<a href='Serialize.html'>Serialize</a> | ");
	$("nav").append("<a href='About.html'>About</a> | ");
});

function onUpdateReady() {
	alert('found new version!');
}

// Create a button

/*
Complete the code in the editor so that it creates a clickable button satisfying the following properties:

The button's id is btn.
The button's initial text label is 0. After each click, the button must increment by 1. Recall that the button's text label is the JS object's innerHTML property.
The button has the following style properties:
A width of 96px.
A height of 48px.
The font-size attribute is 24px.
The .js and .css files are in different directories, so use the link tag to provide the CSS file path and the script tag to provide the JS file path:


<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
		<link rel="stylesheet" href="css/button.css" type="text/css">
        <title>Button</title>
    </head>
    <body>
		<button class="button" id="button">0</button> 
		<script src="js/button.js" type="text/javascript"></script>
    </body>
</html>


// CSS
.button{
	height: 48px;
	width: 96px;
	font-size: 24px;
}


*/

// button.js
let button = document.getElementById("button");
button.addEventListener("click", function() {
  var value = this.innerHTML;
  this.innerHTML = parseInt(value) + 1;
});

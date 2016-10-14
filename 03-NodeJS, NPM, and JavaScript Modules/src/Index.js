var Movie = require("./movie.js");
var Director = require("./director.js");

//Ejercicio 7-1
var $ = require("jquery");

var alien = new Movie();
var ridleyScott = new Director("Ridley Scott");
ridleyScott.set("quotes", ["Cast is everything.", "Do what ..."]);
alien.set("director", ridleyScott);
console.log(alien.get("director").speak());

//Ejercicio 7-2
var rsArray = ridleyScott.get("quotes");

var view = "";
$.each(rsArray, function(i, item) {
	view = view + "<div>" + rsArray[i] + "</div>";
});

document.write(view);
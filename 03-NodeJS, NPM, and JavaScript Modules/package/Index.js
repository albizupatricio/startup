var Movie = require("./Movie.js");
var Director = require("./Director.js");

//Exercise 07-1
var $ = require('jquery');

var alien = new Movie();
var ridleyScott = new Director("Ridley Scott");
ridleyScott.set("quotes", ["Cast is everything.", "Do what ..."]);
alien.set("director", ridleyScott);
alien.get("director").speak();


//Exercise 07-2
var rsQuotes = ridleyScott.get("quotes");

$.each(rsQuotes, function(i, item) {
    $("body").show(function() {
        $(this).append("<div>" + rsQuotes[i] + "</div>");
    });
});
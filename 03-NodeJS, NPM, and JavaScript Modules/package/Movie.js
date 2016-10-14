//Exercise 04

var Director = require("./Director.js");

/*---------------------------------------------------Exercise 03--------------------------------------------*/
var Movie = function () {
  this.attributes = {};
  console.log("Creating Movie object...");
}

Movie.prototype.play = function() {
  console.log("Playing " + this.attributes["title"] + "...");
}

Movie.prototype.stop = function() {
  console.log(this.attributes["title"] + " is stop.");
}

Movie.prototype.set = function(attr,value){
  this.attributes[attr] = value;
  console.log(attr + ":" + this.attributes[attr] + " inserted");
}

Movie.prototype.get = function(attr){
  console.log(attr + ":" + this.attributes[attr]);
  return this.attributes[attr];
}

module.exports = Movie;

//Exercise 04

module.exports = Director;
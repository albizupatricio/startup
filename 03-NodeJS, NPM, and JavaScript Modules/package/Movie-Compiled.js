(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*---------------------------------------------------Exercise 04 & Exercise 06--------------------------------------------*/
var Director = function(name){
  this.attributes = {};
  this.attributes["name"] = name;
  console.log("Creating Director: object...");
};

Director.prototype.set = function(attribute,value) {
  this.attributes[attribute] = value;
  console.log(value + " added");
};

Director.prototype.speak = function(){
	console.log(this.attributes["name"] + " says: " + this.attributes["quotes"]);
	return attributes["quotes"];
};

module.exports = Director;
},{}],2:[function(require,module,exports){
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
},{"./Director.js":1}]},{},[2]);

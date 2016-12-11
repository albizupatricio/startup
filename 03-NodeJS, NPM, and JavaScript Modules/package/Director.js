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
var Movie = function () {
  this.attributes = {};
};

Movie.prototype.play = function() {};

Movie.prototype.stop = function() {};

Movie.prototype.set = function(attr,value){
  this.attributes[attr] = value;
  console.log(attr + ":" + this.attributes[attr] + " inserted");
};

Movie.prototype.get = function(attr){
  console.log(attr + ":" + this.attributes[attr]);
  return this.attributes[attr];
};


var HarryPotter = new Movie();
HarryPotter.set("Title","Harry Potter and Philosopher's Stone");
HarryPotter.set("Runtime",152);
HarryPotter.set("Budget",125000000);
HarryPotter.set("Country", "United Kingdom");
var TheHobbit = new Movie();
TheHobbit.set("Title","The Hobbit: An Unexpected Journey");
TheHobbit.set("Director","Peter Jackson");
TheHobbit.set("Language", "English");
var Deadpool = new Movie();
Deadpool.set("Title", "Deadpool");
Deadpool.set("Star", "Ryan Reynolds");
HarryPotter.get("Title");
TheHobbit.get("Title");
Deadpool.get("Title");
HarryPotter.get("Runtime");
HarryPotter.get("Budget");
HarryPotter.get("Country");
TheHobbit.get("Director");
TheHobbit.get("Language");
Deadpool.get("Star");
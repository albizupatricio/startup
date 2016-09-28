var Movie = function () {
  this.attributes = {};
};

Movie.prototype.play = function() {};

Movie.prototype.stop = function() {};

Movie.prototype.set = function(attr,value){
  this.attributes[attr] = value;
  console.log(this.attributes["title"] + ":" + this.attributes[attr] + " inserted");
};

Movie.prototype.get = function(attr){
  console.log(this.attributes["title"] + ":" + this.attributes[attr]);
  return this.attributes[attr];
};

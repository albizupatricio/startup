var Movie = function () {
  this._attributes = {};
};

Movie.prototype.play = function() {};

Movie.prototype.stop = function() {};

Movie.prototype.set = function(attr,value){
  this._attributes[attr] = value;
  console.log(this._attributes["title"] + ":" + this._attributes[attr] + " inserted");
};

Movie.prototype.get = function(attr){
  console.log(this._attributes["title"] + ":" + this._attributes[attr]);
  return this._attributes[attr];
};

/*----------------------------------------------Movie----------------------------------------------------------------*/

var Movie = function () {
  this.attributes = {};
  this.observers = new Array();
};

Movie.prototype.play = function() {
  for(var i = 0; i < this.observers.length; i++){
    this.observers[i].update(this.attributes["title"], "play"); 
  }
};

Movie.prototype.stop = function() {
  for(var i = 0; i < this.observers.length; i++){
    this.observers[i].update(this.attributes["title"], "stop"); 
  }
};

Movie.prototype.set = function(attr,value){
  this.attributes[attr] = value;
};

Movie.prototype.get = function(attr){
  return this.attributes[attr];
};


Movie.prototype.suscribe = function(obj){
  this.observers.push(obj)
}

/*---------------------------------------------MovieObserver-------------------------------------------------------*/

var MovieObserver = function (){};

MovieObserver.prototype.update = function(movie, event){
  switch(event){
    case "play":
      break;
    case "stop":
      console.log(movie + " stopped");
      break; 
  }
};



var terminator = new Movie();
terminator.set("title", "Terminator");
var observer = new MovieObserver();
terminator.suscribe(observer);
terminator.stop();
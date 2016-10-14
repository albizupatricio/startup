function inheritPrototype(childObject, parentObject) {
  var copyOfParent = Object.create(parentObject.prototype);
  copyOfParent.constructor = childObject;
  childObject.prototype = copyOfParent;
}


/*----------------------------------------------Movie----------------------------------------------------------------*/

function Movie() {
  this.attributes = {};
  this.observers = new Array();
};


Movie.prototype.play = function(){
  for(var i = 0; i < this.observers.length; i++){
    this.observers[i].update(this.attributes["title"], "play"); 
  }      
};

Movie.prototype.stop = function(){
  for(var i = 0; i < this.observers.length; i++){
    this.observers[i].update(this.attributes["title"], "stop"); 
  }      
};

Movie.prototype.set = function(attr, value){
  this.attributes[attr] = value;
};

Movie.prototype.get = function(attr){
  return this.attributes[attr];    
};

Movie.prototype.suscribe = function(obj){
  this.observers.push(obj);
};

/*---------------------------------------------MovieObserver-------------------------------------------------------*/

var MovieObserver = function (){};

MovieObserver.prototype.update = function(movie, event){
  switch(event){
    case "play":
      console.log("Playing " + movie);
      break;
    case "stop":
      console.log(movie + " stopped");
      break; 
  }
};

/*---------------------------------------------DownloadableMovie --------------------------------------------------*/

function DownloadableMovie(){
  Movie.call(this);
  console.log("Creating DownloadableMovie object...");
}

inheritPrototype(DownloadableMovie, Movie);

DownloadableMovie.prototype.download = function(){
  console.log("Downloading " + DownloadableMovie.get("title") + "...");   
};


var DownloadableMovie = new DownloadableMovie();
var Observer = new MovieObserver();
DownloadableMovie.set("title", "Harry Potter");
DownloadableMovie.get("title");
DownloadableMovie.suscribe(Observer);
DownloadableMovie.play();
DownloadableMovie.stop();
DownloadableMovie.download();
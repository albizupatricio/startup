/*----------------------------------------------Movie----------------------------------------------------------------*/

var Movie = (function () {
  
  var attributes = {};
  var observers = new Array();

  return {

    play: function(){
      for(var i = 0; i < observers.length; i++){
        observers[i].update(attributes["title"], "play"); 
      }      
    },

    stop: function(){
      for(var i = 0; i < observers.length; i++){
        observers[i].update(attributes["title"], "stop"); 
      }      
    },

    set: function(attr,value){
      attributes[attr] = value;
    },

    get: function(attr){
      return attributes[attr];    
    },

    suscribe: function(obj){
      observers.push(obj);
    }

  };

});

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


var Terminator = new Movie();
Terminator.set("title", "Terminator");
var observer = new MovieObserver();
Terminator.suscribe(observer);
Terminator.play();
Terminator.stop();
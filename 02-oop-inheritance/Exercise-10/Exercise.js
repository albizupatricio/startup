/*--------------------------------------------------- Social Mixin--------------------------------------------*/
var Social = function(){}

Social.prototype = {

  share: function(friendName){
    console.log("Sharing " + this.get("title") + " with " + friendName);
  },

  like: function(){
    console.log("I Like " + this.get("title") + "!!!!");
  }
};


/*---------------------------------------------------Movie--------------------------------------------*/
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


/*----------------------------------------------------------------------------------------------------*/

// Extend an existing object with a method from another
function augment( receivingClass, givingClass ) {
 
    // only provide certain methods
    if ( arguments[2] ) {
        for ( var i = 2, len = arguments.length; i < len; i++ ) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    }
    // provide all methods
    else {
        for ( var methodName in givingClass.prototype ) {
 
            // check to make sure the receiving class doesn't
            // have a method of the same name as the one currently
            // being processed
            if ( !Object.hasOwnProperty.call(receivingClass.prototype, methodName) ) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
 
            // Alternatively (check prototype chain as well):
            // if ( !receivingClass.prototype[methodName] ) {
            // receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            // }
        }
    }
}

//Extend of Social Mixin
augment( Movie, Social, "share", "like" );


var movie = new Movie();
movie.set("title", "Harry Potter and Philosopher's Stone");
movie.share("Patricio Albizu");
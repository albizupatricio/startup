/*--------------------------------------------------- Social Mixin--------------------------------------------*/
var Social = function() {

  this.share= function(friendName){
    console.log("Sharing " + this.get("title") + " with " + friendName);
  },

  this.like= function(){
    console.log("I Like " + this.get("title") + "!!!!");
  }
};


/*---------------------------------------------------Movie--------------------------------------------*/
var Movie = function () {
  this.attributes = {};
};

Movie.prototype = {

	play: function() {
  	  console.log("Playing " + this.attributes["title"] + "...");
	},

	stop: function() {
  	  console.log(this.attributes["title"] + " is stop.");
	},

	set: function(attr,value){
  	  this.attributes[attr] = value;
	},

	get: function(attr){
  	  return this.attributes[attr];
  	}
};

//Extend of Social Mixin
Social.call(Movie.prototype);


var movie = new Movie();
movie.set("title", "Harry Potter and Philosopher's Stone");
movie.share("Patricio Albizu");
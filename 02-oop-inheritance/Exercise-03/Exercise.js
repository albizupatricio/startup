/*----------------------------------------------Movie----------------------------------------------------------------*/

var Movie = function () {
  this.attributes = {};
};

Movie.prototype.play = function() {
	MovieObserver.play(this);
};

Movie.prototype.stop = function() {
	MovieObserver.stop(this);
};

Movie.prototype.set = function(attr,value){
  this.attributes[attr] = value;
};

Movie.prototype.get = function(attr){
  return this.attributes[attr];
};


/*---------------------------------------------MovieObserver-------------------------------------------------------*/

var MovieObserver = function (){
	this.observer = [];
};

MovieObserver.prototype.subscribe = function(movie){
	this.observer.push(movie);
};

MovieObserver.prototype.unsubscribe = function(movie){
    this.observer = this.observer.filter(
	    function(item) {
	        if (item !== movie) {	
	            return item;
	        }
	    }
    );
};

MovieObserver.prototype.showSubscribes = function(){
	console.log("The Movies with the Subscription are: ");
	for(var z = 0; z < this.observer.length;z++){
		console.log(this.observer[z].get("title"));
	}
};

MovieObserver.prototype.stop = function(movie) {
	for(var z = 0; z < this.observer.length;z++){
		if(this.observer[z] == movie){
			console.log(movie.get("title") + " is stop.")
		}	
	}
};

MovieObserver.prototype.play = function(movie) {
	for(var z = 0; z < this.observer.length;z++){
		if(this.observer[z] == movie){
			console.log(movie.get("title") + " is playing...")
		}	
	}
};


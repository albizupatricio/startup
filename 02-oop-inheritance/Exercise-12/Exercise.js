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

/*---------------------------------------------------Actor--------------------------------------------*/
var Actor = function(name, lastName, age) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
};

Actor.prototype = {

  getName: function(){
    return this.name;
  },

  setName: function(name){
      this.name = name;
  },

  getLastName: function(){
    return this.lastName;
  },

  setLastName: function(lastName){
      this.lastName = lastName;
  },

  getAge: function(){
    return this.age;
  },

  setAge: function(age){
      this.age = age;
  },

  makeMovie: function(Movie){
      console.log(this.name + " " + this.lastName + "is making a movie...");
  }
};


/*---------------------------------------------------Actors Mixin--------------------------------------------*/

var Actors = function() {
  this.actors = [];

  this.addActor = function(actor){
    this.actors.push(actor);
  },

  this.removeActor = function(actor){
    this.actors = this.actors.filter(
      function(item) {
          if (item !== actor) { 
              return item;
          }
    });
  },

  this.showActors = function(){
    console.log("List of " + this.get("title") + " cast members: ");
    for(var i = 0; i < this.actors.length;i++){
        console.log(this.actors[i].getName() + " " + this.actors[i].getLastName());
    }
  }
};



var harryPotter = new Movie();
harryPotter.set("title", "Harry Potter and Philosopher's Stone")
Actors.call(harryPotter); //Extends only for this movie
var emmaWatson = new Actor("Emma", "Watson", 26);
emmaWatson.getName();
var ruperGrint = new Actor("Rupert", "Grint", 28);
var danielRadcliff = new Actor("Daniel", "Radcliff", 27);
harryPotter.addActor(emmaWatson);
harryPotter.addActor(ruperGrint);
harryPotter.addActor(danielRadcliff);
harryPotter.showActors();

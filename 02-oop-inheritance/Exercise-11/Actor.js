/*---------------------------------------------------Actor--------------------------------------------*/
var Actor = function(name, lastName, age) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
};

Actor.prototype = {

  getName: function(){
    console.log(this.name);
    return this.name;
  },

  setName: function(name){
  	  console.log("The new name for " + this.name + " " + this.lastName + " is " + name);
      this.name = name;
  },

  getLastName: function(){
    console.log(this.lastName);
    return this.lastName;
  },

  setLastName: function(lastName){
      console.log("The new surname for " + this.name + " " + this.lastName + " is " + lastName);
      this.lastName = lastName;
  },

  getAge: function(){
    console.log(this.age);
    return this.age;
  },

  setAge: function(age){
      console.log("The new age for " + this.name + " " + this.lastName + " is " + age);
      this.age = age;
  },

  makeMovie: function(Movie){
      console.log(this.name + " " + this.lastName + "is making a movie...");
  }
};


var emmaWatson = new Actor("Emma", "Watson", 26);
emmaWatson.getName();
emmaWatson.getLastName();
emmaWatson.getAge();
var danielRadcliff = new Actor("Daniel", "Radcliff", 27);
danielRadcliff.getName();
danielRadcliff.getLastName();
danielRadcliff.getAge();
var rupertGrint = new Actor("Rupert", "Grint", 28);
rupertGrint.getName();
rupertGrint.getLastName();
rupertGrint.getAge();



//Ejercicio 3------
/*-------------------------------------Modulo de Movie sin el Observador------------*/

var Movie = function () {
  
  var attributes = {};

  return {

    play: function(){},

    stop: function(){},

    set: function(attr,value){
      attributes[attr] = value;
    },

    get: function(attr){
      return attributes[attr];    
    },

  };

};

module.exports = Movie;
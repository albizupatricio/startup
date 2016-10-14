//Ejercicio 4-----
/*-------------------------------------Modulo de Director------------*/

var Director = function (directorName) {
  
  var attributes = {};
  attributes["name"] = directorName;

  return {

    set: function(attribute, value) {
      attributes[attribute] = value;
    },

    speak: function(){
      return attributes["quotes"];
    },

    get: function(attribute){
      return attributes[attribute];
    }

  };

};

module.exports = Director;
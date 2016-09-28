
var Movie = function () {
  var attributes = {};
  console.log("Creating Movie object...");

	return {

		play:function(){
		  console.log("Playing " + attributes["title"] + "...");  
		},

		stop:function(){
		  console.log(attributes["title"] + " is stop.");	
		},

		set:function(attr,value){
	      attributes[attr] = value;
	      console.log(attr + ":" + attributes[attr] + " inserted");
		},

		get:function(attr){
	 	  console.log(attributes[attr]);
	  	  return attributes[attr];
		},
	}
};

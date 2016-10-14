/*---------------------------------------------------Mixin Social--------------------------------------------*/

var SocialMixin = function(){};

SocialMixin.prototype = {
	
  share: function(friendName){
    console.log("Sharing with " + friendName);
  },

  like: function(){
    console.log("Like!!");
  }
};


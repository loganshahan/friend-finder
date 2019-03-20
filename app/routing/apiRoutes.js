var path = require("path");

var friends = require('../data/friends.js');

module.exports = function(app){

app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

 

  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = req.body;
    var friendScore = newFriend.scores;

    var match = '';
    var matchImg = '';
    var totalDiff = 1000;
    
  
    // console.log(newFriend);
    // console.log(friendScore);

    for(var i=0; i<friends.length; i++){
      var diff = 0;
      for(var j=0; j<friendScore; j++){
        diff += Math.abs(friends[i].scores[j] - friendScore);
        console.log(diff);
      };
      if(diff< totalDiff){
        totalDiff = diff;
        match = friends[i].name;
        matchImg = friends[i].photo;
      };
    };


  
    friends.push(newFriend);
  
    res.json({status: 'OK' , match: match, matchImg: matchImg});
  });
};
  
var path = require("path");

var friends = require('../data/friends');

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
    
  
    

    for(var i=0; i<friends.length; i++){
      var diff = 0;
      for(var j=0; j<friend[i].scores.length; j++){
        diff += Math.abs(friendScore - friends[i].scores[j]);
        
      };
      if(diff< totalDiff){
        totalDiff = diff;
        match = friends[i].name;
        
        matchImg = friends[i].photo;
      };
    };

    console.log(newFriend);
    console.log(friendScore);
    console.log(diff);
    console.log(match);
    console.log(matchImg);

  
    friends.push(newFriend);
  
    res.json({status: 'OK' , match: match, matchImg: matchImg});
  });
};
  
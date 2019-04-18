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
    // var friendScore = newFriend.scores;
    for(var i=0; i<newFriend.scores.length; i++){
      newFriend.scores[i] = parseInt(newFriend.scores[i]);
    }

    var match = '';
    var matchImg = '';
    var bestFriendIndex = 0;
    var minimumDiff = 400;
    
  
    

    for(var i=0; i<friends.length; i++){
      var totalDiff = 0;
      for(var j=0; j<friends[i].scores.length; j++){
        var difference = Math.abs(newFriend.scores[j] - friends[i].scores[j]);
        totalDiff += difference
      };
      if(totalDiff< minimumDiff){
        bestFriendIndex = i;
        // totalDiff = diff;
        minimumDiff = totalDiff
        match = friends[bestFriendIndex].name;
        matchImg = friends[bestFriendIndex].photo;
      };
    };

    console.log(newFriend);
    console.log(newFriend.scores);
    console.log(totalDiff);
    console.log(bestFriendIndex);
    console.log(match);
    console.log(matchImg);
    console.log(friends[bestFriendIndex])

  
    friends.push(newFriend);
  
    res.json({status: 'OK' , match: match, matchImg: matchImg});
    // res.json(friends[bestFriendIndex])
  });
};
  
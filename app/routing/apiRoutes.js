var friendData = require("../data/friends");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", async function (req, res) {
    var newFriend = await req.body;
    console.log(newFriend);
    var resArr = [];
    // loop through all friends
    for (var i = 0; i < friendData.length; i++) {
      var diff = 0;
      var result = newFriend.scores.map(function (x) {
        return parseInt(x);
      });
      var data = friendData[i].scores;
      // loop through all scores
      for (var j = 0; j < result.length; j++) {
        diff += Math.abs(result[j] - data[j]);
      };
      resArr.push(diff);
    }
    // this finds the lowest number in results
    var lowest = Math.min(...resArr);
    var match;

    // loop through results to find index of lowest
    for (var a = 0; a < resArr.length; a++) {
      if (lowest === resArr[a]) {
        match = friendData[a];
      }
    }

    friendData.push(newFriend);
    console.log(match)
    return res.json(match);
  });
}

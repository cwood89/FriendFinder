var friendData = require("../data/friends");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", async function (req, res) {
    var newFriend = await req.body;
    var resArr = [];

    for (var i = 0; i < friendData.length; i++) {
      var diff = 0;
      var result = newFriend.scores;
      var data = friendData[i].scores;

      for (var j = 0; j < result.length; j++) {
        diff += Math.abs(result[j] - data[j]);
      };
      resArr.push(diff);
    }

    let lowest = Math.min(...resArr);
    let match;
    for (var a = 0; a < resArr.length; a++) {
      if (lowest === resArr[a]) {
        match = friendData[a];
      }
    }
    friendData.push(newFriend);
    return res.json(match);
  });
}

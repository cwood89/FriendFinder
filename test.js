
function x() {
  var resArr = [];
  for (var i = 0; i < obj.length; i++) {
    var diff = 0;
    // Convert each user's results into a simple array of numbers
    var data = obj[i].score;
    var res = input.score;

    for (var j = 0; j < res.length; j++) {
      //compare difference between current user score against other users score, question by question. 
      // Add up the differences to calculate the`totalDifference`.
      diff += Math.abs(res[j] - data[j]);
      // Remember to use the absolute value of the differences.Put another way: no negative solutions! Your app should calculate both`5-3` and`3-5` as `2`, and so on. 
    };
    resArr.push(diff);
  }


  console.log(resArr);
  // The closest match will be the user with the least amount of difference.
  let lowest = Math.min(...resArr);
  let match;
  for (var a = 0; a < resArr.length; a++) {
    if (lowest === resArr[a]) {
      match = obj[a];
    }
  }
  console.log(match);
};





var input = {
  name: "chris",
  score: [4, 2, 8, 6, 2, 6, 9, 2, 4, 2]
};

var obj = [
  {
    name: "mike",
    score: [1, 8, 4, 6, 8, 4, 5, 2, 7, 3]
  },
  {
    name: "tracy",
    score: [9, 4, 5, 9, 7, 8, 4, 1, 1, 9]
  },
  {
    name: "felecia",
    score: [7, 1, 3, 8, 4, 6, 8, 5, 3, 3]
  }
];
x();
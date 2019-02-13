const surveyQuestions = [
  "You enjoy being in a social enviroment.",
  "You are a spontaneous individual.",
  "People rarely upset you.",
  "You have just as much fun staying in opposed to going out.",
  "A good book is better than any movie.",
  "You are an active individual.",
  "You believe in karma.",
  "Respect is earned not given.",
  "You are a very relaxed person.",
  "Everyone is equal regardless of race, religion, color, creed, and sexual orientation."
];

var user = {
  "name": "",
  "photo": "",
  "scores": []
};

var container = $("#display");
var counter = 0;

function askQuestion() {
  container.empty();
  container.append(
    `<h2>${counter + 1}. ${surveyQuestions[counter]}</h2>
    <form id="answers"> 
    <input type="radio" name="answer" value="1"> 1 (strongly disagree)
    <input type="radio" name="answer" value="2"> 2
    <input type="radio" name="answer" value="3"> 3
    <input type="radio" name="answer" value="4"> 4
    <input type="radio" name="answer" value="5"> 5 (strongly agree)
    </form>
    <button id="next">Next</button>`
  );
  counter = counter + 1;
};

container.on("click", "button", function (e) {
  e.preventDefault();
  switch (counter) {
    case 0:
      user.name = $("#name").val();
      user.photo = $("#photo").val();
      askQuestion();
      break;
    case 10:
      if ($("input[name=answer]:checked").length == 0) {
        alert("Select an option");
      } else {
        user.scores.push(parseInt($("input[name=answer]:checked").val()));
        $.post("/api/friends", user, function (data) {
          container.empty();
          container.append(`
        <h2>Your Match</h2>
        <p>Name: ${data.name}</p>
        <img src="${data.photo}" alt="Your Match" width="300px" height="300px">
        `);
          alert("you have a match");
        })
      };
      break;
    default:
      if ($("input[name=answer]:checked").length == 0) {
        alert("Select an option");
      } else {
        user.scores.push(parseInt($("input[name=answer]:checked").val()));
        askQuestion();
        break;
      };
  }
});



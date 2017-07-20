var answers = ["Bonjour.", "La forme ?", "On va manger des chips !", "Quoi ? C'est tout ce que ça te fait quand je te dis qu'on va manger des chips ?", "Tu fais la gueule ou quoi ?"];
var answersEnd = ["On a plus rien à se dire.", "On a plus rien à se dire.", "T'es bouché ?", "On a vraiment plus rien à se dire.", "T'as que ça à faire ?", "Tu dois vraiment avoir une vie passionante..."];
var waitingAnswer = 0;

$("button").click(userTalk);
$(document).keypress(function(e) {
  if (e.which == 13) {
    userTalk();
  }
});

function userTalk() {
  if ($("textarea").val() && waitingAnswer == 0) {
    $(".chatDisplay").append("<p class='user'>" + $("textarea").val() + "</p>");
    waitingAnswer = 1;
    setTimeout(answer, 300);
  }
}

function answer() {
  $("textarea").val("");
  $(".chatDisplay").append("<p class='waitmessage'>Jean-Didier is typing</p>");

  setTimeout(function() {
    $("img").remove();
    $("p").remove(".waitmessage");
    if (answers.length != 0) {
      $(".chatDisplay").append("<p class='robot'>" + answers[0] + "</p>");
      answers.shift();
    }
    else {
      $(".chatDisplay").append("<p class='robot'>" + answersEnd[0] + "</p>");
      answersEnd.push(answersEnd.shift());
    }
    waitingAnswer = 0;
  }, 1500);
  $(".chatDisplay").animate({
    scrollTop: $(".chatDisplay").get(0).scrollHeight
  }, 2000);
}

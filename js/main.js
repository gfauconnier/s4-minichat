// GLOBAL VARIABLES DECLARATION
var answers = ["Bonjour.", "La forme ?", "On va manger des chips !", "Quoi ? C'est tout ce que ça te fait quand je te dis qu'on va manger des chips ?", "Tu fais la gueule ou quoi ?"];
var answersEnd = ["On a plus rien à se dire.", "On a plus rien à se dire.", "T'es bouché ?", "On a vraiment plus rien à se dire.", "T'as que ça à faire ?", "Tu dois vraiment avoir une vie passionante..."];
var waitingAnswer = 0;
// GLOBAL VARIABLES DECLARATION

// On button click calls userTalk function
$("button").click(userTalk);

// On 'Return' key press calls userTalk function
$(document).keypress(function(e) {
  if (e.which == 13) {
    userTalk();
  }
});


/**
 * userTalk - adds a p to div.chatDisplay and starts a timeout that'll call answer function
 *
 * @return {type}  nothing to return
 */
function userTalk() {
  if ($("textarea").val() && waitingAnswer == 0) {
    $(".chatDisplay").append("<p class='user'>" + $("textarea").val() + "</p>");
    waitingAnswer = 1;
    setTimeout(answer, 300);
  }
}


/**
 * answer - displays a 'waiting' message (adding a p to div.chatDisplay) then starts a timeout that'll
 *          remove the 'waiting' message and replace it by an element of the answers arrays
 *
 * @return {type}  nothing to return
 */
function answer() {
  $("textarea").val("");
  $(".chatDisplay").append("<p class='waitmessage'>Jean-Didier is typing</p>");

// displays the answer
  setTimeout(function() {
    $("img").remove();
    $("p").remove(".waitmessage");
    // answers array still have cells then adds a p with its content
    if (answers.length != 0) {
      $(".chatDisplay").append("<p class='robot'>" + answers[0] + "</p>");
      answers.shift(); // removes the first element of answer array
    }
    // when answers is empty switches to answersEnd array
    else {
      $(".chatDisplay").append("<p class='robot'>" + answersEnd[0] + "</p>");
      answersEnd.push(answersEnd.shift()); // pushes the first element of answersEnd array to the end
    }
    waitingAnswer = 0;
  }, 1500);
  // auto scrolls div.chatDisplay when overflow is needed
  $(".chatDisplay").animate({
    scrollTop: $(".chatDisplay").get(0).scrollHeight
  }, 2000);
}

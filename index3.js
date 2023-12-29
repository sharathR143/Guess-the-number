"use strict";
/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "correct number..!";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displaymessage = function (messagecontent) {
  document.querySelector(".message").textContent = messagecontent;
};

// CHECK CLICK METHOD
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "NO Number Select..!";
    displaymessage("⛔️NO Number Select..!");
  }

  //when  player win
  else if (guess == secretnumber) {
    // document.querySelector(".message").textContent = "correct number..!";
    displaymessage("🎉correct number..!");
    document.querySelector(".number").textContent = secretnumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // Higher score method
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // When guess is wrong
  else if (guess !== secretnumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretnumber ? "Too High..!!" : "TOO Low..!!";
      displaymessage(guess > secretnumber ? "Too High..!!" : "TOO Low..!!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "you lost the game";
      displaymessage("💥you lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }

  // when guess is too high
  /*
  else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High..!!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }

  // when guess is too low
  else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low..!!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
  */
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK 😀
*/

// Agian method
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector(".message").textContent = "start guessing...";
  displaymessage("start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";

  document.querySelector(".highscore").textContent = highscore;
});

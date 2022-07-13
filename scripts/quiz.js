var myQuestions = [
  {
    question: "1. Who is The Mayor of New Orleans?",
    answers: {
      a: "Bibi",
      b: "LaToya Cantrell",
      c: "Bennett",
    },
    correctAnswer: "b",
  },
  {
    question: "2. How do we celebrate Mardi-Gras?",
    answers: {
      a: "Fly to paris",
      b: "Throw a Parade",
      c: "Get Married",
    },
    correctAnswer: "b",
  },
  {
    question: "3. How long is Mardi-Gras?",
    answers: {
      a: "Two days",
      b: "A Month",
      c: "About 2 weeks",
    },
    correctAnswer: "c",
  },
  {
    question: "4. How Much does it cost to go to Mardi-Gras?",
    answers: {
      a: "20$ a person",
      b: "5$ a person",
      c: "free",
    },
    correctAnswer: "c",
  },
  {
    question: "5. Can i Bring my kid to Mardi-Gras?",
    answers: {
      a: "Yes your kids will love it!",
      b: "Nope, you have to be at least 18 years old",
      c: "You can, but its not recommended",
    },
    correctAnswer: "a",
  },
  {
    question: "6. What are the Mardi-Gras Colors?",
    answers: {
      a: "Green Purple and Yellow",
      b: "Black And White",
      c: "Red Orange And White",
    },
    correctAnswer: "a",
  },
  {
    question: "7. Where is Mardi-Gras Originally from?",
    answers: {
      a: "France",
      b: "Israel",
      c: "Saudi Arabia",
    },
    correctAnswer: "a",
  },
  {
    question: "8. Where is the Mardi-Gras parade?",
    answers: {
      a: "New York City",
      b: "New Orleans",
      c: "Log Angeles",
    },
    correctAnswer: "b",
  },
  {
    question: "9. Where Will the 2023 Mardi-Gras parade be celebrated?",
    answers: {
      a: "Washington DC",
      b: "Florida",
      c: "New Orleans",
    },
    correctAnswer: "c",
  },
  {
    question: "10. Which quarter of the city is the parade celebrated at?",
    answers: {
      a: "French Quarter",
      b: "Museum Quarter",
      c: "Old Quarter",
    },
    correctAnswer: "a",
  },
];

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
  function showQuestions(questions, quizContainer) {
    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers;

    // for each question...
    for (var i = 0; i < questions.length; i++) {
      // first reset the list of answers
      answers = [];

      // for each available answer...
      for (letter in questions[i].answers) {
        // ...add an html radio button
        answers.push("<label>" + '<input type="radio" name="question' + i + '" value="' + letter + '">' + letter + ": " + questions[i].answers[letter] + "</label><br>");
      }

      // add this question and its answers to the output
      output.push('<br><div class="question">' + questions[i].question + "</div>" + '<br><div class="answers">' + answers.join("") + "</div>");
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults(questions, quizContainer, resultsContainer) {
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    var userAnswer = "";
    var numCorrect = 0;

    // for each question...
    for (var i = 0; i < questions.length; i++) {
      // find selected answer
      userAnswer = (answerContainers[i].querySelector("input[name=question" + i + "]:checked") || {}).value;

      // if answer is correct
      if (userAnswer === questions[i].correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[i].style.color = "lightgreen";
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[i].style.color = "red";
      }
    }

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + " out of " + questions.length;
  }

  // show questions right away
  showQuestions(questions, quizContainer);

  // on submit, show results
  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  };
}

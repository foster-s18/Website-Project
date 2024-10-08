

// ********** ACCESSIBILITY HIGH CONTRAST MODE **********

// contrast mode on toggle
let contrastModeOn = false;


// toggle function
function toggleContrast() {
  contrastModeOn = !contrastModeOn; 

  if (contrastModeOn) {
    enableContrastMode(); 
  } else {
    disableContrastMode(); 
  }
}


// function to enable text easier viewing
function enableContrastMode() {
  const heading = document.querySelector('.competition h1');
  heading.style.textShadow = "none";
}



// function to revert back to default settings
function disableContrastMode() {

  const heading = document.querySelector('.competition h1')
  heading.style.textShadow = "";
}



// take quiz button
$(document).ready(function() {
    $('#take-quiz').click(function() {
      $('.info').fadeOut(1000, function(){
        $('.quiz').show();
        $('#question1').fadeIn(1000);
      })
    });
});


 // initialise scores/questions  
let score = 0;
let currentQuestion = 1;

// correct answer array
const correctAnswers = ['b', 'd', 'b', 'd', 'c'];


// next question button
function nextQuestion() {
  $('.question #next').prop('disabled', true);

  // Get the selected answer for the current question
  var selectedAnswer = $('input[name="q' + currentQuestion + '"]:checked');

  // Increase the score if the selected answer matches the correct answer
  if (selectedAnswer.length && selectedAnswer.val() === correctAnswers[currentQuestion - 1]) {
    score++;
  }

  // Fade out the current question and add count to currentQuestion
  $('#question' + currentQuestion).fadeOut(function() {
    currentQuestion++;

    // show next question if less tahn question 5
    if (currentQuestion <= 5) {
      $('#question' + currentQuestion).fadeIn();
      $('.question #next').prop('disabled', false);
    } else {
      $('.thanos-match').fadeIn();
    } 
  });
}



$(function() {

    // initialise droppable count and assign key/value draggable images to their droppable areas
    var droppableCount = 0;
    var correctDragDrop = {
        "yellow-stone": "yellow-area",
        "red-stone": "red-area",
        "purple-stone": "purple-area",
        "green-stone": "green-area",
        "blue-stone": "blue-area",
        "orange-stone": "orange-area"
    };

    // Make stone images draggable and revert to start if not dropped in droppable area
    $('.draggable-image').draggable({
        revert: 'invalid', 
        cursor: 'move',
        cursorAt: { top: 25, left: 15 }, // fix image grab cursor area
    });

    // Make droppable areas accept draggable images
    $('.droppable-area1, .droppable-area2, .droppable-area3, .droppable-area4, .droppable-area5, .droppable-area6').droppable({
        drop: function(event, ui) {
            var droppedImageId = ui.draggable.attr('id');
            var droppableAreaId = $(this).attr('id');


            var expectedArea = correctDragDrop[droppedImageId];

            // if correct image drag/dropped in correct area make image undraggable and area undroppable. Play mp3 sound
            if (expectedArea === droppableAreaId) {
                droppableCount++;  
                var audioPlayer = document.getElementById("audioPlayer2");
                audioPlayer.play();
                $('#' + droppedImageId).draggable('disable'); // Disable the draggable stone
                $(this).droppable('disable'); // Disable the droppable area
            } else {
                var audioPlayer = document.getElementById("audioPlayer3");
                audioPlayer.play();
            }

            // If all stones are in the correct droppable area
            if (droppableCount === 6) {
                $('#thanos').attr('src', 'images/competition_images/thanos_complete.png');
                $('.draggable').hide();
                $('.droppable-image').hide();
                var audioPlayer = document.getElementById("audioPlayer1");
                audioPlayer.play();

                // Animation times to replicate speech pattern from mp3
                $('#thanos-mouth').animate({top: '10px'}, 200)
                    .animate({top: '0px'}, 300)
                    .delay(1100)
                    .animate({top: '10px'}, 100)
                    .animate({top: '0px'}, 200)
                    .animate({top: '10px'}, 100)
                    .animate({top: '0px'}, 200)
                    .animate({top: '10px'}, 300)
                    .animate({top: '0px'}, 100)
                    .animate({top: '10px'}, 100)
                    .animate({top: '0px'}, 500, function() {

                        // Delay for after animation completion before try again/successful screen
                        setTimeout(function() {
                            if (score < 5) {
                                $('.quiz').hide();
                                $('.thanos-match').hide();
                                $('.competition h1').text("Better luck next time!");
                                $('.try-again p').html("You scored " + score + " out of 5.");
                                $('.try-again').show();
                                $('.question #next').prop('disabled', false);
                            } else {
                                $('.quiz').fadeOut(function() {
                                $('.competition h1').text("Congratulations!!");
                                    $('.win').show();
                                    $('.question #next').prop('disabled', false);
                                });
                            }
                        }, 2000);
                    });
            }
        }
    });
});



// continue to revert to main screen
$(document).ready(function() {
    $('#continue').click(function() {
        $('.competition h1').fadeOut(1000);
        $('.try-again').fadeOut(1000, function(){
            $('.competition h1').text("Win an Unlimited VIP cinema ticket.");
            $('.info').fadeIn(1000);
            $('.competition h1').fadeIn(1000);
            location.reload(); // refresh page to reset questions/security check
        });
    });
});



$(document).ready(function() {
    $('#quiz-form').submit(submitEntry); 
});

function submitEntry(event) {
  event.preventDefault()

  // gets values inputted from each field in form and store in local variables 
  let firstName = document.getElementById('firstName').value;
  let surname = document.getElementById('surname').value;
  let email = document.getElementById('email').value;
  let emailConfirm = document.getElementById('emailConfirm').value;


  // passes each stored field variable as argument into related functions for validation checks.
  // if returned value from function is false, will exit main function to stop multiple messages
  // from other invalid entries so user can clearly identify the field that needs fixed 

  let nameResult = validateName(firstName);
  if (nameResult === false) {
    return
  }

  let surnameResult = validateSurname(surname);
   if (surnameResult === false) {
    return
  }

  let emailResult = validateEmail(email, emailConfirm);
  if (emailResult === false) {
    return
  }


// submits form if all fields pass validation check
  document.getElementById('quiz-form').submit();


//  alerts user that form has been submitted and displays inputted information
  alert(`Well done ${nameResult}, you have successfully entered our competition. Good luck!`);
}


// Function to validate form first name field.
// @param {string} userFirstName - The user's form input for first name.
// @returns {boolean} - Returns false if first name fails any validation check
// @returns {string} - Returns the validated first name if all checks pass

function validateName(userFirstName) {

  // removes an leading/trailing whitespace from user entry
  let firstName = userFirstName.trim();

  // checks if entry is an empty field and displays alert
  if (firstName === "") {
    alert("First name field cannot be blank.");
    return false;
  }

  // checks if entry exceeds 20 characters in length and displays alert
  if (firstName.length > 20) {
    alert("First name should be less than 20 characters.");
    return false;
  } 

// regexp to check for digit
  let regexp = /\d/g;

  // if statement to check first name for digit and displays alert
  if (regexp.test(firstName)) {
    alert("First name should not contain numbers.");
    return false;
  }

  // coverts all characters to lowercase and capitalizes first letter if all validation pass. 
  // then returns validated firstName to main function

  firstName = firstName.toLowerCase();
  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  return firstName;  
}



// Function to validate form surname field.
// @param {string} userSurname - The user's form input for surname.
// @returns {boolean} - Returns false if surname fails any validation check
// @returns {string} - Returns the validated surname if all checks pass

function validateSurname(userSurname) {


  // removes an leading/trailing whitespace from user entry
  let surname = userSurname.trim();

  // checks if entry is an empty field and displays alert
  if (surname === "") {
    alert("Surname field cannot be blank.");
    return false

    // checks if entry exceeds 20 characters in length and displays alert
  } if (surname.length > 20) {
      alert("Surname should be less than 20 characters.");
      return false;
    }

  // regexp to check for digit
  let regexp = /\d/g;

  // if statement to check surname for digit and displays alert
  if (regexp.test(surname)) {
    alert("Surname should not contain numbers.");
    return false;
  }


  // coverts all characters to lowercase and captilises first letter if validation ok. returns validated surname
  surname = surname.toLowerCase();
  surname = surname.charAt(0).toUpperCase() + surname.slice(1);
  return surname;   
}

// function to validate email address
// @param {string} userEmail - The user's form input for email
// @param {string} userEmailConfirm - The users form input for email confirm
// @returns {boolean} - Returns false if email fails validation checks
// @returns {string} - Returns email if validation passes

function validateEmail(userEmail, userEmailConfirm) {

  // checks if email length under 7 character or over 30 and returns false to main function if condition met
  if (userEmail.length < 7 || userEmail.length > 30) {
    alert("Invalid email length. Email should be 7 to 30 characters long.");
    return false;

  // checks if email does not include '.' and '@' symbol and returns false to main function if condition met
  } else if (!(userEmail.includes(".") && userEmail.includes('@'))) {
    alert("Email is invalid.");
    return false;

  // checks if email field is blank and returns false to main function if condition met
  } else if (userEmailConfirm === "") {
    alert("Confirm email field cannot be empty.");
    return false;

  // check if email does not match email confirmation field and returns false if condition is met
  } else if (userEmail !== userEmailConfirm) {
    alert("Email confirmation does not match.");
    return false;
  }
  
  // If none of the conditions are met, return email to main function indicating valid email
  return userEmail;
}



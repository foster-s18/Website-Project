

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

// enable function for easier viewing
function enableContrastMode() {

  const booking = document.querySelector('.booking-image h1');
  booking.style.textShadow = "none";

  const body = document.querySelector('body');
  body.style.background = "black";
}


// function to revert viewing back to default settings
function disableContrastMode() {

    const booking = document.querySelector('.booking-image h1');
    booking.style.textShadow = "";
    const body = document.querySelector('body');
    body.style.background = "";
} 

document.addEventListener('DOMContentLoaded', function() {
    // Function to update the current date and time
    function updateDateTime() {
        // Get the current date and time
        var ukTime = new Date();

        // Extract day, month, year, hours, minutes, and seconds
        var day = ukTime.getDate();
        var month = ukTime.toLocaleString('en-uk', { month: 'long' });
        var year = ukTime.getFullYear();
        var hours = ukTime.getHours();
        var minutes = ukTime.getMinutes();
        var seconds = ukTime.getSeconds();

        // Format hours, minutes, and seconds to have leading zero if less than 10
        hours = (hours < 10) ? '0' + hours : hours;
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;

        // Add nd/rd/th suffix to the day
        var suffix = "";
        if (day === 1 || day === 21 || day === 31) {
            suffix = "st";
        } else if (day === 2 || day === 22) {
            suffix = "nd";
        } else if (day === 3 || day === 23) {
            suffix = "rd";
        } else {
            suffix = "th";
        }

        // Display the current date and time in the specified in .time class
        document.querySelector('.time h1').textContent = day + suffix + ' ' + month + ' ' + year + ' ' + hours + ':' + minutes + ':' + seconds;
    }

    // Call updateDateTime to display the current date and time and do update it every second
    updateDateTime();
    setInterval(updateDateTime, 1000);
});



// function to disable a movie showing time in booking menu dropdown if current time passes movie start time
$(document).ready(function() {
    $('#showing-date').change(function() {
        var ukTime = new Date();
        var selectDate = $('#showing-date').val();
        var currentDate = new Date().toISOString().split('T')[0]; //returns the current date in the format "YYYY-MM-DD".

        // extract time options from dropdown menu using slice to get first 2 numbers and convert to interger (ie. 12:00pm = 12)
        var show1 = $('#showing-time option#show-1').val();
        var show2 = $('#showing-time option#show-2').val();
        var show3 = $('#showing-time option#show-3').val();
        var show4 = $('#showing-time option#show-4').val();
        var show1Hour = Number(show1.slice(0, 2)); 
        var show2Hour = Number(show2.slice(0, 2)); 
        var show3Hour = Number(show3.slice(0, 2)); 
        var show4Hour = Number(show4.slice(0, 2));
        var hour = ukTime.getHours();  

        var selectDate = $('#showing-date').val();   


        // if current date matches the date you wish to watch movie. 
        // it hides options if current time is greater than show start time
        if (selectDate === currentDate) {
            if (hour >= show1Hour) {
                $('#showing-time option#show-1').hide();
            }
            if (hour >= show2Hour) {
                $('#showing-time option#show-2').hide();
            }
            if (hour >= show3Hour) {
                $('#showing-time option#show-3').hide();
            }
            if (hour >= show4Hour) {
                $('#showing-time option#show-4').hide();
            }
        } else {
            $('#showing-time option#show-1').show();
            $('#showing-time option#show-2').show();
            $('#showing-time option#show-3').show();
            $('#showing-time option#show-4').show();      
        }           
    });
});



$(document).ready(function() {
    // Function to toggle the seat selection message if any menu option put back to default
    function selectionMessage(selectedMovie, selectedDate, selectedTime) {
        if (selectedMovie !== 'Choose Movie' && selectedDate !== 'Choose Date' && selectedTime !== 'Choose Time') {
            $('.select-seats p').html('<b>Select seats</b> - Total Cost: £00:00');
            $('.booking-section-1').slideDown(2000);

        } else {
            $('.select-seats p').html('<br>Choose movie, date and time to enable seat selection.');
            $('.booking-section-1').hide();
        }
    }

    // Add change event listeners to movie, date, and time selection and change text output for checkout
    $('#showing-movie, #showing-date, #showing-time').change(function() {
        $('.seat a').find('img').attr('src', 'images/whatson_images/seat_middle.png');
        var selectedMovie = $('#showing-movie').val();
        if (selectedMovie === 'Choose Movie') {
            $(".bill-2").html('');
        } else {
            $(".bill-2").html('<b>Movie:</b> ' + selectedMovie);
        };
        var selectedDate = $('#showing-date').val();
        if (selectedDate === 'Choose Date') {
            $(".bill-3").html('');
        } else {
            textDate = $('#showing-date option:selected').text();
            $(".bill-3").html('<b>Date:</b> ' + textDate)
        };
        var selectedTime = $('#showing-time').val();
        if (selectedTime === 'Choose Time') {
            $(".bill-4").html('');
        } else {
            $(".bill-4").html('<b>Time:</b> ' + selectedTime);
        };
        selectionMessage(selectedMovie, selectedDate, selectedTime);
    });
});



// function to check seat booking information stored as JSON in local storage
$(document).ready(function() {
    $('#showing-movie, #showing-date, #showing-time').change(function() {
        var selectedMovie = $('#showing-movie').val(); 
        var selectedDate = $('#showing-date option:selected').text();
        var selectedTime = $('#showing-time').val();

        //generate the booking key
        var booking = `${selectedMovie},${selectedDate},${selectedTime}`;

        // Retrieve bookings from localStorage
        var bookedSeats = JSON.parse(localStorage.getItem(booking));


        // if booking exists iterate through the seat numbers and if matches change seat image to unavailable
        if (bookedSeats) { 
            for (var i = 0; i < bookedSeats.length; i++) {
                var bookedSeatHref = bookedSeats[i];
                $(`.seat a[href="${bookedSeatHref}"] img`).attr('src', 'images/whatson_images/seat_unavailable.png');
            }
        } else {
            // If no booking exists, set all seat images to the default image
            $('.seat a img').attr('src', 'images/whatson_images/seat_middle.png');
        }
    });
});


//variables to store seat selection/ total cost and selected date
var seatSelection = [];
var totalCost = 0
var dateUK = ""


// listen for seat selection 
$(document).ready(function(){
    $('.seat a').click(function(event){
        event.preventDefault(); 

        var selectedMovie = $('#showing-movie').val(); 
        var selectedDate = $('#showing-date').val(); 
        var selectedTime = $('#showing-time').val(); 
        var seatStatus = $(this).find('img').attr('src');
        var seatNo = $(this).attr('href');

        // exit function if any of the three booking menu options have not been selected so cannot select a seat
        if (selectedMovie === 'Choose Movie' || selectedDate === 'Choose Date' || selectedTime === 'Choose Time') {
            return; 
        }

        // change seat image from avaiable to select and add seat to total cost and seat no to seatSelection array
        if (seatStatus === 'images/whatson_images/seat_middle.png') {
            $(this).find('img').attr('src', 'images/whatson_images/seat_select.png');
            totalCost += 8;
            $('.select-seats p').html(`<b>Select seats</b> - Total Cost: £${totalCost}:00`);
            seatSelection.push(seatNo);
            $(".bill-5").html('<b>Selected Seats:</b> ' + seatSelection);

          // delselect seat and revert back to available and remove seat cost and seat no from seatSelection array
        } else if (seatStatus === 'images/whatson_images/seat_select.png') {
            $(this).find('img').attr('src', 'images/whatson_images/seat_middle.png');
            var removeSeat = seatSelection.indexOf(seatNo);
            if (removeSeat !== -1) {
                totalCost -= 8;
                $('.select-seats p').html(`<b>Select seats</b>- Total Cost: £${totalCost}:00`);
                seatSelection.splice(removeSeat, 1);
                $(".bill-5").html('<b>Selected Seats:</b> ' + seatSelection);
            }
        }

        // hide payment button and text if no seat selected
        if (seatSelection.length === 0) {
            $('.checkout').hide(); 
            $('.bill-5').hide();

          // show if seat selected
        } else {
            $('.checkout').show(); // Show the continue link
            $('.bill-5').show();
        }
    });
});



// Function to get the date string in the format (ex: Tues 1st March) and populate date menu for next 3 days
$(document).ready(function() {
    var selectElement = $('#showing-date');

    function getDateString(date) {
        var daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var dayOfWeek = daysOfWeek[date.getDay()];
        var dayOfMonth = date.getDate();
        var suffix = '';
        if (dayOfMonth == 1 || dayOfMonth == 21 || dayOfMonth == 31) {
            suffix = 'st';
        } else if (dayOfMonth == 2 || dayOfMonth == 22) {
            suffix = 'nd';
        } else if (dayOfMonth == 3 || dayOfMonth == 23) {
            suffix = 'rd';
        } else {
            suffix = 'th';
        }
        dateUK = dayOfWeek + ' ' + dayOfMonth + suffix + ' ' + months[date.getMonth()]
        return dayOfWeek + ' ' + dayOfMonth + suffix + ' ' + months[date.getMonth()];
    }

    // Generate options for the next 3 days
    for (var i = 0; i < 3; i++) {
        var date = new Date();
        date.setDate(date.getDate() + i);
        var dateString = getDateString(date);
        selectElement.append($('<option>', {
            value: date.toISOString().split('T')[0], // format as yyyy-mm-dd
            text: dateString
        }));
    }
});


// resets info/updates if change of movie option detected
$(document).ready(function() {
    $('#showing-movie').change(function() {
        $('#checkout-form')[0].reset();
        $('#checkout-form').validate().resetForm();
        $('.shopping-window').hide();
        $('.checkout').hide(); 
        var selectedMovie = $(this).val();
        seatSelection = [];  // clears array if change of menu detected
        $(".bill-5").html('');
        totalCost = 0;   // reets total cost if change of menu detected
        $('.seat a').find('img').attr('src', 'images/whatson_images/seat_middle.png');


        // updates screen image with selected movie option
        if (selectedMovie === 'Dune: Part Two') {
            $(".screen img").attr('src', 'images/whatson_images/dune2_logo.webp');
        } else if (selectedMovie === 'Ghostbusters Frozen Empire') {
            $(".screen img").attr('src', 'images/whatson_images/ghostbusters_logo.webp');
        } else if (selectedMovie === 'Kung Fu Panda 4') {
            $(".screen img").attr('src', 'images/whatson_images/kung_logo.webp');
        } else if (selectedMovie === 'The Fall Guy') {
            $(".screen img").attr('src', 'images/whatson_images/fall_logo.webp');
        } else if (selectedMovie === 'Civil War') {
            $(".screen img").attr('src', 'images/whatson_images/civil_logo.webp');
        } else if (selectedMovie === 'Select a Movie') {
            $(".screen img").attr('src', '');
        } else {
            $(".screen img").attr('src', '');
        }
    });
});



// resets info if change of date option detected
$(document).ready(function() {
    $('#showing-date').change(function() {
        $('#checkout-form')[0].reset();
        $('#checkout-form').validate().resetForm();
        $('.shopping-window').hide();
        $('.checkout').hide(); 
        var selectedMovie = $(this).val();
        seatSelection = [];
        $(".bill-5").html('');
        totalCost = 0;
    });
});

// resets info if change of time option detected
$(document).ready(function() {
    $('#showing-time').change(function() {
        $('#checkout-form')[0].reset();
        $('#checkout-form').validate().resetForm();
        $('.shopping-window').hide();
        $('.checkout').hide(); 
        var selectedMovie = $(this).val();
        var screenImage = $('.screen img');
        seatSelection = [];
        $(".bill-5").html('');
        totalCost = 0;
    });
});


// function to display payment details/jquery validation plugin
$(document).ready(function() {
    $('.checkout').click(function(event) {
        event.preventDefault();
        var selectedMovie = $('#showing-movie').val(); 
        var selectedDate = $('#showing-date option:selected').text();
        var selectedTime = $('#showing-time').val(); 
        $('.shopping-window h2').html(`Movie: ${selectedMovie}<br>Date: ${selectedDate}<br>Time: ${selectedTime}<br>
            Seats: ${seatSelection.join('-')}<br><br><b>Total Cost: £${totalCost}:00</b>`);
        $('.shopping-window').show();
        $('.checkout').hide(); 
    });
});


//reset form and validation if back button clicked
$(document).ready(function() {
    $('.back-btn').click(function(event) {
        event.preventDefault();
        $('#checkout-form')[0].reset();
        $('#checkout-form').validate().resetForm();
        $('.shopping-window').hide();
        $('.checkout').show();
    });
});


// jquery validation plug-in
$(document).ready(function() {
    $("#checkout-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2, 
                maxlength: 50, 
            },
            street: {
                required: true,
                minlength: 5, 
                maxlength: 100, 
            },
            city: {
                required: true,
                minlength: 2,
                maxlength: 50,
            },
            postcode: {
                required: true,
                minlength: 6,
                maxlength: 8,
                pattern: /^[a-zA-Z]{2}\d{2,3}[a-zA-Z]{2}$/  
            },

            email: {
                required: true,
                email: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/  
            },
            card: {
                required: true,
                digits: true,
                minlength: 16,
                maxlength: 16,
            },
            expiry: {
                required: true,
                minlength: 5,
                maxlength: 5,
                pattern: /^(0[1-9]|1[0-2])\/\d{2}$/,  
            },
            cvv: {
                required: true,
                digits: true,
                minlength: 3,
                maxlength: 3,
            },
        },

        messages: {
            name: {
                required: "Please enter your full name",
                minlength: "Your first name must be at least 4 characters long",
                maxlength: "Your first name cannot exceed 50 characters",
            },
            street: {
                required: "Please enter your street address",
                minlength: "Your street address must be at least 5 characters long",
                maxlength: "Your street address cannot exceed 100 characters",
            },
            city: {
                required: "Please enter your city",
                minlength: "Your city name must be at least 2 characters long",
                maxlength: "Your city name cannot exceed 50 characters",
            },
            postcode: {
                required: "Please enter your postcode",
                minlength: "Your postcode must be at least 6 characters long",
                maxlength: "Your postcode cannot exceed 8 characters",
            },
            email: {
                required: "Please enter your email address",
            },         
            card: {
                required: "Please enter your credit card number",
                minlength: "Your credit card number must be at least 16 characters long",
            },
            expiry: {
                required: "Please enter your expiry date in format 04/26",
                minlength: "Please enter a vaild expiry date",
                maxlength: "Please enter a valid expiry date",
            },
            cvv: {
                required: "Please enter your CVV number",
                minlength: "Your CVV number must 3 digits long",
                maxlength: "Your CVV number must 3 digits long",
            },
        },
        submitHandler: function(form) {
            // If the form is valid, this function will be called when the form is submitted
            
            var selectedMovie = $('#showing-movie').val(); 
            var selectedDate = $('#showing-date option:selected').text();
            var selectedTime = $('#showing-time').val();
            var booking = `${selectedMovie},${selectedDate},${selectedTime}`;  // generate unique booking key
            var existingSeatSelection = JSON.parse(localStorage.getItem(booking));  // retrieve existing bookings from local storage

            // if booking key already exists, append new seats to existing booking or create new booking
            if (existingSeatSelection) {
                existingSeatSelection = existingSeatSelection.concat(seatSelection);
                localStorage.setItem(booking, JSON.stringify(existingSeatSelection));
            } else {
                localStorage.setItem(booking, JSON.stringify(seatSelection));  
            }

            // show confirmation and display for 5 seconds
            $('.confirmation').show();
            $('.submit').hide(); 
            $('.back-btn').hide(); 
            $('.order').hide(); 
            $('#checkout-form input').hide();
            setTimeout(function() {
                form.submit(); // Submit the form after a delay
            }, 5000); // Adjust the delay time as needed
        }
    });
});
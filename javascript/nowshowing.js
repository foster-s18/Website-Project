
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

// enable function for easier viewing settings
function enableContrastMode() {

    const body = document.querySelector('body');
    body.style.background = "black";

    const nowShowing = document.querySelector('.now-showing h1');
    nowShowing.style.textShadow = "none";

    const info1 = document.querySelector('.info-1 p');
    info1.style.textShadow = "none";

    const info2 = document.querySelector('.info-2 p');
    info2.style.textShadow = "none";

    const info3 = document.querySelector('.info-3 p');
    info3.style.textShadow = "none";

    const info4 = document.querySelector('.info-4 p');
    info4.style.textShadow = "none";

    const info5 = document.querySelector('.info-5 p');
    info5.style.textShadow = "none";

    const moreInfo1 = document.querySelector('.more-info-1');
    moreInfo1.style.textShadow = "none";

    const moreInfo2 = document.querySelector('.more-info-2');
    moreInfo2.style.textShadow = "none";

    const moreInfo3 = document.querySelector('.more-info-3');
    moreInfo3.style.textShadow = "none";

    const moreInfo4 = document.querySelector('.more-info-4');
    moreInfo4.style.textShadow = "none";

    const moreInfo5 = document.querySelector('.more-info-5');
    moreInfo5.style.textShadow = "none";
}


// function to revert back to default viewing settings
function disableContrastMode() {

    const body = document.querySelector('body');
    body.style.background = "";

    const nowShowing = document.querySelector('.now-showing h1');
    nowShowing.style.textShadow = "";

    const info1 = document.querySelector('.info-1 p');
    info1.style.textShadow = "";

    const info2 = document.querySelector('.info-2 p');
    info2.style.textShadow = "";

    const info3 = document.querySelector('.info-3 p');
    info3.style.textShadow = "";

    const info4 = document.querySelector('.info-4 p');
    info4.style.textShadow = "";

    const info5 = document.querySelector('.info-5 p');
    info5.style.textShadow = "";

    const moreInfo1 = document.querySelector('.more-info-1');
    moreInfo1.style.textShadow = "";

    const moreInfo2 = document.querySelector('.more-info-2');
    moreInfo2.style.textShadow = "";

    const moreInfo3 = document.querySelector('.more-info-3');
    moreInfo3.style.textShadow = "";

    const moreInfo4 = document.querySelector('.more-info-4');
    moreInfo4.style.textShadow = "";

    const moreInfo5 = document.querySelector('.more-info-5');
    moreInfo5.style.textShadow = "";
} 


// screen 1. function to expand/retract effects.  
$(document).ready(function() {
    var $button = $('.more-info-1'); // store button reference
    $button.click(function() {
        if ($button.text() === 'More info') {
            $('.more-info-1').prop('disabled', true);  // suspend button function when clicked to stop user crashing effect
            $('.screen-1-iframe iframe').attr('src', 'https://www.youtube.com/embed/U2Qp5pL3ovA?');  // load the youtube trailer link
            $('.screen-1').hide(1200, function() {  
                $('#s1').hide(500);
                $('.screen-1-iframe').show(800);   
                $('.about-1').show(500, function() {
                    $button.text('Less info');  // change button text to enable to retract window in full screen
                    $('.more-info-1').prop('disabled', false);  // enable button to be clickable again
                    $('#trailer-1').text('Back');  // change button text to enable to retract window in responsive mode
                });
            });
        } else {
            $('.more-info-1').prop('disabled', true);
            $('.screen-1-iframe iframe').attr('src', '');  // remove youtube link to stop video playing in background if window closed/retracted
            $('.screen-1-iframe').hide(1000);
            $('.about-1').hide(1200, function() {
                $('#s1').show(1000);
                $('.screen-1').show(1200);
                $button.text('More info');  // change button back to default more info state 
                $('.more-info-1').prop('disabled', false);
                $('#trailer-1').text('Watch Trailer');
            });
        }
    });
});


// screen 1 responsive mode alternative expand/retract effects. Similar to full width.
$(document).ready(function() {
    var $button = $('#trailer-1'); 
    $button.click(function() {
        if ($button.text() === 'Watch Trailer') {
            $('#trailer-1').prop('disabled', true);
            $('.screen-1-iframe iframe').attr('src', 'https://www.youtube.com/embed/U2Qp5pL3ovA?');
            $('.screen-1').hide(1000)
            $('.screen-1-iframe').show(800);   
            $button.text('Back');
            $('#trailer-1').prop('disabled', false);

        } else {
            $('#trailer-1').prop('disabled', true);
            $('.screen-1-iframe iframe').attr('src', '');
            $('.screen-1-iframe').hide(1000);
            $('.screen-1').show(1200);
            $button.text('Watch Trailer');
            $('#trailer-1').prop('disabled', false);
        }
    });
});


//screen 2 (same design as screen 1.)
$(document).ready(function() {
    var $button = $('.more-info-2'); 
    $button.click(function() {
        if ($button.text() === 'More info') {
            $('.more-info-1').prop('disabled', true);
            $('.screen-2-iframe iframe').attr('src', 'https://www.youtube.com/embed/HpOBXh02rVc?');
            $('.screen-2').hide(1200, function() {
                $('#s2').hide(500);
                $('.screen-2-iframe').show(800);   
                $('.about-2').show(500, function() {
                    $button.text('Less info');
                    $('.more-info-1').prop('disabled', false);
                    $('#trailer-2').text('Back');
                });
            });

        } else {
            $('.more-info-2').prop('disabled', true);
            $('.screen-2-iframe iframe').attr('src', '');
            $('.screen-2-iframe').hide(1000);
            $('.about-2').hide(1200, function() {
                $('#s2').show(1000);
                $('.screen-2').show(1200);
                $button.text('More info');
                $('.more-info-2').prop('disabled', false);
                $('#trailer-2').text('Watch Trailer');
            });
        }
    });
});


// screen 2 responsive mode (same design as screen 1.)
$(document).ready(function() {
    var $button = $('#trailer-2'); 
    $button.click(function() {
        if ($button.text() === 'Watch Trailer') {
            $('#trailer-2').prop('disabled', true);
            $('.screen-2-iframe iframe').attr('src', 'https://www.youtube.com/embed/HpOBXh02rVc?');
            $('.screen-2').hide(1000)
            $('.screen-2-iframe').show(800);   
            $button.text('Back');
            $('#trailer-2').prop('disabled', false);

        } else {
            $('#trailer-2').prop('disabled', true);
            $('.screen-2-iframe iframe').attr('src', '');
            $('.screen-2-iframe').hide(1000);
            $('.screen-2').show(1200);
            $button.text('Watch Trailer');
            $('#trailer-2').prop('disabled', false);
        }
    });
});


// screen 3 (same design as screen 1.)
$(document).ready(function() {
    var $button = $('.more-info-3'); 
    $button.click(function() {
        if ($button.text() === 'More info') {
            $('.more-info-3').prop('disabled', true);
            $('.screen-3-iframe iframe').attr('src', 'https://www.youtube.com/embed/_inKs4eeHiI?');
            $('.screen-3').hide(1200, function() {
                $('#s3').hide(500);
                $('.screen-3-iframe').show(800);   
                $('.about-3').show(500, function() {
                    $button.text('Less info');
                    $('.more-info-3').prop('disabled', false);
                    $('#trailer-3').text('Back');
                });
            });

        } else {
            $('.more-info-3').prop('disabled', true);
            $('.screen-3-iframe iframe').attr('src', '');
            $('.screen-3-iframe').hide(1000);
            $('.about-3').hide(1200, function() {
                $('#s3').show(1000);
                $('.screen-3').show(1200);
                $button.text('More info');
                $('.more-info-3').prop('disabled', false);
                $('#trailer-3').text('Watch Trailer');
            });
        }
    });
});


// screen 3 responsive mode (same design as screen 1.)
$(document).ready(function() {
    var $button = $('#trailer-3'); // Store reference to the button
    $button.click(function() {
        if ($button.text() === 'Watch Trailer') {
            $('#trailer-3').prop('disabled', true);
            $('.screen-3-iframe iframe').attr('src', 'https://www.youtube.com/embed/_inKs4eeHiI?');
            $('.screen-3').hide(1000)
            $('.screen-3-iframe').show(800);   
            $button.text('Back');
            $('#trailer-3').prop('disabled', false);

        } else {
            $('#trailer-3').prop('disabled', true);
            $('.screen-3-iframe iframe').attr('src', '');
            $('.screen-3-iframe').hide(1000);
            $('.screen-3').show(1200);
            $button.text('Watch Trailer');
            $('#trailer-3').prop('disabled', false);
        }
    });
});


// screen 4 (same design as screen 1.)
$(document).ready(function() {
    var $button = $('.more-info-4'); // Store reference to the button
    $button.click(function() {
        if ($button.text() === 'More info') {
            $('.more-info-4').prop('disabled', true);
            $('.screen-4-iframe iframe').attr('src', 'https://www.youtube.com/embed/j7jPnwVGdZ8?');
            $('.screen-4').hide(1200, function() {
                $('#s4').hide(500);
                $('.screen-4-iframe').show(800);   
                $('.about-4').show(500, function() {
                    $button.text('Less info');
                    $('.more-info-4').prop('disabled', false);
                    $('#trailer-4').text('Back');
                });
            });

        } else {
            $('.more-info-4').prop('disabled', true);
            $('.screen-4-iframe iframe').attr('src', '');
            $('.screen-4-iframe').hide(1000);
            $('.about-4').hide(1200, function() {
                $('#s4').show(1000);
                $('.screen-4').show(1200);
                $button.text('More info');
                $('.more-info-4').prop('disabled', false);
                $('#trailer-4').text('Watch Trailer');
            });
        }
    });
});


// screen 4 responsive mode (same design as screen 1.)
$(document).ready(function() {
    var $button = $('#trailer-4'); 
    $button.click(function() {
        if ($button.text() === 'Watch Trailer') {
            $('#trailer-4').prop('disabled', true);
            $('.screen-4-iframe iframe').attr('src', 'https://www.youtube.com/embed/j7jPnwVGdZ8?');
            $('.screen-4').hide(1000)
            $('.screen-4-iframe').show(800);   
            $button.text('Back');
            $('#trailer-4').prop('disabled', false);

        } else {
            $('#trailer-4').prop('disabled', true);
            $('.screen-4-iframe iframe').attr('src', '');
            $('.screen-4-iframe').hide(1000);
            $('.screen-4').show(1200);
            $button.text('Watch Trailer');
            $('#trailer-4').prop('disabled', false);
        }
    });
});


// screen 5 (same design as screen 1.)
$(document).ready(function() {
    var $button = $('.more-info-5'); // Store reference to the button
    $button.click(function() {
        if ($button.text() === 'More info') {
            $('.more-info-5').prop('disabled', true);
            $('.screen-5-iframe iframe').attr('src', 'https://www.youtube.com/embed/aDyQxtg0V2w?');
            $('.screen-5').hide(1200, function() {
                $('#s5').hide(500);
                $('.screen-5-iframe').show(800);   
                $('.about-5').show(500, function() {
                    $button.text('Less info');
                    $('.more-info-5').prop('disabled', false);
                    $('#trailer-5').text('Back');
                });
            });

        } else {
            $('.more-info-5').prop('disabled', true);
            $('.screen-5-iframe iframe').attr('src', '');
            $('.screen-5-iframe').hide(1000);
            $('.about-5').hide(1200, function() {
                $('.screen-5-iframe').hide(1000);
                $('#s5').show(1000);
                $('.screen-5').show(1200);
                $button.text('More info');
                $('.more-info-5').prop('disabled', false);
                $('#trailer-5').text('Watch Trailer');
            });
        }
    });
});


// screen 5 responsive mode (same design as screen 1.)
$(document).ready(function() {
    var $button = $('#trailer-5'); // Store reference to the button
    $button.click(function() {
        if ($button.text() === 'Watch Trailer') {
            $('#trailer-5').prop('disabled', true);
            $('.screen-5-iframe iframe').attr('src', 'https://www.youtube.com/embed/aDyQxtg0V2w?');
            $('.screen-5').hide(1000)
            $('.screen-5-iframe').show(800);   
            $button.text('Back');
            $('#trailer-5').prop('disabled', false);

        } else {
            $('#trailer-5').prop('disabled', true);
            $('.screen-5-iframe iframe').attr('src', '');
            $('.screen-5-iframe').hide(1000);
            $('.screen-5').show(1200);
            $button.text('Watch Trailer');
            $('#trailer-5').prop('disabled', false);
        }
    });
});








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

  const heading = document.querySelector('.coming-soon h1');
  heading.style.textShadow = "none";
}


// function to revert viewing back to default settings
function disableContrastMode() {

  const heading = document.querySelector('.coming-soon h1');
  heading.style.textShadow = "";
} 


// function to expand/change movie 1 information with effects
$(document).ready(function() {
    $('#deadpool-logo').click(function() {
      $('.film-expand #film-img').attr('src', 'images/comingsoon_images/deadpool_logo.webp');
      $('.film-expand .video #rating').attr('src', 'images/comingsoon_images/18.webp');
      $('.video iframe').attr('src', 'https://www.youtube.com/embed/73_1biulkYk');
      $('.film-expand .video h2').text('Release Date 26th July 2024');
      $('.film-expand p').html("Get ready for an action-packed extravaganza as Deadpool and Wolverine team up " +
        "for an unforgettable cinematic experience! After the massive success of Deadpool's previous installments, " +
        "the wisecracking anti-hero is back with a vengeance.<br><br>And this time, he's bringing along none other than Wolverine "+
        "himself, played by the incomparable Hugh Jackman. Get ready to laugh, cheer, and hold onto your seats as " +
        "Deadpool and Wolverine embark on a wild and unpredictable adventure that will keep you on the edge of your " +
        "seat from start to finish.<br><br>So mark your calendars, grab your popcorn, and get ready for the ultimate " +
        "cinematic showdown as Deadpool and Wolverine join forces for an epic sequel that's guaranteed to be bigger, " +
        "bolder, and more badass than ever before!");
      $('.coming-soon').fadeOut(1000);
      $('#deadpool-logo').slideUp(2000);
      $('.film-expand #film-img').hide();
      $('.movies').fadeOut(1000, function(){
        $('html, body').animate({ scrollTop: 0 });
        $('.film-expand').fadeIn(500);
        $('.film-expand #film-img').slideDown(500);
      })
    });
});


// function to expand/change movie 2 information with effects
$(document).ready(function() {
    $('#beetle-logo').click(function() {
      $('.film-expand #film-img').attr('src', 'images/comingsoon_images/beetle_logo.webp');
      $('.film-expand .video #rating').attr('src', 'images/comingsoon_images/pg.webp');
      $('.film-expand .video h2').text('Release Date 6th September 2024');
      $('.film-expand p').html("Get ready for an electrifying sequel as Beetlejuice returns to the big screen in Beetlejuice Beetlejuice! " +
        "Michael Keaton reprises his iconic role as the mischievous ghost, promising audiences another thrilling adventure " +
        "filled with humor, thrills, and supernatural antics.<br><br> Scheduled for release in September 2024, this long-awaited " +
        "sequel brings back the beloved characters and quirky charm of the original film, inviting viewers to immerse " +
        "themselves once again in Tim Burton's whimsical and imaginative universe.<br><br> Join Beetlejuice and his " +
        "eccentric companions on a wild ride through the afterlife, where anything can happen and every moment is filled " +
        "with unexpected surprises.");
      $('.video iframe').attr('src', 'https://www.youtube.com/embed/e6yDanmWI1E');
      $('.coming-soon').fadeOut(1000);
      $('#beetle-logo').slideUp(2000);
      $('.film-expand #film-img').hide();
      $('.movies').fadeOut(1000, function(){
        $('html, body').animate({ scrollTop: 0 });
        $('.film-expand').fadeIn(500);
        $('.film-expand #film-img').slideDown(500);
      })
    });
});

// function to expand/change movie 3 information with effects
$(document).ready(function() {
    $('#apes-logo').click(function() {
      $('.film-expand #film-img').attr('src', 'images/comingsoon_images/apes_logo.webp');
      $('.film-expand .video #rating').attr('src', 'images/comingsoon_images/pg.webp');
      $('.film-expand .video h2').text('Release Date 24th May 2024');
      $('.film-expand p').html("Get ready for an electrifying journey into the futuristic realm of Kingdom of the Planet of the Apes, " +
        "a cinematic masterpiece set 300 years after Caesar's reign.<br><br>Following the footsteps of the legendary leader, Noa, a young ape, " +
        "embarks on a quest to unravel Caesar's enduring legacy. At the heart of the tale looms Proximus Caesar, a tyrannical ape ruler " +
        "threatening to plunge both species into turmoil.<br><br>Kingdom of the Planet of the Apes promises a riveting cinematic " +
        "experience, immersing audiences in a world grappling with its past while forging an uncertain future. Prepare to be enthralled as this "+
        "unforgettable saga unfolds on the big screen.");
      $('.video iframe').attr('src', 'https://www.youtube.com/embed/XtFI7SNtVpY');
      $('.coming-soon').fadeOut(1000);
      $('#apes-logo').slideUp(2000);
      $('.film-expand #film-img').hide();
      $('.movies').fadeOut(1000, function(){
        $('html, body').animate({ scrollTop: 0 });
        $('.film-expand').fadeIn(500);
        $('.film-expand #film-img').slideDown(500);
      })
    });
});


// function to expand/change movie 4 information with effects
$(document).ready(function() {
    $('#joker-logo').click(function() {
      $('.film-expand #film-img').attr('src', 'images/comingsoon_images/joker_logo.webp');
      $('.film-expand .video #rating').attr('src', 'images/comingsoon_images/18.webp');
      $('.film-expand .video h2').text('Release Date 4th October 2024');
      $('.film-expand p').html("Get ready for another riveting journey into the chaotic world of Gotham City with Joker: Folie à Deux, " +
        "the highly anticipated sequel starring Joaquin Phoenix and Lady Gaga. Set to hit theaters in October 2024, this electrifying film promises " +
        "to delve deeper into the psyche of the iconic Joker character.<br><br>Joaquin Phoenix reprises his role as the enigmatic Arthur Fleck, " +
        "while Lady Gaga joins the cast as Harley Quinn, a role that is sure to captivate audiences. " +
        "The sequel explores themes of madness, obsession, and the blurred lines between hero and villain.<br><br>Prepare for a cinematic " +
        "experience unlike any other, as Joker returns to unleash his particular brand of chaos once again.");
      $('.video iframe').attr('src', 'https://www.youtube.com/embed/2UInBwhQQ0A');
      $('.coming-soon').fadeOut(1000);
      $('#joker-logo').slideUp(2000);
      $('.film-expand #film-img').hide();
      $('.movies').fadeOut(1000, function(){
        $('html, body').animate({ scrollTop: 0 });
        $('.film-expand').fadeIn(500);
        $('.film-expand #film-img').slideDown(500);
      })
    });
});


// return selected movie to default page
$(document).ready(function() {
    $('#go-back').click(function() {
      $('.movies img').show();
      $('.film-expand #film-img').slideUp(2000);
      $('.film-expand').fadeOut(1000, function(){
        $('html, body').animate({ scrollTop: 0 });
        $('.coming-soon').fadeIn(1000);
        $('.movies').fadeIn(1000);
      })
    });
});


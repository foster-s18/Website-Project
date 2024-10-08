

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

  const section1 = document.querySelector('.section-1');
  section1.style.background = "black";

  const headingS1 = section1.querySelector('h1');
  headingS1.style.textShadow = "none";

  const section2 = document.querySelector('.section-2');
  section2.style.background = "black";

  const section3 = document.querySelector('.section-3');
  section3.style.backgroundColor = "black";
  section3.style.backgroundImage = "none";

  const heading = section3.querySelector('h4'); 
  heading.style.color = "black"; 
  heading.style.textShadow = "none";


  const paragraph = section3.querySelector('p'); 
  paragraph.style.textShadow = "none";
}


// function to revert back to default settings
function disableContrastMode() {

  const section1 = document.querySelector('.section-1');
  section1.style.backgroundColor = "";

  const headingS1 = section1.querySelector('h1');
  headingS1.style.textShadow = "";
 
  const section2 = document.querySelector('.section-2');
  section2.style.backgroundImage = ""; 

  const section3 = document.querySelector('.section-3');
  section3.style.backgroundImage = ""; 

  const heading = section3.querySelector('h4');
  heading.style.color = ""; 
  heading.style.textShadow = ""; 

  const paragraph = section3.querySelector('p');
  paragraph.style.textShadow = ""; 
} 


// Expand unlimted poporn section window
$(document).ready(function(){
    $("#popcorn-show").click(function(){
        $(".seperator-popcorn-show").show();
        $(".seperator-popcorn").hide();
    });
});

// reduce unlimted popcorn section window
$(document).ready(function(){
    $("#popcorn-hide").click(function(){
        $(".seperator-popcorn-show").hide();
        $(".seperator-popcorn").show();
    });
});



// function to hide/show dune trailer with effects
$(document).ready(function() {
    $('#dune-trailer').click(function() {
        var button = $(this).html();
        if (button === 'Watch Trailer') {
            $('.section-3 p').slideUp(); 
            $('.dune-logo').animate({opacity: 0}, 2000); 
            $('.video iframe').attr('src', 'https://www.youtube.com/embed/U2Qp5pL3ovA?');
            $(this).animate({opacity: 0}, 2000, function() { 
                $(this).html('Close'); 
                $(this).show();
                $(this).animate({opacity: 1}, 2000); 
                $('.dune-logo').hide(); 
                $('.video').fadeIn(2000); 
            });

        } else {
            $('.video').fadeOut(2000); 
            $(this).animate({opacity: 0}, 2000, function() {
                $('.video iframe').attr('src', '');  // stops video from playing in background if trailer closed without pause
                $('.dune-logo').show(); 
                $('.dune-logo').animate({opacity: 1}, 1000); 
                $(this).html('Watch Trailer'); 
                $(this).animate({opacity: 1}, 1000, function() {
                    $('.section-3 p').slideDown();
                })
            })
        }
    });
});

            
// function to cycle through the 3 options on the window selector menu. Changes images/text/alt text for each section
$(document).ready(function(){
  $('li').click(function(){
    var id = $(this).attr('id');    
    if(id === 'news') {
      var altText = ''
      $('#default').attr('src', 'images/index_images/tarrantino.webp');
      altText = "This is a picture of film director Quentin Tarantino.";
      $('.col h2').text("Tarantino abandons film"); 
      $('#section-2-text p').html(
        "Renowned filmmaker Quentin Tarantino has surprised fans by shelving plans for his anticipated final film, " + 
        "The Movie Critic.<br><br>Intended as his 10th and last cinematic endeavor, the decision has sparked speculation among enthusiasts.<br><br>" + 
        "As the film world ponders the reasons behind this abrupt change, anticipation builds for what the future holds for the acclaimed director " +
        "and his eagerly awaited final film."); 
      $('.section-2-list li').removeClass('default');
      $(this).addClass('default');

    } else if(id === 'jobs') {
      $('#default').attr('src', 'images/index_images/worker.webp');
      altText = "This is a picture of a CityMax staff employee serving popcorn.";
      $('.col h2').text("Careers at Citymax"); 
      $('#section-2-text p').html(
        "Join the excitement at CityMax Cinema! We're hiring enthusiastic team members to deliver exceptional experiences." +
        "<br><br>From ensuring guest comfort to serving at our concession stand, every role counts — and with staff perks " + 
        "like unlimited film access, the benefits are endless" +
        "<br><br>Apply now at citymaxcareers.co.uk for an application form. Become part of the CityMax family, where teamwork " + 
        "reigns and every day is an adventure!");
      $('.section-2-list li').removeClass('default');
      $(this).addClass('default');

    } else {
      $('#default').attr('src', 'images/index_images/tickets.webp');
      altText = "This is an image of CityMax 2 for 1 ticket offer.";
      $('.col h2').text("2 for 1 Cinema Tickets!"); 
      $('#section-2-text p').html(
        "Lights, camera, action! Dive into the ultimate movie experience with our special offer — MOVIE MAGIC MONDAYS!<br><br>" +
        "Every Monday, get two cinema tickets for the price of one! Whether you're craving heart-pounding action,"+ 
        "side-splitting comedy, or heartwarming drama, Movie Magic Mondays has something for everyone.<br><br>" +
        "Don't miss out on this blockbuster deal! Grab your popcorn and join us for a double dose of cinematic fun!");
      $('.section-2-list li').removeClass('default');
      $(this).addClass('default');
    }
    $('#default').attr('alt', altText);
  });
});

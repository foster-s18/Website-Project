

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

  const body= document.querySelector('body');
  body.style.background = "black";

  const heading = document.querySelector('.heading h1')
  heading.style.textShadow = "none";


  const heading2 = document.querySelector('.contact-form h1')
  heading2.style.textShadow = "none";
}


// function to revert back to default settings
function disableContrastMode() {

  const body= document.querySelector('body');
  body.style.background = "";

  const heading = document.querySelector('.heading h1')
  heading.style.textShadow = "";


  const heading2 = document.querySelector('.contact-form h1')
  heading2.style.textShadow = "";
}



// ********** EVENT LISTENERS FOR FORM SUBMIT AND GOOGLE MAPS API **********


// event listener for form submit and to call formInput function on submition
document.getElementById('form').addEventListener('submit', function(event) {
  main(event);
});


// event listener for google maps/place api
window.addEventListener('load', address);


// function to update/autocomplete address field using google maps/place api
function address() {
    let input = document.getElementById('autocomplete-input');

    let options = {
        types: ['address'], // Limit autocomplete results to addresses
        componentRestrictions: { country: 'uk'}
    };

    let autocomplete = new google.maps.places.Autocomplete(input, options);    
}


// main function to retrieve form field elements and to pass each user input argument into
// relevant functions for validation



// ********** MAIN FUNCTION **********



function main(event) {

  // prevents form from submitting
  event.preventDefault() 

  // gets values inputted from each field in form and store in local variables 
  let firstName = document.getElementById('firstName').value;
  let surname = document.getElementById('surname').value;
  let dateBirth = document.getElementById('dob').value;
  let postcode = document.getElementById('postcode').value;
  let address = document.getElementById('autocomplete-input').value;
  let tel = document.getElementById('tel').value;
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

  let birthResult = validateBirth(dateBirth);
  if (birthResult === false) {
    return
  }

  let addressResult = validateAddress(address);
  if (addressResult === false) {
    return
  }

  let postcodeResult = vaildatePostcode(postcode);
  if (postcodeResult === false) {
    return
  }

  let mobileResult = validateMobile(tel);
  if (mobileResult === false) {
    return
  }

  let emailResult = validateEmail(email, emailConfirm);
  if (emailResult === false) {
    return
  }


// submits form if all fields pass validation check
  form.submit();


//  alerts user that form has been submitted and displays inputted information
  alert(`Your details have been submitted successfully.\n
    Name: ${nameResult} ${surnameResult}.
    Date of Birth: ${dateBirth}.
    Address: ${addressResult}, ${postcodeResult}.
    Mobile Number: ${mobileResult}.
    Email Address: ${emailResult}.`);  
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


// function to validate dob from date form field/calender
// @param {string} userDob - The user's form input for dob.
// @returns {boolean} - Returns false if dob fails validation checks

function validateBirth(userDob) {
  let userBirth = userDob;

  // checks if dob field is blank and displays alert
  if (userBirth === '') {
    alert("Please enter your date of birth.");
    return false;

    // the captured dob from field/calender is in 'yyyy-mm-dd' format. 
    // Removes each '-' to leave format 'yyyymmdd' ex.(2007-12-01 to 20071201)
  } else {
    userBirthRemove = userBirth.replace("-", '');
    userBirthRemove = userBirthRemove.replace("-", '');
  }

  // calls built-in javascript date function to obtain current date and extracts year/month/day to variables
  let currentDate = new Date();
  let todayYear = currentDate.getFullYear();  // yyyy format
  let todayMonth = currentDate.getMonth() + 1;  // m format if under 10, mm format if over 10. Add + 1 as returns index
  let todayDate = currentDate.getDate();  // dd format 

  // create local variable dateString and convert todayYear to string
  let dateString = todayYear.toString();

  // if todayMonth below 10 ex.(3), adds a '0' to dateString and concatenates todayMonth into dateString.
  if (todayMonth < 10) {
    dateString = dateString + "0" + todayMonth.toString(); 
  } else {
    dateString = dateString + todayMonth.toString();
  }

  // if todayDate below 10 ex.(3), adds a '0' to dateString and concatenates todayDate into dateString.
  if (todayDate < 10) {
    dateString = dateString + "0" + todayDate.toString();
  } else {
    dateString = dateString + todayDate.toString();
  }

  // takes variable userBirthRemove ex.(20071201) and converts to interger
  userBirthRemove = Number(userBirthRemove)

  // takes variable dateString - current date ex.(20240305) and coverts to interger. subtracts 180000 to remove 18 years (20060305)
  let checkEighteen = Number(dateString) - 180000;

  // takes variable dateString - current date ex.(20240305) and coverts to interger. substracts 1250000 to remove 125 years
  let checkOneFifty = Number(dateString) - 1250000;
  
  // if user's date of birth is later than current date - 18 years return false
  if (userBirthRemove > checkEighteen) {
    alert("Sorry, you must be over 18 years old to register.");
    return false;
  } 

  // If user's date of birth is before 125 years ago, alert and return false
  else if (userBirthRemove < checkOneFifty) {
    alert("Sorry, date of birth has a maximum age of 125 years.");
    return false;
  }

  // If all validation check pass, return to main function
  else {
    return;
  }
}


// array to store every town/city in northern ireland to check address
const townCityList = [
    "Acton", "Aghacommon", "Aghadowey", "Aghadrumsee", "Aghagallon", "Aghalee", "Ahoghill", "Aldergrove", "Altamuskin", "Altishane",
    "Altmore", "Annaclone", "Annaghmore", "Annahilt", "Annahugh", "Annalong", "Annsborough", "Antrim", "Ardboe", "Ardgarvan", "Ardglass",
    "Ardmore", "Ardstraw", "Armagh", "Armoy", "Arney", "Articlave", "Artigarvan", "Artikelly", "Atticall", "Aughafatten", "Augher",
    "Aughnacloy", "Ballela", "Ballerin", "Ballinamallard", "Ballintoy", "Balloo", "Ballybogy", "Ballycarry", "Ballycassidy", "Ballycastle",
    "Ballyclare", "Ballyeaston", "Ballygally", "Ballygawley", "Ballygowan", "Ballyhalbert", "Ballyhornan", "Ballykelly", "Ballykinler",
    "Ballylesson", "Ballylinney", "Ballymacmaine", "Ballymacnab", "Ballymagorry", "Ballymartin", "Ballymaguigan", "Ballymena", "Ballymoney",
    "Ballynahinch", "Ballynure", "Ballyrashane", "Ballyrobert", "Ballyronan", "Ballyrory", "Ballyscullion", "Ballyskeagh", "Ballystrudder",
    "Ballyvoy", "Ballywalter", "Balnamore", "Banagher", "Banbridge", "Bangor", "Bannfoot", "Belcoo", "Belfast", "Bellaghy", "Bellanaleck",
    "Bellarena", "Belleek", "Belleeks", "Benburb", "Bendooragh", "Beragh", "Bessbrook", "Blackskull", "Blackwatertown", "Blaney", "Bleary",
    "Boho", "Brackaville", "Bready", "Brockagh", "Brookeborough", "Broomhill", "Broughshane", "Bryansford", "Buckna", "Burnfoot", "Burren",
    "Bushmills", "Caledon", "Camlough", "Campsie", "Capecastle", "Cappagh", "Cargan", "Carnalbanagh", "Carncastle", "Carnlough", "Carnteel",
    "Carrickaness", "Carrickfergus", "Carrickmore", "Carrowclare", "Carrowdore", "Carrybridge", "Carryduff", "Castlecaulfield", "Castledawson",
    "Castlederg", "Castlerock", "Castlewellan", "Charlemont", "Clabby", "Clady", "Cladymore", "Clanabogan", "Claudy", "Clogh", "Clogher",
    "Cloghy", "Clonmore", "Clonoe", "Clough", "Cloughmills", "Coagh", "Coalisland", "Cogry-Kilbride", "Coleraine", "Collegeland", "Comber",
    "Conlig", "Cookstown", "Corbet", "Corkey", "Corrinshego", "Craigarogan", "Craigavon", "Cranagh", "Crawfordsburn", "Creagh", "Creggan",
    "Crossgar", "Crossmaglen", "Crumlin", "Cullaville", "Cullybackey", "Cullyhanna", "Culmore", "Culnady", "Curran", "Cushendall", "Cushendun",
    "Darkley", "Dechomet", "Derry", "Derrycrin", "Derrygonnelly", "Derryhale", "Derrykeighan", "Derrylin", "Derrymacash", "Derrymore",
    "Derrynaflaw", "Derrynoose", "Derrytrasna", "Derrytresk", "Derryvore", "Dervock", "Desertmartin", "Doagh", "Dollingstown", "Donagh",
    "Donaghadee", "Donaghcloney", "Donaghey", "Donaghmore", "Donegore", "Dooish", "Dorsey", "Douglas Bridge", "Downhill", "Downpatrick",
    "Draperstown", "Drains Bay", "Dromara", "Dromintee", "Dromore", "Drumaness", "Drumbeg", "Drumbo", "Drumquin", "Drumraighland", "Drumsurn",
    "Dunadry", "Dundonald", "Dundrod", "Dundrum", "Dungannon", "Dungiven", "Dunloy", "Dunnamanagh", "Dunmurry", "Dunnamore", "Dunnaval",
    "Dunseverick", "Edenaveys", "Edenderry", "Ederney", "Eglinton", "Eglish", "Enniskillen", "Erganagh", "Eskra", "Feeny", "Finaghy",
    "Fintona", "Finvoy", "Fivemiletown", "Florencecourt", "Foreglen", "Forkill", "Galbally", "Gamblestown", "Garrison", "Garvagh",
    "Garvaghey", "Garvetagh", "Gawley's Gate", "Gibson's Hill", "Gilford", "Gillygooly", "Glack", "Glebe", "Glenarm", "Glenavy",
    "Glencull", "Glengormley", "Glenmornan", "Glenoe", "Glenone", "Glynn", "Gortaclare", "Gortin", "Gortnahey", "Goshedan", "Gracehill",
    "Grange Corner", "Granville", "Greencastle", "Greenisland", "Greyabbey", "Greysteel", "Groggan", "Groomsport", "Gulladuff", "Halfpenny Gate",
    "Hamiltonsbawn", "Helen's Bay", "Hillhall", "Hillsborough", "Hilltown", "Holywell", "Holywood", "Inishrush", "Irvinestown", "Islandmagee",
    "Jonesborough", "Jerrettspass", "Jordanstown", "Katesbridge", "Keady", "Kells-Connor", "Kellswater", "Kesh", "Keshbridge", "Kilcoo",
    "Kildress", "Kilkeel", "Killadeas", "Killaloo", "Killay", "Killead", "Killeen", "Killen", "Killeter", "Killinchy", "Killough",
    "Killowen", "Killylea", "Killyleagh", "Killyman", "Killywool", "Kilmore", "Kilrea", "Kilskeery", "Kinallen", "Kinawley", "Kircubbin",
    "Knockcloghrim", "Knockmoyle", "Knocknacarry", "Lack", "Lambeg", "Landahaussy", "Largy", "Larne", "Laurelvale", "Lawrencetown", "Leitrim",
    "Letterbreen", "Lettershendoney", "Limavady", "Lisbellaw", "Lisburn", "Lislea", "Lisnadill", "Lisnarick", "Lisnaskea", "Listooder",
    "Loughbrickland", "Loughgall", "Loughgilly", "Loughguile", "Loughinisland", "Loughmacrory", "Loup", "Lower Ballinderry", "Lurgan",
    "Lurganare", "Lurganure", "Lurganville", "Macken", "Macosquin", "Madden", "Maghaberry", "Maghera", "Magheraconluce", "Magherafelt",
    "Magheralin", "Magheramason", "Magheramorne", "Magheraveely", "Maghery", "Maguiresbridge", "Markethill", "Martinstown", "Maydown",
    "Mayobridge", "Mazetown", "Meigh", "Middletown", "Milford", "Millbank", "Mill Bay", "Millisle", "Milltown", "Moira", "Monea",
    "Moneyglass", "Moneymore", "Moneyneany", "Moneyreagh", "Moneyslane", "Monteith", "Moortown", "Moss-Side", "Mountfield", "Mountjoy",
    "Mounthill", "Mountnorris", "Moy", "Moygashel", "Mullaghbawn", "Mullaghboy", "Mullaghbrack", "Mullaghglass", "Mallusk", "Newbuildings",
    "Newcastle", "Newry", "Newtown Crommelin", "Newtownabbey", "Newtownards", "Newtownbutler", "Newtowncloghoge", "Newtownhamilton",
    "Newtownstewart", "Nixon's Corner", "Newmills", "Omagh", "Orritor", "Park", "Parkgate", "Plumbridge", "Pomeroy", "Portadown",
    "Portaferry", "Portavogie", "Portballintrae", "Portbraddon", "Portglenone", "Portrush", "Portstewart", "Poyntzpass", "Raloo",
    "Randalstown", "Rasharkin", "Rathfriland", "Ravernet", "Richhill", "Ringsend", "Rock", "Rosslea", "Rostrevor", "Roughfort", "Rousky",
    "Saintfield", "Sandholes", "Scarva", "Scotch Street", "Seaforde", "Seskinore", "Shanmaghery", "Shanvey", "Sheeptown", "Shrigley",
    "Silverbridge", "Sion Mills", "Sixmilecross", "Skea", "Spa", "Spamount", "Springfield", "Stewartstown", "Stoneyford", "Strabane",
    "Straid", "Straidarran", "Strangford", "Stranocum", "Strathfoyle", "Straw", "Swatragh", "Tamlaght", "Tamnamore", "Tandragee",
    "Tartaraghan", "Teemore", "Templepatrick", "Tempo", "The Birches", "Tobermore", "Toome", "Trillick", "Trory", "Tullyhogue",
    "Tullyhommon", "Tullylish", "Tullynacross", "Tullywiggan", "Tynan", "Upper Ballinderry", "Upperlands", "Victoria Bridge",
    "Waringsford", "Waringstown", "Warrenpoint", "Washing Bay", "Waterfoot", "Wattlebridge", "Whitecross", "Whitehead", "Whiterock",
    "Whitehouse"
];


// function to validate address obtained by google place api to validate if location in Northern Ireland
// @param {string} userAddress - The user's form input for address
// @returns {boolean} - Returns false if address fails validation checks
// @returns {string} - Returns address if pass validation checks

function validateAddress(userAddress) {
  let address = userAddress;

// check if blank address field and displays alert
  if (address == "") {
    alert("Address field cannot be blank.")
    return false;
  }

  // loop through town/city in array to see if address from northern ireland and returns address if true
  for (let i = 0; i < townCityList.length; i++) {
      if (address.includes(townCityList[i])) {
          return address; 
      }
  }

  // returns false if town/city not found in townCityList array and displays alert
  alert("Not a valid Northern Ireland address. Please re-enter.");
  return false;
}


// function to validate postcode
// @param {string} userPostcode - The user's form input for postcode
// @returns {boolean} - Returns false if postcode fails validation checks
// @returns {string} - Returns postcode if validation pass

function vaildatePostcode(userPostcode) {

  // converts postcode to uppercase
  postCode = userPostcode.toUpperCase();

  // check if postcode field is empty and displays alert
  if (postCode === "") {
    alert("You must enter a postcode.");
    return false;

    // check if postcode is valid length and displays alert
  } else if (postCode.length < 6 || postCode.length > 8) {
    alert("Invalid postcode length. Postcode should be 6 to 8 characters long.");
    return false;

    // check if postcode is from northern ireland (BT) and displays alert
  } else if (!postCode.startsWith('BT')) {
    alert("Not a Northern Ireland poscode.");
    return false;

    // checks to see if postcode ends with a number and 2 alphabetical characters and displays alert
  } else if (!/\d[a-zA-Z]{2}$/.test(postCode)) {
      alert("Invalid postcode format.");
      return false;
  }

  // returns postcode if all conditions pass
  return postCode  
}


// function to validate mobile number
// @param {string} userMobile - The user's form input for mobile number
// @returns {boolean} - Returns false if mobile number fails validation checks
// @returns {string} - Returns mobile number if validation passes

function validateMobile(userMobile) {

  // remove all whitespace within inputed mobile number
  mobile = userMobile.replace(/\s/g, "");

  // checks if mobile input field empty and displays alert
  if (mobile === "") {
    alert("Mobile number field cannot be empty.");
    return false;
  }

  // checks if inputted mobile number begins with +447 and 9 digits which is UK standard. returns number to main if true
  if (/^(\+447)\d{9}$/.test(mobile)) {
    return mobile;

  //  checks if inputted mobile begins with 07 and 9 digits which is UK standard. returns number to main if true
  } else if (/^07\d{9}$/.test(mobile)) {
        return mobile;

  // returns false if number fails validation and displays alert
  } else {
      alert(`The number ${mobile} is not a valid UK mobile number. Please check and re-enter.`);
      return false;
  }
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


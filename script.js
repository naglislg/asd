const form = {
  firstNameLabel: 'First Name',
  middleNameLabel: 'Middle Name',
  lastNameLabel: 'Last Name',
  monthLabel: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  dayLabel: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  yearLabel: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010],
  genderLabel: ['male', 'female', 'other'],
  streetLabel: 'Street Address',
  streetLineTwoLabel: 'Street Address Line 2',
  cityLabel: 'City',
  stateAndProvinceLabel: 'State / Province',
  postCodeLabel: 'Postal / Zip Code',
  exampleEmailLabel: 'example@example.com',
  mobileNumberLabel: 'Mobile Number',
  phoneNumberLabel: 'Phone Number',
  workNumberLabel: 'Work Number',
  companyLabel: 'Company',
  coursesLabel: 'Courses',
  additionalCommentsLabel: 'Additional Comments'
}

document.getElementById("firstNameLabel").innerHTML = 'First Name';
document.getElementById("middleNameLabel").innerHTML = 'Middle Name';
document.getElementById("lastNameLabel").innerHTML = 'Last Name';
document.getElementById("monthLabel").innerHTML = 'Month';
document.getElementById("dayLabel").innerHTML = 'Day';
document.getElementById("yearLabel").innerHTML = 'Year';
document.getElementById("genderLabel").innerHTML = 'Gender';
document.getElementById("streetLabel").innerHTML = 'Street Address';
document.getElementById("streetLineTwoLabel").innerHTML = 'Street Address Line 2';
document.getElementById("cityLabel").innerHTML = 'Postal / Zip Code';
document.getElementById("stateAndProvinceLabel").innerHTML = 'State / Province';
document.getElementById("postCodeLabel").innerHTML = 'Postal / Zip Code';
document.getElementById("exampleEmailLabel").innerHTML = 'ex: myname@example.com';
document.getElementById("mobileNumberLabel").innerHTML = 'Mobile Number';
document.getElementById("phoneNumberLabel").innerHTML = 'Phone Number';
document.getElementById("workNumberLabel").innerHTML = 'Work Number';
document.getElementById("companyLabel").innerHTML = 'Company';
document.getElementById("coursesLabel").innerHTML = 'Courses';
document.getElementById("additionalCommentsLabel").innerHTML = 'Additional Comments';


function myFunction(selector, day) {

  if (day === 12) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    for (var i = 0; i < day; i++) {
      selector.options[i] = new Option(monthNames[i], i + 1);
    }
  
  } else if (day === 18) {
    var d = new Date().getFullYear() - 17;
  
    for (var i = 1; i <= 50; i++) {
      d--;
      selector.options[i - 1] = new Option(d, d);
    }
  } else {
    for (var i = 1; i <= day; i++) {
      selector.options[i - 1] = new Option(i, i);
    }
  }
}

myFunction(document.getElementById("birthMonth"), 12);
myFunction(document.getElementById("birthDay"), 31);
myFunction(document.getElementById("birthYear"), 18);
const forma = {
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

window.updateMonth= function(iMonth) {
  var el = document.getElementById("day");
  el.options.length = 0;
 
  for(var d = new Date(2013,iMonth-1,1); d.getMonth()==iMonth-1; d.setDate(d.getDate()+1)) {
      option = new Option(d.getDate(), d.getDate());
      el.options[d.getDate()-1] = option;
  }; 
         
}

function generateDayListByMonth(month = 0){
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 30, 30, 31, 31, 30];
  var days = [];
  for (var i = 1; i <= monthDays[month]; i++){
    days.push(i);
  }
  return days;
}

function generateArrayOfYears() {
  var max = new Date().getFullYear();
  var min = max - 19;
  var years = [];

  for (var i = max; i >= min; i--) {
    years.push(i);
  }
  return years;
}


const form = {
  month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  day: generateDayListByMonth(),
  year: generateArrayOfYears()
}


function createOption(dataList){
  let option = '';
  let i = 1;

  for(let dataItem of dataList){
    option += "<option value=" + i + ">" + dataItem + "</option>";
    i++;
  }
  return option;
}
for(const formKey of Object.keys(form)){
const options = createOption(form[formKey]);
document.getElementById(formKey).innerHTML = options;
}

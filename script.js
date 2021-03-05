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

document.getElementById("stateAndProvinceLabel").innerHTML = 'State / Province';
document.getElementById("postCodeLabel").innerHTML = 'Postal / Zip Code';

document.getElementById("exampleEmailLabel").innerHTML = 'ex: myname@example.com';
document.getElementById("mobileNumberLabel").innerHTML = 'Mobile Number';
document.getElementById("phoneNumberLabel").innerHTML = 'Phone Number';
document.getElementById("workNumberLabel").innerHTML = 'Work Number';
document.getElementById("companyLabel").innerHTML = 'Company';
document.getElementById("coursesLabel").innerHTML = 'Courses';
document.getElementById("additionalCommentsLabel").innerHTML = 'Additional Comments';

window.updateMonth = function () {
  var el = document.getElementById("day");
  el.options.length = 0;

  var x1 = document.getElementById("month").selectedIndex;
  var iMonth = document.getElementById("month")[x1].value;

  var x2 = document.getElementById("year").selectedIndex;
  var iYear = document.getElementById("year")[x2].label;

  //console.log(iYear);
  for (var d = new Date(iYear, iMonth - 1, 1); d.getMonth() == iMonth - 1; d.setDate(d.getDate() + 1)) {
    option = new Option(d.getDate(), d.getDate());
    el.options[d.getDate() - 1] = option;
  };
}

function generateDayListByMonth(month = 0) {
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 30, 30, 31, 31, 30];
  var days = [];
  for (var i = 1; i <= monthDays[month]; i++) {
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

function createOption(dataList) {
  let option = '';
  let i = 1;

  for (let dataItem of dataList) {
    //console.log(i);
    option += "<option value=" + i + ">" + dataItem + "</option>";
    i++;
  }
  return option;
}
for (const formKey of Object.keys(form)) {
  const options = createOption(form[formKey]);
  document.getElementById(formKey).innerHTML = options;
}

var citiesByState = {
  AL: ['ST ALBANS', 'HARPENDEN', 'WELWYN', 'HATFIELD'],
  B: ['BIRMINGHAM', 'ALCESTER', 'BROMSGROVE', 'HALESOWEN', 'CRADLEY HEATH', 'ROWLEY REGIS', 'SMETHWICK', 'OLDBURY', 'WEST BROMWICH', 'SUTTON COLDFIELD', 'TAMWORTH', 'STUDLEY'],
  BH: ['BOURNEMOUTH', 'POOLE', 'BROADSTONE', 'SWANAGE', 'WIMBORNE', 'FERNDOWN', 'CHRISTCHURCH', 'RINGWOOD', 'NEW MILTON', 'VERWOOD'],
  CB: ['CAMBRIDGE', 'ELY', 'NEWMARKET', 'HAVERHILL', 'SAFFRON WALDEN'],
  DE: ['DERBY', 'MATLOCK', 'RIPLEY', 'ASHBOURNE', 'ILKESTON', 'SWADLINCOTE', 'BURTON-ON-TRENT', 'BAKEWELL', 'ALFRETON', 'BELPER', 'HEANOR'],
  PE: ['PETERBOROUGH', 'STAMFORD', 'BOURNE', 'SPALDING', 'WISBECH', 'MARCH', 'CHATTERIS', 'ST. NEOTS', 'BOSTON', 'SPILSBY', 'SKEGNESS', 'HUNTINGDON']
}

window.onload = function () {
  var countySel = document.getElementById("countrySelect");

  for (var country in citiesByState) {
    countySel.options[countySel.options.length] = new Option(country, country);
  }
}

function makeSubmenu(value) {
  console.log(value);
  if (value.length == 0) document.getElementById("citySelect").innerHTML = "<option></option>";
  else {
    var citiesOptions = "";
    for (cityId in citiesByState[value]) {
      citiesOptions += "<option>" + citiesByState[value][cityId] + "</option>";
    }
    document.getElementById("citySelect").innerHTML = citiesOptions;
  }
}
const textLabels = {
  firstNameLabel: 'First Name',
  middleNameLabel: 'Middle Name',
  lastNameLabel: 'Last Name',
  monthLabel: 'Month',
  dayLabel: 'Day',
  yearLabel: 'Year',
  genderLabel: 'Gender',
  streetLabel: 'Street Address',
  streetLineTwoLabel: 'Street Address Line 2',
  stateAndProvinceLabel: 'State / Province',
  postCodeLabel: 'Postal / Zip Code',
  mobileNumberLabel: 'Mobile Number',
  phoneNumberLabel: 'Phone Number',
  workNumberLabel: 'Work Number',
  companyLabel: 'Company',
  coursesLabel: 'Courses',
  additionalCommentsLabel: 'Additional Comments'
}

for (const labelKey of Object.keys(textLabels)) {
  const optionss = textLabels[labelKey];
  document.getElementById(labelKey).innerHTML = optionss;
}

const form = {
  month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  day: generateDayListByMonth(),
  year: generateArrayOfYears()
}

window.updateMonth = function () {
  const el = document.getElementById("day");
  el.options.length = 0;

  const x1 = document.getElementById("month").selectedIndex;
  const iMonth = document.getElementById("month")[x1].value;

  const x2 = document.getElementById("year").selectedIndex;
  const iYear = document.getElementById("year")[x2].label;

  for (let d = new Date(iYear, iMonth - 1, 1); d.getMonth() === iMonth - 1; d.setDate(d.getDate() + 1)) {
    const option = new Option(d.getDate(), d.getDate());
    el.options[d.getDate() - 1] = option;
  };
}

function generateDayListByMonth(month = 0) {
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 30, 30, 31, 31, 30];
  const days = [];
  for (let i = 1; i <= monthDays[month]; i++) {
    days.push(i);
  }
  return days;
}

function generateArrayOfYears() {
  const max = new Date().getFullYear();
  const min = max - 19;
  const years = [];

  for (let i = max; i >= min; i--) {
    years.push(i);
  }
  return years;
}

function createOption(dataList) {
  let option = '';
  let i = 1;

  for (let dataItem of dataList) {

    option += "<option value=" + i + ">" + dataItem + "</option>";
    i++;
  }
  return option;
}
for (const formKey of Object.keys(form)) {
  const options = createOption(form[formKey]);
  document.getElementById(formKey).innerHTML = options;
}

const citiesByPost = {
  AL: ['ST ALBANS', 'HARPENDEN', 'WELWYN', 'HATFIELD'],
  B: ['BIRMINGHAM', 'ALCESTER', 'BROMSGROVE', 'HALESOWEN', 'CRADLEY HEATH', 'ROWLEY REGIS', 'SMETHWICK', 'OLDBURY', 'WEST BROMWICH', 'SUTTON COLDFIELD', 'TAMWORTH', 'STUDLEY'],
  BH: ['BOURNEMOUTH', 'POOLE', 'BROADSTONE', 'SWANAGE', 'WIMBORNE', 'FERNDOWN', 'CHRISTCHURCH', 'RINGWOOD', 'NEW MILTON', 'VERWOOD'],
  CB: ['CAMBRIDGE', 'ELY', 'NEWMARKET', 'HAVERHILL', 'SAFFRON WALDEN'],
  DE: ['DERBY', 'MATLOCK', 'RIPLEY', 'ASHBOURNE', 'ILKESTON', 'SWADLINCOTE', 'BURTON-ON-TRENT', 'BAKEWELL', 'ALFRETON', 'BELPER', 'HEANOR'],
  PE: ['PETERBOROUGH', 'STAMFORD', 'BOURNE', 'SPALDING', 'WISBECH', 'MARCH', 'CHATTERIS', 'ST. NEOTS', 'BOSTON', 'SPILSBY', 'SKEGNESS', 'HUNTINGDON']
}

window.onload = function () {
  const countySel = document.getElementById("countrySelect");

  for (let country in citiesByPost) {
    countySel.options[countySel.options.length] = new Option(country, country);
  }
}

function makeSubmenu(value) {
  if (value.length === 0) {
    document.getElementById("citySelect").innerHTML = "<option></option>";
  } else {
    let citiesOptions = '';
    for (let cityId in citiesByPost[value]) {
     citiesOptions += "<option>" + citiesByPost[value][cityId] + "</option>";
    }
    document.getElementById("citySelect").innerHTML = citiesOptions;
  }
}

function validateEmail() {

  const emailAddress = document.getElementById('emailAddress').value;
  const reexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //const emailCheck = reexp.test(String(emailAddress).toLowerCase());

  if (reexp.test(String(emailAddress).toLowerCase()) === false) {
    const emailMessage = 'Incorrect email address.';
    document.getElementById("msgEmailAddress").className = "color-red";
    document.getElementById("msgEmailAddress").innerHTML = emailMessage;
  } else {
    document.getElementById("msgEmailAddress").innerHTML = '';
  }
}

function validatephonenumber(elementId) {

  const elementvalue = document.getElementById(elementId).value;
  const regEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  //const regEx = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
  if (regEx.test(elementvalue) === false) {
    const errorMessage = 'Incorrect number';

    document.getElementById(elementId+'Message').className = 'color-red';
    document.getElementById(elementId+'Message').innerHTML = errorMessage;
  } else {
    document.getElementById(elementId+'Message').innerHTML = '';
  }
}
//const elementIds = 'phoneNumber';
//document.getElementById(elementIds+'Message').innerHTML = 'asdasdasdasdasd';
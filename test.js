
/*
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


  var date_arr = new Array;
var days_arr = new Array;

date_arr[0] = new Option("January", 31);
date_arr[1] = new Option("February", 28);
date_arr[2] = new Option("March", 31);
date_arr[3] = new Option("April", 30);
date_arr[4] = new Option("May", 31);
date_arr[5] = new Option("June", 30);
date_arr[6] = new Option("July", 31);
date_arr[7] = new Option("August", 30);
date_arr[8] = new Option("September", 30);
date_arr[9] = new Option("October", 31);
date_arr[10] = new Option("November", 31);
date_arr[11] = new Option("December", 30);

function fill_select(f) {
  document.writeln("<SELECT name=\"months\" onchange=\"update_days(FRM)\">");
  for (x = 0; x < 12; x++)
    document.writeln("<OPTION value=\"" + (x + 1) + "\">" + date_arr[x].text);
  document.writeln("</SELECT><SELECT name=\"days\"></SELECT>");
  selection = f.months[f.months.selectedIndex].value;
}

function update_days(f) {
  temp = f.days.selectedIndex;
  for (x = days_arr.length; x > 0; x--) {
    days_arr[x] = null;
    f.days.options[x] = null;
  }
  selection=parseInt(date_arr[f.months.selectedIndex].value);
  ret_val = 0;
  if(selection == 28)
  { 
    year = parseInt(f.years.options[f.years.selectedIndex].value);
    
    if (year % 4 != 0 || year % 100 == 0) ret_val = 0;
    else
    if (year % 400 == 0) ret_val = 1;
    else
      ret_val = 1;
  }
  selection = selection + ret_val;

  for (x = 1; x < selection + 1; x++)
  {
    days_arr[x - 1] = new Option(x);
    f.days.options[x - 1] = days_arr[x - 1];
  }

  if (temp == -1) {
    f.days.options[0].selected = true;
  }else{
    f.days.options[temp].selected = true;
  }
}

function year_install(f) {
  document.writeln("<SELECT name=\"years\" onchange=\"update_days(FRM)\">")
  for (x = 1950; x < 2005; x++) document.writeln("<OPTION value=\"" + x + "\">" + x);
  document.writeln("</SELECT>");
  update_days(f)
} 
*/

/*
$('#gMonth2').change(function(){
  var month = $(this).val();
  $('#gMonth1').val(month);
});

function show_month(obj) {
  document.getElementById('gMonth1').selectedIndex = obj.selectedIndex;
}

<select id='gMonth2' onchange="show_month(this)">

//document.getElementById("month").addEventListener("onchange", updateMonth(this.value));


// var date_arr = [];
// var days_arr = [];

// date_arr[0] = ["January", 31];
// date_arr[1] = ["February", 28];
// date_arr[2] = ["March", 31];
// date_arr[3] = ["April", 30];
// date_arr[4] = ["May", 31];
// date_arr[5] = ["June", 30];
// date_arr[6] = ["July", 31];
// date_arr[7] = ["August", 30];
// date_arr[8] = ["September", 30];
// date_arr[9] = ["October", 31];
// date_arr[10] = ["November", 31];
// date_arr[11] = ["December", 30];

function selectMonth(selector) {
  //document.writeln("<SELECT name=\"months\"               onchange=\"update_days(FRM)\">");

  //for(x=0;x<12;x++)

  //document.writeln("<OPTION value=\""+date_arr[x].value+"\">"+date_arr[x].text);
  //document.writeln("</SELECT><SELECT name=\"days\"></SELECT>");

  //selection=f.months[f.months.selectedIndex].value;

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  for (var i = 0; i <= 12; i++) {
    selector.options[i] = new Option(monthNames[i], i + 1);
  }

}

function selectMonth(selector) {

  const monthNames = ["----", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  for (var i = 0; i < monthNames.length; i++) {
    selector.options[i] = new Option(monthNames[i], i + 1);
  }

}
// date_arr[0] = ["January", 31];
// date_arr[1] = ["February", 28];
// date_arr[2] = ["March", 31];
// date_arr[3] = ["April", 30];
// date_arr[4] = ["May", 31];
// date_arr[5] = ["June", 30];
// date_arr[6] = ["July", 31];
// date_arr[7] = ["August", 30];
// date_arr[8] = ["September", 30];
// date_arr[9] = ["October", 31];
// date_arr[10] = ["November", 31];
// date_arr[11] = ["December", 30];

function show_day(obj) {
  const monthdays = ["----", 31, 28, 31, 30, 31, 30, 31, 30, 30, 31, 31, 30];

  for (var i = 1; i <= monthdays[obj.selectedIndex]; i++) {
    selector.options[i - 1] = new Option(i, i);
  } 

  //document.getElementById('birthDay').selectedIndex = obj.selectedIndex;
}

//<select id='gMonth2' onchange="show_day(this)"></select>

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

selectMonth(document.getElementById("birthMonth"));
//myFunction(document.getElementById("birthDay"), 31);
myFunction(document.getElementById("birthYear"), 18);

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

*/

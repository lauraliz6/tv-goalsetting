
//CODE FOR CALENDAR
//from: https://www.cssscript.com/simple-responsive-month-calendar-with-javascript-and-css/

//LB: added this to get the current month
var today = new Date();
var month = today.getMonth();

var date = new Date();
date.setDate(1);
//LB: modified so it sets month as current month
date.setMonth(month);


window.onload = function() {
  // Add the current month on load
  createMonth();
};

// Converts day ids to the relevant string
function dayOfWeekAsString(dayIndex) {
  return ["Sun", "Mon","Tue","Wed","Thu","Fri","Sat"][dayIndex];
}
// Converts month ids to the relevant string
function monthsAsString(monthIndex) {
  return ["Jan", "Feb","Mar","Apr","May","June","July", "Aug", "Sep", "Oct", "Nov", "Dec"][monthIndex];
}

// Creates a day element
function createCalendarDay(num, day) {
  var currentCalendar = document.getElementById("calendar");

  var newDay = document.createElement("div");
  var date = document.createElement("p");
  date.innerHTML = num;
  //LB: added these cal-day classes for later clicking
  date.classList.value = "cal-day";

  var dayElement = document.createElement("p");
  dayElement.innerHTML = day;
  dayElement.classList.value = "cal-day";

  newDay.className = "calendar-day";
  newDay.appendChild(date);
  newDay.appendChild(dayElement);

  currentCalendar.appendChild(newDay);
}

// Clears all days from the calendar
function clearCalendar() {
  var currentCalendar = document.getElementById("calendar");

  currentCalendar.innerHTML = "";

}

// Clears the calendar and shows the next month
function nextMonth() {
  clearCalendar();

  date.setMonth(date.getMonth() + 1);

  createMonth(date.getMonth());
}

// Clears the calendar and shows the previous month
function previousMonth() {
  clearCalendar();

  date.setMonth(date.getMonth() - 1);
  var val = date.getMonth();
  createMonth(date.getMonth());
}

// Creates and populates all of the days to make up the month
function createMonth() {
  var currentCalendar = document.getElementById("calendar");

  var dateObject = new Date();
  dateObject.setDate(date.getDate());
  dateObject.setMonth(date.getMonth());
  dateObject.setYear(date.getFullYear());


  //LB: I added this to make sure the weekdays are always aligned
  //basically if the first day of the week isn't Sunday it'll add blank days
  //for the number of days past Sunday it is
  var weekDay = dayOfWeekAsString(dateObject.getDay());
  if (weekDay != "Sun"){
      var weekDayArray = ["Sun", "Mon","Tue","Wed","Thu","Fri","Sat"];
      var weekDayNum = weekDayArray.indexOf(weekDay);
      for (i=0; i<=weekDayNum-1; i++){
        createCalendarDay('','');
      }
  }

  createCalendarDay(dateObject.getDate(), dayOfWeekAsString(dateObject.getDay()));
  dateObject.setDate(dateObject.getDate() + 1);

  while (dateObject.getDate() != 1) {
    createCalendarDay(dateObject.getDate(), dayOfWeekAsString(dateObject.getDay()));
    dateObject.setDate(dateObject.getDate() + 1);
  }


  // Set the text to the correct month
  var currentMonthText = document.getElementById("current-month");
  currentMonthText.innerHTML = monthsAsString(date.getMonth()) + " " + date.getFullYear();

  //LB: these are my functions
  setCalWidth();
  assignDates();
  outlineDeadlineAndToday();
  displaySavedDates();
  displayDates();
  displayDateSum();
}


//LB: added this function so there's only 7 days on each line
function setCalWidth(){
    var calDay = document.getElementsByClassName('calendar-day');
    var width = calDay[0].offsetWidth;
    var maxWidth = width*7;
    var currentCalendar = document.getElementById("calendar");
    currentCalendar.style.maxWidth = maxWidth + "px";
    for (i=0; i<calDay.length; i++){
        calDay[i].style.width = width + "px";
        calDay[i].style.padding = 0;
    }
}


// -----
//LB: below is my code

//this gives a data value to each of the dates shown on the calendar
function assignDates(){
  var calendarDays = document.querySelectorAll('.calendar-day');
  var shownMonthYear = document.getElementById('current-month').innerText;
  var shownMonth = shownMonthYear.split(" ").shift();
  var shownYear = shownMonthYear.split(" ").pop();
  var monthArr = ["Jan", "Feb","Mar","Apr","May","June","July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var shownMonthNum = (monthArr.indexOf(shownMonth)+1).toString();
  if (shownMonthNum.length < 2){
    shownMonthNum = "0"+shownMonthNum;
  }
  for (i=0; i<calendarDays.length; i++){
    if (calendarDays[i].innerText!=""){
      var shownDate = calendarDays[i].children[0].innerText;
    if (shownDate.length < 2){
      shownDate = "0"+shownDate;
    }
    dateInISO = shownYear.toString()+"-"+shownMonthNum.toString()+"-"+shownDate;
    calendarDays[i].dataDate = dateInISO;
    }
    else {
      calendarDays[i].classList.add('blank-day');
    }
  }
}

var checkInDates = [];

//displays dates
function displaySavedDates(){
  var userDates = window.localStorage.getItem('userDates');
  if (userDates){
    var checkDates = JSON.parse(userDates);
    var checkInputOne = document.getElementById('checkOneInput');
    var checkInputTwo = document.getElementById('checkTwoInput');
    var firstDate = checkDates['checkInOne'];
    var secondDate = checkDates['checkInTwo'];
    checkInputOne.value = firstDate;
    checkInputTwo.value = secondDate;
  }
}

//displaying dates in the summary card
function displayDateSum(){
  var checkInputOne = document.getElementById('checkOneInput');
  var checkInputTwo = document.getElementById('checkTwoInput');
  var firstDate = checkInputOne.value;
  var secondDate = checkInputTwo.value;
  var checkOneDisplay = document.getElementById('checkOneDisplay');
  var checkTwoDisplay = document.getElementById('checkTwoDisplay');
  var deadlineDisplay = document.getElementById('deadlineDisplay');
  checkOneDisplay.value = firstDate;
  checkTwoDisplay.value = secondDate;
  var deadlineDate = document.getElementById('deadlineInput').value;
  deadlineDisplay.value = deadlineDate;
}



//this part listens for a click on the calendar days
//and highlights the day, and changes the date input field to match
document.addEventListener('click', function(e){
  
  if (e.target.matches('.calendar-day')){
    if (!e.target.matches('.blank-day')){
      var day = e.target;
      selectDay(day);
      storeDates();
      displayDateSum();
    }
  } 
  else if (e.target.matches('.cal-day')){
    var clicked = e.target;
    var clickDay = clicked.parentElement;
    selectDay(clickDay);
    storeDates();
    displayDateSum();
  }
});

 function selectDay(day){
    if (day.dataSelected == null){
      //this if statement limits the day selections to two
      if (checkInDates.length < 2){
        styleOn(day);
        storeDay(day);
        day.dataSelected = "true";
        //adding the value to the array of dates
        checkInDates.push(day.dataDate);
      }
    }
    else if (day.dataSelected == "true"){
      day.dataSelected = null;
      styleOff(day);
      unSelectDay(day);
      //removing the value from the array of dates
      checkInDates.splice(day.dataDate,1);
    }
  }

  function styleOn(el){
    el.classList.add('selected-day')
    // el.style.backgroundColor = "#8876de";
    // el.style.color = "white";
    el.dataSelected = "true";
    var theDate = el.children[0];
    theDate.style.fontSize = "13.4px";
  }
  function storeDay(theDate){
    var theDay = theDate.children[0].innerText;
    if (theDay.length < 2){
      var theDay ="0"+theDay;
    }
    var shownMonthYear = document.getElementById('current-month').innerText;
    var shownMonth = shownMonthYear.split(" ").shift();
    var shownYear = shownMonthYear.split(" ").pop();
    var monthArr = ["Jan", "Feb","Mar","Apr","May","June","July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var shownMonthNum = (monthArr.indexOf(shownMonth)+1).toString();
    if (shownMonthNum.length < 2){
      shownMonthNum = "0"+shownMonthNum;
    }
    var dateISO = shownYear.toString()+"-"+shownMonthNum.toString()+"-"+theDay;
    displayDay(dateISO);
  }
  function displayDay(da){
    var checkInputOne = document.getElementById('checkOneInput');
    var checkInputTwo = document.getElementById('checkTwoInput');
    if (!checkInputOne.value){
      checkInputOne.value = da;
    }
    else if (!checkInputTwo.value && checkInputOne.value != da){
      checkInputTwo.value = da;
    }
    else {
      //nothing happens because both are filled
    }
  }
  function styleOff(el){
    el.classList.remove('selected-day');
    // el.style.backgroundColor = "white";
    // el.style.color = "#2E2E2E";
    var theDate = el.children[0];
    theDate.style.fontSize = "10.05px";
  }
  function unSelectDay(day){
    var checkInputOne = document.getElementById('checkOneInput');
    var checkInputTwo = document.getElementById('checkTwoInput');
    theDate = day.dataDate;
    if (checkInputOne.value == theDate){
      checkInputOne.value = null;
    }
    else if (checkInputTwo.value == theDate){
      checkInputTwo.value = null;
    }
  }


//allowing user to change date input field to select check-in dates

var checkInputOne = document.getElementById('checkOneInput');
var checkInputTwo = document.getElementById('checkTwoInput');
checkInputOne.addEventListener("change", function(){
  clearFormatAndResetArray();
  displayDates();
  storeDates();
  displayDateSum();
})
checkInputTwo.addEventListener("change", function(){
  clearFormatAndResetArray();
  displayDates();
  storeDates();
  displayDateSum();
});

clearFormatAndResetArray();

//displays selected check-in dates if month refreshes
function displayDates(){
  var checkInputOne = document.getElementById('checkOneInput');
  var checkInputTwo = document.getElementById('checkTwoInput');
  var firstDate = checkInputOne.value;
  var secondDate = checkInputTwo.value;
  dateToDiv(firstDate);
  dateToDiv(secondDate);
  function dateToDiv(s){
    var shownDays = document.getElementsByClassName('calendar-day');
      for (i=0; i<shownDays.length; i++){
        if (shownDays[i].dataDate == s){
          var day = shownDays[i];
          styleOn(day);
          day.dataSelected = "true";
        }
      }
  }
}

//saves the dates to local storage
function storeDates(){
  var checkInputOne = document.getElementById('checkOneInput');
  var checkInputTwo = document.getElementById('checkTwoInput');
  var firstDate = checkInputOne.value;
  var secondDate = checkInputTwo.value;
  var checkInStore = {
    checkInOne: firstDate,
    checkInTwo: secondDate
  }
  var userDates = JSON.stringify(checkInStore);
  window.localStorage.setItem('userDates',userDates);
}

function clearFormatAndResetArray(){
  var toClear = document.querySelectorAll('.calendar-day');
  for (i=0; i<toClear.length; i++){
    styleOff(toClear[i]);
  }
  checkInDates = [];
  var checkInputOne = document.getElementById('checkOneInput');
  var checkInputTwo = document.getElementById('checkTwoInput');
  var firstDate = checkInputOne.value;
  var secondDate = checkInputTwo.value;
  if (firstDate != ""){
    checkInDates.push(firstDate);
  }
  if (secondDate != ""){
    checkInDates.push(secondDate);
  }
}

//outlines the deadline with orange
//& highlights today's date with light grey
function outlineDeadlineAndToday() {
  //first return the deadline value
  var deadlineInput = document.getElementById('deadlineInput');
  var deadline = deadlineInput.value;
  var today = new Date();
  var todayISO = today.toISOString().split("T").shift();
  var calDay = document.querySelectorAll('.calendar-day');
  for (i=0; i<calDay.length; i++){
    if (calDay[i].dataDate == deadline){
      var day = calDay[i];
      day.style.boxSizing = "border-box";
      day.style.border = "1.34px solid #8876de";
      day.children[1].style.color = "#050000";
      day.children[0].style.fontSize = "13.4px";
    }
    if (calDay[i].dataDate == todayISO) {
      var day = calDay[i];
      day.style.backgroundColor = "#E6E6E6";
    }
  }
}



// END CALENDAR PORTION
// -----------------------------------






// Let's Focus on You Section

var nameInput = document.getElementById('name');
var deptInput = document.getElementById('department');
var roleInput = document.getElementById('role');

var userName = nameInput.value;
var userDept = deptInput.value;
var userRole = roleInput.value;

//getting existing user data
var usersInfo = window.localStorage.getItem('userInfo');
if (usersInfo){
  var aboutUser = JSON.parse(usersInfo);
  var usersName = aboutUser['name'];
  var usersDept = aboutUser['dept'];
  var usersRole = aboutUser['role'];
}



//name is shown in the upper right corner next to the music button & in name input
var displayName = document.getElementById('displayName');
if (usersInfo){
  displayName.innerText = usersName;
  nameInput.value = usersName;
}

nameInput.onchange = function(){
  var userName = nameInput.value;
  displayName.innerText = userName;
  storeUserValues();
}

//department is shown in the next content box ("and what's your role...")
var dptDisplay = document.getElementById('dptDisplay');
if (usersInfo){
  dptDisplay.innerText = usersDept;
  deptInput.value = usersDept;
}
deptInput.onchange = function(){
  var userDept = deptInput.value;
  dptDisplay.innerText = userDept;
  storeUserValues();
}

//role is stored
if (usersInfo){
  roleInput.value = usersRole;
}
roleInput.onchange = function(){
  var userRole = roleInput.value;
  storeUserValues();
}


//storing the values in a key/value pair
function storeUserValues(){
  var userName = nameInput.value;
  var userDept = deptInput.value;
  var userRole = roleInput.value;
  var userInfo = {
    name: userName,
    dept: userDept,
    role: userRole
  };
  var person = JSON.stringify(userInfo);
  window.localStorage.setItem('userInfo',person);
  //this can be accessed later using window.localStorage.getItem('userInfo')
}

// END FOCUS ON YOU PORTION
// -----------------------------------






// Personal Goal Section

var personalGoalInput = document.getElementById('personalGoal');
var personalGoal = personalGoalInput.value;

//when the user initially goes to enter text, the default value is cleared
personalGoalInput.onfocus = function(){
  if (personalGoalInput.value == "Type something..."){
    personalGoalInput.value = "";
  }
}

//when the user inputs something and clicks out, save the personal goal
personalGoalInput.onchange = function(){
  var personalGoal = personalGoalInput.value;
  window.localStorage.setItem('userGoal', personalGoal);
  displayPersonalGoal();
}

//displaying the goal in each of the cards with "Your Goal"
function displayPersonalGoal(){
  var goalCards = document.querySelectorAll('.yourGoalDisplay');
  var userGoal = window.localStorage.getItem('userGoal');
  if (userGoal){
    for (i=0; i<goalCards.length; i++){
      goalCards[i].innerText = userGoal;
    }
    personalGoalInput.value = userGoal;
  }
}

displayPersonalGoal();


//summary card in review section
//allows editing & saves input
function editSummaryGoal(){
  var goalSummaryCard = document.getElementById('yourGoal');
  var para = goalSummaryCard.querySelector('p');
  var userGoal = window.localStorage.getItem('userGoal');
  para.innerHTML = '<textarea name="yourGoalSummary" id="yourGoalSummary" cols="27" rows="6">'
  +userGoal+'</textarea>';
  var yourGoalSumInput = document.getElementById('yourGoalSummary');
  yourGoalSumInput.onchange = function(){
    var yourGoalSum = yourGoalSumInput.value;
    window.localStorage.setItem('userGoal', yourGoalSum);
  }
}

//closes editing field and displays the changed goal elsewhere
function closeSummaryGoal(){
  var goalSummaryCard = document.getElementById('yourGoal');
  var para = goalSummaryCard.querySelector('p');
  para.innerHTML = window.localStorage.getItem('userGoal');
  displayPersonalGoal();
}



// END PERSONAL GOAL PORTION
// -----------------------------------





// Storing the skills Section

var skillInput = document.querySelectorAll('.inputSkill');
for (i=0; i<skillInput.length; i++){
  skillInput[i].onchange = function(){
    saveSkills();
    displaySkills();
  }
}

function saveSkills(){
  var hardSkillGood1 = document.getElementById('hardSkillGood1').value;
  var hardSkillGood2 = document.getElementById('hardSkillGood2').value;
  var hardSkillBad1 = document.getElementById('hardSkillBad1').value;
  var hardSkillBad2 = document.getElementById('hardSkillBad2').value;
  var softSkillGood1 = document.getElementById('softSkillGood1').value;
  var softSkillGood2 = document.getElementById('softSkillGood2').value;
  var softSkillBad1 = document.getElementById('softSkillBad1').value;
  var softSkillBad2 = document.getElementById('softSkillBad2').value;
  var userSkills = {
    hardGood1: hardSkillGood1,
    hardGood2: hardSkillGood2,
    hardBad1: hardSkillBad1,
    hardBad2: hardSkillBad2,
    softGood1: softSkillGood1,
    softGood2: softSkillGood2,
    softBad1: softSkillBad1,
    softBad2: softSkillBad2
  }
  var personsSkills = JSON.stringify(userSkills);
  window.localStorage.setItem('userSkills',personsSkills);
}


function displaySkills(){
  var skillsDownload = window.localStorage.getItem('userSkills');
  var skillsMatrix = JSON.parse(skillsDownload);
  if (skillsMatrix){
    var btnSkill = document.querySelectorAll('.btnSkill');
    for (i=0; i<btnSkill.length; i++){
      //display in the skills summary
      if (btnSkill[i].id.indexOf("Display")>1){
        var trimId = btnSkill[i].id.split("Display").shift() + btnSkill[i].id.split("Display").pop();
        var matchId = trimId.split("Skill").shift() + trimId.split("Skill").pop();
        var skillMatch = skillsMatrix[matchId];
        btnSkill[i].innerText = skillMatch;
      }
      //display improvement skills in the "work on" section
      else if (btnSkill[i].id.indexOf("Card")>1){
        var trimThis = btnSkill[i].id.split("Card").shift() + btnSkill[i].id.split("Card").pop();
        var matchThis = trimThis.split("Skill").shift() + trimThis.split("Skill").pop();
        if (matchThis.indexOf("Two")>1){
          matchThis = matchThis.split("Two").shift() + matchThis.split("Two").pop();
        }
        var toMatch = skillsMatrix[matchThis];
        btnSkill[i].innerText = toMatch;
      }
      //display improvement skills in the overall summary section
      else if (btnSkill[i].id.indexOf("Summary")>1){
        var trimWord = btnSkill[i].id.split("Summary").shift() + btnSkill[i].id.split("Summary").pop();
        var matchWord = trimWord.split("Skill").shift() + trimWord.split("Skill").pop();
        var skillWord = skillsMatrix[matchWord];
        btnSkill[i].innerText = skillWord;
      }
    }
  
    //display skills in the input fields
    var skillsInputs = document.querySelectorAll('.inputSkill');
    for (i=0; i<skillsInputs.length; i++){
      var trimmed = skillsInputs[i].id.split("Skill").shift() + skillsInputs[i].id.split("Skill").pop();
      var match = skillsMatrix[trimmed];
      skillsInputs[i].value = match;
    }
  }
}

displaySkills();

// END STORING SKILLS PORTION
// -----------------------------------




// "Make Changes" button on the "summary of skills"

var changeBtn = document.getElementById('btnChangeSkills');

var isChanging = false;

changeBtn.onclick = function(){
  if (isChanging == false){
    changeBtnToInput();
    assignIdsAndSkills();
    changeBtn.innerHTML = "Done";
    isChanging = true;
  }
  else if (isChanging == true){
    changeBtn.innerHTML = "Make Changes";
    isChanging = false;
    rewriteSkills();
  }
}

//this changes the appearance of the buttons to have input fields
function changeBtnToInput(){
  var btnSkill = document.querySelectorAll('.btnSkill');
  for (i=0; i<btnSkill.length; i++){
    if (btnSkill[i].id.indexOf("Display")>1){
      btnSkill[i].classList.add("changeSkills");
      btnSkill[i].innerHTML = '<input type="text" class="inputSkill">';
      btnSkill[i].style.border = "none";
      btnSkill[i].style.backgroundColor = "white";
      btnSkill[i].style.padding = "0";
    }
  }
}

//this adds ids for writing to the object,
//and the values that were input earlier
//then writes them to an array
function assignIdsAndSkills(){
  var btnSkillEdit = document.querySelectorAll('.changeSkills');
  var skillsDownload = window.localStorage.getItem('userSkills');
  var skillsMatrix = JSON.parse(skillsDownload);
  var keyArray = [];
  var valArray = [];
  for (var key in skillsMatrix){
    var val = skillsMatrix[key];
    keyArray.push(key);
    valArray.push(val);
  }
  for (i=0; i<btnSkillEdit.length; i++){
    btnSkillEdit[i].children[0].id = keyArray[i];
    btnSkillEdit[i].children[0].value = valArray[i];
  }
}

//this changes the userSkills object with the new inputs
//and changes appearance back to just buttons, not inputs
function rewriteSkills(){
  var btnSkillEdit = document.querySelectorAll('.changeSkills');
  var newSkillArray = [];
  for (i=0; i<btnSkillEdit.length; i++){
    var writeKey = btnSkillEdit[i].children[0].id;
    var writeVal = btnSkillEdit[i].children[0].value;
    var newSkillEntry = '"'+writeKey+'":"'+writeVal+'"';
    newSkillArray.push(newSkillEntry); 
    btnSkillEdit[i].style.border = "solid 2.01px #E6E6E6";
    btnSkillEdit[i].style.backgroundColor = "#FAFAFA";
    btnSkillEdit[i].style.padding = "8.04px";
  }
  newSkillList = "{"+newSkillArray+"}";
  window.localStorage.setItem('userSkills',newSkillList);
  displaySkills();
}

// END MAKE CHANGES TO SKILLS PORTION
// -----------------------------------




//"work on" section / improvement tasks

var improveAreas = document.querySelectorAll("textarea[id*='Improve']");

var defaultValues = ["This could be a task or project you could work on…", 
  "Or a resource or class you could seek out…", 
  "Edit improvement task in these boxes"];

for (i=0; i<improveAreas.length; i++){
  improveAreas[i].onfocus = function(e){
    var improveInput = e.target;
    if (improveInput.innerHTML.indexOf(defaultValues)){
      improveInput.innerHTML = "";
    }
    //making the circle icon the brand color when the input is active
    var previousKid = improveInput.previousElementSibling;
    previousKid.classList.add('highlightCircle');
  }
  //making the circle icon back to grey when the input is no longer active
  improveAreas[i].addEventListener('focusout', function(e){
    var improveInput = e.target;
    var previousKid = improveInput.previousElementSibling;
    previousKid.classList.remove('highlightCircle');
  });
  improveAreas[i].onchange = function(e){
    saveImproveTasks();
    displayImproveTasks();
  }
}

function saveImproveTasks(){
  var hardSkill1Improve1 = document.getElementById('hardSkill1Improve1').value;
  var hardSkill1Improve2 = document.getElementById('hardSkill1Improve2').value;
  var hardSkill2Improve1 = document.getElementById('hardSkill2Improve1').value;
  var hardSkill2Improve2 = document.getElementById('hardSkill2Improve2').value;
  var softSkill1Improve1 = document.getElementById('softSkill1Improve1').value;
  var softSkill1Improve2 = document.getElementById('softSkill1Improve2').value;
  var softSkill2Improve1 = document.getElementById('softSkill2Improve1').value;
  var softSkill2Improve2 = document.getElementById('softSkill2Improve2').value;
  var userImproveTasks = {
    hard1Improve1: hardSkill1Improve1,
    hard1Improve2: hardSkill1Improve2,
    hard2Improve1: hardSkill2Improve1,
    hard2Improve2: hardSkill2Improve2,
    soft1Improve1: softSkill1Improve1,
    soft1Improve2: softSkill1Improve2,
    soft2Improve1: softSkill2Improve1,
    soft2Improve2: softSkill2Improve2
  }
  var personsImproveTasks = JSON.stringify(userImproveTasks);
  window.localStorage.setItem('userImproveTasks',personsImproveTasks);
}

var improveAreasDisplays = document.querySelectorAll("p[id*='Improve']");

function displayImproveTasks(){
  var downloadImprove = window.localStorage.getItem('userImproveTasks');
  var improveList = JSON.parse(downloadImprove);
  if (improveList){
    for (i=0; i<improveAreas.length; i++){
      var theId = improveAreas[i].id;
      var trimId = theId.split("Skill").shift() + theId.split("Skill").pop();
      var improveMatch = improveList[trimId];
      if (improveMatch == ""){
        improveMatch = "[Improvement task goes here]";
      }
      improveAreas[i].value = improveMatch;
    }
    for (i=0; i<improveAreasDisplays.length; i++){
      var theId = improveAreasDisplays[i].id;
      var trimId = theId.split("Skill").shift() + theId.split("Skill").pop();
      var theMatch = trimId.split("Display").shift();
      var improveMatch = improveList[theMatch];
      if (improveMatch == ""){
        improveMatch = "[Improvement task goes here]"
      }
      improveAreasDisplays[i].innerText = improveMatch;
    }
  }
}

displayImproveTasks();

// END WORK ON/IMPROVEMENT PORTION
// -----------------------------------




// Summary Cards Section (also using functions above in specific sections)

//clicking on the edit buttons allows user to edit and save content
//also changes appearance of edit button
var editButtons = document.querySelectorAll('.editIcon');
var editSummary = false;
for (i=0; i<editButtons.length; i++){
  editButtons[i].onclick = function(e){
    var clickedBtn = e.target;
    var parentCard = e.target.parentElement;
    if (editSummary == false){
      clickedBtn.src = "https://i.ibb.co/KmbmW12/icon-check-03.png";
      parentCard.style.width = "268px";
      parentCard.style.height = "335px";
      editSummary = true;
      if (parentCard.id == "yourGoal"){
        editSummaryGoal();
      }
      else if (parentCard.id == "yourSkills"){
        editSummarySkills();
        editTaskPreviews();
      }
      else if (parentCard.id == "yourCheckIns"){
        editSummaryDates();
      }
    }
    else if (editSummary == true){
      clickedBtn.src = "https://i.ibb.co/MGJ3Byk/icon-edit-01.png";
      editSummary = false;
      parentCard.style.width = "254.6px";
      parentCard.style.height = "312.33px";
      if (parentCard.id == "yourGoal"){
        closeSummaryGoal();
      }
      else if (parentCard.id == "yourSkills"){
        closeSummarySkills();
        closeTaskPreviews();
      }
      else if (parentCard.id == "yourCheckIns"){
        closeSummaryDates();
      }
    }
  }
}

//this section previews the improvement tasks in the summary section
var circleButtons = document.querySelectorAll('.btnCircle');
var improveTaskPreview = document.querySelector('.improveTaskPreview');
improveTaskPreview.style.opacity = "0%";
improveTaskPreview.style.left = "0px";
var clickedBtn = 8;

for (i=0; i<circleButtons.length; i++){
  circleButtons[i].dataNum = i;
  circleButtons[i].onclick = function(e){
    var btn = e.target;
    if (btn.dataClicked == null){
      if (clickedBtn == 8){
        clickedBtn = btn.dataNum;
      }
      else {
        circleButtons[clickedBtn].style.backgroundColor = "#BEBEBE";
        circleButtons[clickedBtn].dataClicked = null;
        clickedBtn = btn.dataNum;
      }
      btn.dataClicked = "on";
      btn.style.backgroundColor = "#2E2E2E";
      showTaskPreview(btn);
    }
    else if (btn.dataClicked == "on"){
      btn.dataClicked = null;
      btn.style.backgroundColor = "#BEBEBE";
      improveTaskPreview.style.opacity = "0%";
      improveTaskPreview.style.top = "0";
      improveTaskPreview.style.left = "0px"
    }
  }
}

var downloadImprove = window.localStorage.getItem('userImproveTasks');
var improveList = JSON.parse(downloadImprove);


function showTaskPreview(button){
  var downloadImprove = window.localStorage.getItem('userImproveTasks');
  var improveList = JSON.parse(downloadImprove);
  var parent = button.parentElement.parentElement;
  parent.style.position = "relative";
  improveTaskPreview.style.opacity = "100%";
  var btnLeft = button.offsetLeft;
  var btnTop = button.offsetTop;
  improveTaskPreview.style.left = btnLeft-92;
  improveTaskPreview.style.top = btnTop+53;
  var btnId = button.id.split("Btn").shift();
  var btnTask = btnId.split("Skill").shift() + btnId.split("Skill").pop();
  var taskDisplay = improveList[btnTask];
  improveTaskPreview.innerText = taskDisplay;
}

//allowing user to edit task previews
var improveTaskTitles = ['hard1Improve1', 'hard1Improve2', 'hard2Improve1', 'hard2Improve2', 
'soft1Improve1', 'soft1Improve2', 'soft2Improve1', 'soft2Improve2'];
function editTaskPreviews(){
  var downloadImprove = window.localStorage.getItem('userImproveTasks');
  var improveList = JSON.parse(downloadImprove);
  var improveTaskPreview = document.querySelector('.improveTaskPreview');
  improveTaskPreview.readOnly = false;
  improveTaskPreview.onchange = function() {
    var taskNum = improveTaskTitles[clickedBtn];
    improveList[taskNum] = improveTaskPreview.value;
    var writeTasks = JSON.stringify(improveList);
    window.localStorage.setItem('userImproveTasks',writeTasks);
    //now the preview needs to refresh -- maybe by closing the taskPreview div
    var curClick = circleButtons[clickedBtn];
    curClick.dataClicked = null;
    curClick.style.backgroundColor = "#BEBEBE";
    improveTaskPreview.style.opacity = "0%";
    improveTaskPreview.style.top = "0";
    improveTaskPreview.style.left="0";
    var improveForm = document.getElementById('improveForm');
    improveForm.reset();
  } 
}

function closeTaskPreviews(){
  var improveTaskPreview = document.querySelector('.improveTaskPreview');
  improveTaskPreview.readOnly = true;
  displayImproveTasks();
}

//allowing user to edit skills on the summary section
function editSummarySkills(){
  var skillsSummaryCard = document.getElementById('yourSkills');
  var skillsDownload = window.localStorage.getItem('userSkills');
  var skillsList = JSON.parse(skillsDownload);
  var skillBtns = skillsSummaryCard.querySelectorAll('.btnSkill');
  for (i=0; i<skillBtns.length; i++){
    skillBtns[i].style.border = "none";
    skillBtns[i].style.backgroundColor = "transparent";
    skillBtns[i].style.padding = "0";
    skillBtns[i].style.margin = "6.7px";
    var theId = skillBtns[i].id.split("Summary").shift() + skillBtns[i].id.split("Summary").pop();
    var theSkill = theId.split("Skill").shift() + theId.split("Skill").pop();
    var matchSkill = skillsList[theSkill];
    skillBtns[i].innerHTML = '<input type="text" class="inputSkill" value="'+matchSkill+'">';
  }
  var skillInputs = skillsSummaryCard.querySelectorAll(".inputSkill");
  for (j=0; j<skillInputs.length; j++){
    skillInputs[j].onchange = function(e){
      var theId = e.target.parentElement.id.split("Summary").shift() + e.target.parentElement.id.split("Summary").pop();
      var theSkill = theId.split("Skill").shift() + theId.split("Skill").pop();
      skillsList[theSkill] = e.target.value;
      var writeSkills = JSON.stringify(skillsList);
      window.localStorage.setItem('userSkills',writeSkills);
    }
  }
}

function closeSummarySkills(){
  var skillsSummaryCard = document.getElementById('yourSkills');
  var skillsList = JSON.parse(window.localStorage.getItem('userSkills'));
  var skillBtns = skillsSummaryCard.querySelectorAll('.btnSkill');
  for (i=0; i<skillBtns.length; i++){
    skillBtns[i].style.border = "solid 2.01px #E6E6E6";
    skillBtns[i].style.backgroundColor = "#FAFAFA";
    skillBtns[i].style.padding = "8.04px";
    skillBtns[i].style.margin = "2.68px 2.68px";
    var theId = skillBtns[i].id.split("Summary").shift() + skillBtns[i].id.split("Summary").pop();
    var theSkill = theId.split("Skill").shift() + theId.split("Skill").pop();
    var matchSkill = skillsList[theSkill];
    skillBtns[i].innerHTML = matchSkill;
  }
  displaySkills();
}

//check-in dates summary card
var skillsSummaryCard = document.getElementById('yourCheckIns');
var sumDateInputs = skillsSummaryCard.querySelectorAll('.inputDate');
for (i=0; i<sumDateInputs.length; i++){
  sumDateInputs[i].readOnly = true;
}


function editSummaryDates(){
  for (i=0; i<sumDateInputs.length-1; i++){
    sumDateInputs[i].readOnly = false;
  }
  sumDateInputs[0].onchange = function(e){
    var date = e.target;
    var checkInStore = {
      checkInOne: date.value,
      checkInTwo: sumDateInputs[1].value
    }
    var userDates = JSON.stringify(checkInStore);
    window.localStorage.setItem('userDates',userDates);
  }
  sumDateInputs[1].onchange = function(e){
    var date = e.target;
    var checkInStore = {
      checkInOne: sumDateInputs[0].value,
      checkInTwo: date.value
    }
    var userDates = JSON.stringify(checkInStore);
    window.localStorage.setItem('userDates',userDates);
  }
}

function closeSummaryDates(){
  for (i=0; i<sumDateInputs.length; i++){
    sumDateInputs[i].readOnly = true;
  }
  clearFormatAndResetArray();
  outlineDeadlineAndToday();
  displaySavedDates();
  displayDates(); 
  displayDateSum();
}

// END SUMMARY CARDS PORTION
// -----------------------------------




// Navigation Portion

//setting up a variable for which page is currently shown
var curPage = 1;

var pages = document.querySelectorAll('.wrapperPage');
var btnArrow = document.querySelector('.btnArrow');
var bgImg = document.querySelector('.bgMain');
var btnNext = document.querySelectorAll('.btnNext');
var btnBack = document.querySelectorAll('.btnBack');
var altPage = document.querySelector('.wrapperPageAlt');

btnArrow.onclick = function(){
  advancePage();
}

for (i=0; i<btnNext.length; i++){
  btnNext[i].onclick = function(){
    advancePage();
  }
}

for (i=0; i<btnBack.length; i++){
  btnBack[i].onclick = function(){
    backPage();
  }
}

function advancePage(){
  if (curPage < pages.length){
    curPage++;
    turnOnPage();
    bigLogoOpacity();
    showProgress();
    var direction = "left";
    animateOff(direction);
  }
}

function backPage(){
  if (curPage > 1){
    curPage--;
    turnOnPage();
    bigLogoOpacity();
    showProgress();
    var direction = "right";
    animateOff(direction);
  }
}

function turnOnPage(){
  for (i=0; i<pages.length; i++){
    pages[i].style.transform = "scaleY(0)";
    pages[i].classList.remove('slideOffL');
    pages[i].classList.remove('slideOffR');
    pages[i].classList.remove('slideOnL');
    pages[i].classList.remove('slideOnR');
  }
  altPage.style.opacity = "0%";
  altPage.style.transform = "scaleY(0)";
  altPage.style.transition = "0.8s opacity";
  var currentPage = pages[curPage-1];
  currentPage.style.opacity = "100%";
  currentPage.style.transform = "scaleY(1)";
  currentPage.style.transition = "0.4s opacity";
  var pageHeight = currentPage.offsetHeight;
  btnArrow.style.top = pageHeight-134;
  arrowPagePosition(currentPage);
  animateOn(currentPage);
}

function animateOn(page){
  var pageDelay = 0.5;
  var textHeading = page.querySelectorAll('h1');
  //customDelay is used to stagger elements on a page with a card that needs to animate on first
  var customDelay = 0;
  if (curPage == 6 || curPage == 7){
    customDelay = 0.3;
  }
  for (i=0; i<textHeading.length; i++){
    textHeading[i].classList.add('fastFade');
    textHeading[i].style.animationDelay = pageDelay+customDelay+"s";
  }

  var hTwo = page.querySelectorAll('h2:not(.wrapped)');
  for (i=0; i<hTwo.length; i++){
    hTwo[i].classList.add('fastFade');
    hTwo[i].style.animationDelay = pageDelay+customDelay+(i*.5)+"s";
  }

  var iconText = page.querySelectorAll('.wrapperIconText');
  for (i=0; i<iconText.length; i++){
    iconText[i].classList.add('mediumFade');
    iconText[i].style.animationDelay = pageDelay+(i*2/20)+"s";
  }

  var card = page.querySelectorAll('.contentCard, .wrapperVideo, .contentBox, .wrapperSkillsCard, .wrapperCal, .wrapperDate, #personalGoal');
  for (i=0; i<card.length; i++){
    card[i].classList.add('slideFade');
    card[i].style.animationDelay = pageDelay+i*.2+"s";
  }

  var button = page.querySelectorAll('.btnNext, .btnBack, .btnVideo, .btnChange, .btnVideo');
  for (i=0; i<button.length; i++){
    button[i].classList.add('floatFade');
    button[i].style.animationDelay = pageDelay+customDelay+i*.2+"s";
  }

  var line = document.querySelector('.timelineLine');
  line.style.transform = "scaleX(0)";
  line.style.animationDelay = "0.4s";
  var tlCheckIns = page.querySelectorAll('.timelineEnd, .timelineCheckIn');
  function timelineAnimate(){
    line.style.transform = "scaleX(1)";
    for (i=0; i<tlCheckIns.length; i++){
      tlCheckIns[i].classList.add('floatFade');
      tlCheckIns[i].style.animationDuration = "0.4s";
      tlCheckIns[i].style.animationDelay = (i/2)+"s";
    }
  }
  if (curPage == 16){
    timelineAnimate();
  }

  setTimeout(function(){
    page.dataTurned = "turned";
  }, 1000);
  
}

function animateOff(dir){
  if (dir == "left"){
    var thisPage = pages[curPage-2];
    if (thisPage){
      thisPage.classList.add('slideOffL');
    }
    var nextPage = pages[curPage-1];
    if (nextPage.dataTurned == "turned"){
      console.log('data');
      nextPage.classList.add('slideOnR');
    }
  }
  else if (dir == "right"){
    var thisPage = pages[curPage];
    var nextPage = pages[curPage-1];
    thisPage.classList.add('slideOffR');
    nextPage.classList.add('slideOnL');
  }
}

function arrowPagePosition(page){
  if (curPage > 5 && curPage < 13){
    btnArrow.style.opacity = "0%";
    btnArrow.style.top = "-335px";
    page.style.bottom = "0";
  }
  else if (curPage == 13) {
    btnArrow.style.opacity = "100%";
    page.style.bottom = "134px";
  }
  else if (curPage > 13){
    btnArrow.style.opacity = "0%";
    btnArrow.style.top = "-335px";
    page.style.bottom = "0";
  }
  else if (curPage <= 5){
    btnArrow.style.opacity = "100%";
    page.style.bottom = "134px";
  }
}

function bigLogoOpacity(){
  if (curPage == 0 || curPage == 13 || curPage == 19){
    bgImg.style.opacity = "25%";
  }
  else {
    bgImg.style.opacity = "25%";
  }
}

turnOnPage();
bigLogoOpacity();


//progress bar stuffs
var progBarNext = document.querySelector('#progBarNext');
var progBarBack = document.querySelector('#progBarBack');

progBarNext.onclick = function(){
  advancePage();
  vidPlayer1.pause();
  vidPlayer2.pause();
  document.getElementById('btnArrVidStop').style.transition = "0.4s background-color";
}

progBarBack.onclick = function(){
  backPage();
  vidPlayer1.pause();
  vidPlayer2.pause();
  document.getElementById('btnArrVidStop').style.transition = "0.4s background-color";
}

var progBarHi = document.querySelector('.progBarHi');
var progBarChecks = document.querySelectorAll('.iconBarCheck');


function showProgress(){
  var curPoint = curPage;
  if (curPoint < 8){
    var total = 7;
    var factor = 1/3;
  }
  else if (curPoint >= 8 && curPoint < 14){
    var total = 13;
    var factor = 2/3;
  }
  else if (curPoint >= 14){
    var total = 19;
    var factor = 1;
  }
  var percent = (curPoint/total)*(factor);
  progBarHi.style.transform = "scaleX("+percent+")";
  highlightChecks();
}

function highlightChecks(){
  if (curPage >= 19){
    progBarChecks[2].style.backgroundColor = "#8876de";
  }
  else if (curPage >= 13){
    progBarChecks[1].style.backgroundColor = "#8876de";
  }
  else if (curPage >= 7){
    progBarChecks[0].style.backgroundColor = "#8876de";
  }
}

showProgress();


//clicking on the video buttons leads to the video page
var btnVideo = document.querySelectorAll('.btnVideo');
for (i=0; i<btnVideo.length; i++){
  btnVideo[i].onclick = function(){
    thisPage = pages[curPage-1];
    thisPage.style.opacity = "0%";
    thisPage.style.transform = "scaleY(0)";
    thisPage.classList.remove('slideOnL');
    thisPage.classList.remove('slideOnR');
    altPage.style.opacity = "100%";
    altPage.style.transform = "scaleY(1)";
    altPage.dataTurned = "turned";
    //if statements send user back to the correct page
    // if (curPage == 7){
    //   curPage = 8;
    // }
    // else if (curPage == 16){
    //   curPage = 17;
    // }
  }
}

var vidBackBtn = document.querySelector('#vidBack');
vidBackBtn.onclick = function(){
  altPage.style.opacity = "0%";
  altPage.style.transform = "scaleY(0)";
  thisPage = pages[curPage-1];
  thisPage.style.opacity = "100%";
  thisPage.style.transform = "scaleY(1)";
}

//clicking on checkmarks brings user back to specific page
var iconBarChecks = document.querySelectorAll('.iconBarCheck');
var firstCheck = iconBarChecks[0];
var secondCheck = iconBarChecks[1];
var thirdCheck = iconBarChecks[2];

firstCheck.onclick = function(){
  jump(7);
}

secondCheck.onclick = function(){
  jump(13);
}

thirdCheck.onclick = function(){
  jump(19);
}


// END NAV PORTION
// -----------------------------------

//Shortcuts for coding purposes
//shortcut for clearing all inputs
function clear(){
  window.localStorage.clear();
}

//jump to a particular page - this is used above as well
function jump(p){
  curPage = p-1;
  advancePage();
}

// END SHORTCUTS PORTION
// -----------------------------------









//easter egg
document.onkeydown = function(e){
  if (e.key == "ArrowUp"){
    document.onkeydown = function(f){
      if (f.key == "ArrowUp"){
        document.onkeydown = function(g){
          if (g.key == "ArrowDown"){
            document.onkeydown = function(h){
              if (h.key == "ArrowDown"){
                document.onkeydown = function(i){
                  if (i.key == "ArrowLeft"){
                    document.onkeydown = function(j){
                      if (j.key == "ArrowRight"){
                        document.onkeydown = function(k){
                          if (k.key == "ArrowLeft"){
                            document.onkeydown = function(l){
                              if (l.key == "ArrowRight"){
                                document.onkeydown = function(m){
                                  if (m.key == "b"){
                                    document.onkeydown = function(n){
                                      if (n.key == "a"){
                                        document.onkeydown = function(o){
                                          if (o.key == "Enter"){
                                            var wholePage = document.querySelector('body');
                                            wholePage.style.backgroundColor = "pink";
                                            wholePage.style.fontFamily = "Comic Sans MS, Comic Sans, cursive";
                                            var images = document.querySelectorAll('img');
                                            for (i=0; i<images.length; i++){
                                              images[i].src = "https://i.ibb.co/bsQ9NM5/icon-unicorn-01.png";
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}




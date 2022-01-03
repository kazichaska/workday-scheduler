// psudo code  for workday scheduler (jQuery, Bootstrap, jQueryUI, Moment.js, Google Fonts, Iconic)

// variable declaration here
// const timeBlock = $("#time-block");

var currentDate = moment().format('MMMM Do, dddd');
var currentHour = moment().format('H');
// print current date and time on `lead`

const currentDay = function() {
    // console.log(currentDate);
    // console.log(currentHour);
    $("#currentDay").text(currentDate);    
}

// call this function to make sure current date and day shows up on the top of the page
currentDay();

// setting items to localstorage

const nineamButton = document.querySelector("#nineambutton");
const tenamButton = document.querySelector("#tenambutton");
const elevenamButton = document.querySelector("#elevenambutton");
const twelvepmButton = document.querySelector("#twelvepmbutton");
const onepmButton = document.querySelector("#onepmbutton");
const twopmButton = document.querySelector("#twopmbutton");
const threepmButton = document.querySelector("#threepmbutton");
const fourpmButton = document.querySelector("#fourpmbutton");
const fivepmButton = document.querySelector("#fivepmbutton");

const nineamPlanInput = document.querySelector("#nineamTextArea");
const tenamPlanInput = document.querySelector("#tenamTextArea");
const elevenamPlanInput = document.querySelector("#elevenamTextArea");
const twelvepmPlanInput = document.querySelector("#twelvepmTextArea");
const onepmPlanInput = document.querySelector("#onepmTextArea");
const twopmPlanInput = document.querySelector("#twopmTextArea");
const threepmPlanInput = document.querySelector("#threepmTextArea");
const fourpmPlanInput = document.querySelector("#fourpmTextArea");
const fivepmPlanInput = document.querySelector("#fivepmTextArea");



nineamButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    // create user object from submission
    var dayPlan = {
      nineamPlan: nineamPlanInput.value.trim(),
    };
  
    // set new submission to local storage 
    localStorage.setItem("nineamDayPlan", JSON.stringify(dayPlan));  

});


tenamButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    // create user object from submission
    var dayPlan = {
      tenamPlan: tenamPlanInput.value.trim(),
    };
  
    // set new submission to local storage 
    localStorage.setItem("tenamDayPlan", JSON.stringify(dayPlan));    
});

elevenamButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    // create user object from submission
    var dayPlan = {
      elevenamPlan: elevenamPlanInput.value.trim(),
    };
  
    // set new submission to local storage 
    localStorage.setItem("elevenamDayPlan", JSON.stringify(dayPlan));    
});

twelvepmButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    // create user object from submission
    var dayPlan = {
      twelvepmPlan: twelvepmPlanInput.value.trim(),
    };
  
    // set new submission to local storage 
    localStorage.setItem("twelvepmDayPlan", JSON.stringify(dayPlan));  

});

onepmButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    // create user object from submission
    var dayPlan = {
      onepmPlan: onepmPlanInput.value.trim(),
    };
  
    // set new submission to local storage 
    localStorage.setItem("onepmDayPlan", JSON.stringify(dayPlan));  

});

twopmButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    // create user object from submission
    var dayPlan = {
      twopmPlan: twopmPlanInput.value.trim(),
    };
  
    // set new submission to local storage 
    localStorage.setItem("twopmDayPlan", JSON.stringify(dayPlan));  

});

threepmButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    // create user object from submission
    var dayPlan = {
      threepmPlan: threepmPlanInput.value.trim(),
    };
  
    // set new submission to local storage 
    localStorage.setItem("threepmDayPlan", JSON.stringify(dayPlan));  

});

fourpmButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    // create user object from submission
    var dayPlan = {
      fourpmPlan: fourpmPlanInput.value.trim(),
    };
  
    // set new submission to local storage 
    localStorage.setItem("fourpmDayPlan", JSON.stringify(dayPlan));  

});

fivepmButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    // create user object from submission
    var dayPlan = {
      fivepmPlan: fivepmPlanInput.value.trim(),
    };
  
    // set new submission to local storage 
    localStorage.setItem("fivepmDayPlan", JSON.stringify(dayPlan));  

});


// event lister function to capture text when it is entered on the box

// create planner so it shows start and end time on the page from 9:00a.m. till 5:00p.m.


// current day would show when planner is opened with standard business hour


//  time block is color-coded to indicate whether it is past, present or future



// upon clicking on time block it lets to add event


// would have a `save` button to save event to `local storage`
// get data from localstorage and render to page

// const getFromLocalStorage = function() { 
//     var nineamDayPlanLs = (JSON.parse(localStorage.getItem("nineamDayPlan")).nineamPlan);
//     // Research how to append data to textarea in javascript
//     // document.querySelector("#nineamTextArea") = nineamDayPlanLs;
//     nineamPlanInput.innerHTML += nineamDayPlanLs;
// };

// getFromLocalStorage();

// console.log(JSON.parse(localStorage.getItem("nineamDayPlan")).nineamPlan);
// refreshing page would persist events

const getFromLocalStorage = function() { 

    var nineamDayPlanLs = (JSON.parse(localStorage.getItem("nineamDayPlan")).nineamPlan);
    var tenamDayPlanLs = (JSON.parse(localStorage.getItem("tenamDayPlan")).tenamPlan);
    var elevenamDayPlanLs = (JSON.parse(localStorage.getItem("elevenamDayPlan")).elevenamPlan);
    var twelvepmDayPlanLs = (JSON.parse(localStorage.getItem("twelvepmDayPlan")).twelvepmPlan);
    var onepmDayPlanLs = (JSON.parse(localStorage.getItem("onepmDayPlan")).onepmPlan);
    var twopmDayPlanLs = (JSON.parse(localStorage.getItem("twopmDayPlan")).twopmPlan);
    var threepmDayPlanLs = (JSON.parse(localStorage.getItem("threepmDayPlan")).threepmPlan);
    var fourpmDayPlanLs = (JSON.parse(localStorage.getItem("fourpmDayPlan")).fourpmPlan);
    var fivepmDayPlanLs = (JSON.parse(localStorage.getItem("fivepmDayPlan")).fivepmPlan);

    // Research how to append data to textarea in javascript
    // document.querySelector("#nineamTextArea") = nineamDayPlanLs;
    nineamPlanInput.innerHTML += nineamDayPlanLs;
    tenamPlanInput.innerHTML += tenamDayPlanLs;
    elevenamPlanInput.innerHTML += elevenamDayPlanLs;
    twelvepmPlanInput.innerHTML += twelvepmDayPlanLs;
    onepmPlanInput.innerHTML += onepmDayPlanLs;
    twopmPlanInput.innerHTML += twopmDayPlanLs;
    threepmPlanInput.innerHTML += threepmDayPlanLs;
    fourpmPlanInput.innerHTML += fourpmDayPlanLs;
    fivepmPlanInput.innerHTML += fivepmDayPlanLs;
};

getFromLocalStorage();

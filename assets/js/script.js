
// Get current date formatted Weekday, Month Date
var currentDate = moment().format("dddd, MMMM Do");

// Printing day to the page
var currentDayEl = document.querySelector("#currentDay");
currentDayEl.textContent = currentDate;

// Making a variable for the timeblocks
var nineblockEl = document.querySelector("#nineBlock");
var tenblockEl = document.querySelector("#tenBlock");
var elevenblockEl = document.querySelector("#elevenBlock");
var twelveblockEl = document.querySelector("#twelveBlock");
var oneblockEl = document.querySelector("#oneBlock");
var twoblockEl = document.querySelector("#twoBlock");
var threeblockEl = document.querySelector("#threeBlock");
var fourblockEl = document.querySelector("#fourBlock");
var fiveblockEl = document.querySelector("#fiveBlock");

// Making variables for save buttons

var nineButton = document.querySelector("#nineBtn");
var tenButton = document.querySelector("#tenBtn");
var elevenButton = document.querySelector("#elevenBtn");
var twelveButton = document.querySelector("#twelveBtn");
var oneButton = document.querySelector("#oneBtn");
var twoButton = document.querySelector("#twoBtn");
var threeButton = document.querySelector("#threeBtn");
var fourButton = document.querySelector("#fourBtn");
var fiveButton = document.querySelector("#fiveBtn");

// Making variables for text areas

var nineTextAreaEl = document.querySelector("#nineTextArea");


function timeOfDay() {

    var currentTime = moment().format("H");

    if(currentTime == 9) {

        nineblockEl.setAttribute("style", "background-color:red")
        tenblockEl.setAttribute("style", "background-color:green")
        elevenblockEl.setAttribute("style", "background-color:green")
        twelveblockEl.setAttribute("style", "background-color:green")
        oneblockEl.setAttribute("style", "background-color:green")
        twoblockEl.setAttribute("style", "background-color:green")
        threeblockEl.setAttribute("style", "background-color:green")
        fourblockEl.setAttribute("style", "background-color:green")
        fiveblockEl.setAttribute("style", "background-color:green")
    }
    else if(currentTime == 10) {

        nineblockEl.setAttribute("style", "background-color:lightgray")
        tenblockEl.setAttribute("style", "background-color:red")
        elevenblockEl.setAttribute("style", "background-color:green")
        twelveblockEl.setAttribute("style", "background-color:green")
        oneblockEl.setAttribute("style", "background-color:green")
        twoblockEl.setAttribute("style", "background-color:green")
        threeblockEl.setAttribute("style", "background-color:green")
        fourblockEl.setAttribute("style", "background-color:green")
        fiveblockEl.setAttribute("style", "background-color:green")
    }
    else if(currentTime == 11) {

        nineblockEl.setAttribute("style", "background-color:lightgray")
        tenblockEl.setAttribute("style", "background-color:lightgray")
        elevenblockEl.setAttribute("style", "background-color:red")
        twelveblockEl.setAttribute("style", "background-color:green")
        oneblockEl.setAttribute("style", "background-color:green")
        twoblockEl.setAttribute("style", "background-color:green")
        threeblockEl.setAttribute("style", "background-color:green")
        fourblockEl.setAttribute("style", "background-color:green")
        fiveblockEl.setAttribute("style", "background-color:green")
    }
    else if(currentTime == 12) {

        nineblockEl.setAttribute("style", "background-color:lightgray")
        tenblockEl.setAttribute("style", "background-color:lightgray")
        elevenblockEl.setAttribute("style", "background-color:lightgray")
        twelveblockEl.setAttribute("style", "background-color:red")
        oneblockEl.setAttribute("style", "background-color:green")
        twoblockEl.setAttribute("style", "background-color:green")
        threeblockEl.setAttribute("style", "background-color:green")
        fourblockEl.setAttribute("style", "background-color:green")
        fiveblockEl.setAttribute("style", "background-color:green")
    }
    else if(currentTime == 13) {

        nineblockEl.setAttribute("style", "background-color:lightgray")
        tenblockEl.setAttribute("style", "background-color:lightgray")
        elevenblockEl.setAttribute("style", "background-color:lightgray")
        twelveblockEl.setAttribute("style", "background-color:lightgray")
        oneblockEl.setAttribute("style", "background-color:red")
        twoblockEl.setAttribute("style", "background-color:green")
        threeblockEl.setAttribute("style", "background-color:green")
        fourblockEl.setAttribute("style", "background-color:green")
        fiveblockEl.setAttribute("style", "background-color:green")
    }
    else if(currentTime == 14) {

        nineblockEl.setAttribute("style", "background-color:lightgray")
        tenblockEl.setAttribute("style", "background-color:lightgray")
        elevenblockEl.setAttribute("style", "background-color:lightgray")
        twelveblockEl.setAttribute("style", "background-color:lightgray")
        oneblockEl.setAttribute("style", "background-color:lightgray")
        twoblockEl.setAttribute("style", "background-color:red")
        threeblockEl.setAttribute("style", "background-color:green")
        fourblockEl.setAttribute("style", "background-color:green")
        fiveblockEl.setAttribute("style", "background-color:green")
    }
    else if(currentTime == 15) {

        nineblockEl.setAttribute("style", "background-color:lightgray")
        tenblockEl.setAttribute("style", "background-color:lightgray")
        elevenblockEl.setAttribute("style", "background-color:lightgray")
        twelveblockEl.setAttribute("style", "background-color:lightgray")
        oneblockEl.setAttribute("style", "background-color:lightgray")
        twoblockEl.setAttribute("style", "background-color:lightgray")
        threeblockEl.setAttribute("style", "background-color:red")
        fourblockEl.setAttribute("style", "background-color:green")
        fiveblockEl.setAttribute("style", "background-color:green")
    }
    else if(currentTime == 16) {

        nineblockEl.setAttribute("style", "background-color:lightgray")
        tenblockEl.setAttribute("style", "background-color:lightgray")
        elevenblockEl.setAttribute("style", "background-color:lightgray")
        twelveblockEl.setAttribute("style", "background-color:lightgray")
        oneblockEl.setAttribute("style", "background-color:lightgray")
        twoblockEl.setAttribute("style", "background-color:lightgray")
        threeblockEl.setAttribute("style", "background-color:lightgray")
        fourblockEl.setAttribute("style", "background-color:red")
        fiveblockEl.setAttribute("style", "background-color:green")
    }
    else if(currentTime == 17) {

        nineblockEl.setAttribute("style", "background-color:lightgray")
        tenblockEl.setAttribute("style", "background-color:lightgray")
        elevenblockEl.setAttribute("style", "background-color:lightgray")
        twelveblockEl.setAttribute("style", "background-color:lightgray")
        oneblockEl.setAttribute("style", "background-color:lightgray")
        twoblockEl.setAttribute("style", "background-color:lightgray")
        threeblockEl.setAttribute("style", "background-color:lightgray")
        fourblockEl.setAttribute("style", "background-color:lightgray")
        fiveblockEl.setAttribute("style", "background-color:red")
    }
    else if(currentTime < 9) {

        nineblockEl.setAttribute("style", "background-color:green")
        tenblockEl.setAttribute("style", "background-color:green")
        elevenblockEl.setAttribute("style", "background-color:green")
        twelveblockEl.setAttribute("style", "background-color:green")
        oneblockEl.setAttribute("style", "background-color:green")
        twoblockEl.setAttribute("style", "background-color:green")
        threeblockEl.setAttribute("style", "background-color:green")
        fourblockEl.setAttribute("style", "background-color:green")
        fiveblockEl.setAttribute("style", "background-color:green")
    }
    else if(currentTime > 17) {

        nineblockEl.setAttribute("style", "background-color:lightgray")
        tenblockEl.setAttribute("style", "background-color:lightgray")
        elevenblockEl.setAttribute("style", "background-color:lightgray")
        twelveblockEl.setAttribute("style", "background-color:lightgray")
        oneblockEl.setAttribute("style", "background-color:lightgray")
        twoblockEl.setAttribute("style", "background-color:lightgray")
        threeblockEl.setAttribute("style", "background-color:lightgray")
        fourblockEl.setAttribute("style", "background-color:lightgray")
        fiveblockEl.setAttribute("style", "background-color:lightgray")
    }
}

var toDo = {

    nineAM: "",
    tenAM: "",
    elevenAM: "",
    twelveAM: "",
    onePM: "",
    twoPM: "",
    threePM: "",
    fourPM: "",
    fivePM: "",
};

// Runs when a save button is clicked
function saveNineBlock(event) {

    event.preventDefault(); 

    toDo.nineAM = nineTextAreaEl.value;
    console.log(toDo);
    
}

// Create listener for button to save the entered text into the toDo object
nineButton.addEventListener("click", saveNineBlock);

// Color code time blocks based on hour of the day
timeOfDay();
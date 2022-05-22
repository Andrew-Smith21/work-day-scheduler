
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

function timeOfDay() {

    var currentTime = moment().format("h");
    console.log(currentTime);

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
    else if(currentTime == 1) {

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
    else if(currentTime == 2) {

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
    else if(currentTime == 3) {

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
    else if(currentTime == 4) {

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
    else if(currentTime == 5) {

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
    else {

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

timeOfDay();
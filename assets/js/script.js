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
var tenTextAreaEl = document.querySelector("#tenTextArea");
var elevenTextAreaEl = document.querySelector("#elevenTextArea");
var twelveTextAreaEl = document.querySelector("#twelveTextArea");
var oneTextAreaEl = document.querySelector("#oneTextArea");
var twoTextAreaEl = document.querySelector("#twoTextArea");
var threeTextAreaEl = document.querySelector("#threeTextArea");
var fourTextAreaEl = document.querySelector("#fourTextArea");
var fiveTextAreaEl = document.querySelector("#fiveTextArea");

// Color coding time blocks based on time of day
function timeOfDay() {

    // Getting the current hour of day from 0-23
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

// Creating empty toDo object that will be changed later in the code
var toDo = {
    nineAM: "",
    tenAM: "",
    elevenAM: "",
    twelvePM: "",
    onePM: "",
    twoPM: "",
    threePM: "",
    fourPM: "",
    fivePM: "",
};

// Runs when 9AM save button is clicked
function saveNineBlock(event) {

    event.preventDefault(); 

    toDo.nineAM = nineTextAreaEl.value;

    // save toDo object to localStorage
    localStorage.setItem("toDo", JSON.stringify(toDo));
}

// Runs when 10AM save button is clicked
function saveTenBlock(event) {

    event.preventDefault(); 

    toDo.tenAM = tenTextAreaEl.value;

    // save toDo object to localStorage
    localStorage.setItem("toDo", JSON.stringify(toDo));
}

// Runs when 11AM save button is clicked
function saveElevenBlock(event) {

    event.preventDefault(); 

    toDo.elevenAM = elevenTextAreaEl.value;

    // save toDo object to localStorage
    localStorage.setItem("toDo", JSON.stringify(toDo));
}

// Runs when 12PM save button is clicked
function saveTwelveBlock(event) {

    event.preventDefault(); 

    toDo.twelvePM = twelveTextAreaEl.value;

    // save toDo object to localStorage
    localStorage.setItem("toDo", JSON.stringify(toDo));
}

// Runs when 1PM save button is clicked
function saveOneBlock(event) {

    event.preventDefault(); 

    toDo.onePM = oneTextAreaEl.value;

    // save toDo object to localStorage
    localStorage.setItem("toDo", JSON.stringify(toDo));
}

// Runs when 2PM save button is clicked
function saveTwoBlock(event) {

    event.preventDefault(); 

    toDo.twoPM = twoTextAreaEl.value;

    // save toDo object to localStorage
    localStorage.setItem("toDo", JSON.stringify(toDo));
}

// Runs when 3PM save button is clicked
function saveThreeBlock(event) {

    event.preventDefault(); 

    toDo.threePM = threeTextAreaEl.value;

    // save toDo object to localStorage
    localStorage.setItem("toDo", JSON.stringify(toDo));
}

// Runs when 4PM save button is clicked
function saveFourBlock(event) {

    event.preventDefault(); 

    toDo.fourPM = fourTextAreaEl.value;

    // save toDo object to localStorage
    localStorage.setItem("toDo", JSON.stringify(toDo));
}

// Runs when 5PM save button is clicked
function saveFiveBlock(event) {

    event.preventDefault(); 

    toDo.fivePM = fiveTextAreaEl.value;

    // save toDo object to localStorage
    localStorage.setItem("toDo", JSON.stringify(toDo));
}

// Load items on the schedule when the page loads
function loadSchedule(event) {

    toDo = localStorage.getItem("toDo");
    toDo = JSON.parse(toDo);

    // if there are no tasks, return out of the function
    if (!toDo) {
        return false;
    }

    nineTextAreaEl.value = toDo.nineAM;
    tenTextAreaEl.value = toDo.tenAM;
    elevenTextAreaEl.value = toDo.elevenAM;
    twelveTextAreaEl.value = toDo.twelvePM;
    oneTextAreaEl.value = toDo.onePM;
    twoTextAreaEl.value = toDo.twoPM;
    threeTextAreaEl.value = toDo.threePM;
    fourTextAreaEl.value = toDo.fourPM;
    fiveTextAreaEl.value = toDo.fivePM;
}


// Create listener for buttons to save the entered text into the toDo object
nineButton.addEventListener("click", saveNineBlock);
tenButton.addEventListener("click", saveTenBlock);
elevenButton.addEventListener("click", saveElevenBlock);
twelveButton.addEventListener("click", saveTwelveBlock);
oneButton.addEventListener("click", saveOneBlock);
twoButton.addEventListener("click", saveTwoBlock);
threeButton.addEventListener("click", saveThreeBlock);
fourButton.addEventListener("click", saveFourBlock);
fiveButton.addEventListener("click", saveFiveBlock);

// Color code time blocks based on hour of the day
timeOfDay();
loadSchedule();
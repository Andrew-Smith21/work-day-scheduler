

// Get current date
var currentDate = moment().format("dddd, MMMM Do");
console.log(currentDate);

var currentDayEl = document.querySelector("#currentDay");
currentDayEl.textContent = currentDate;
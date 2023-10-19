// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveBtn = document.querySelectorAll('btn saveBtn');
var date = dayjs('#currentDay');
var present = document.getElementById('present');
var past = document.getElementById('past');
var future = document.getElementById('future');

var reformat = dayjs().format('dddd, MMMM D YYYY');
var time = dayjs().format('h');
console.log(time);
var calendarTime = (["#9", "#10", "#11", "#12", "#1", "#2", "#3", "#4", "#5"]);
var textArea = document.querySelectorAll("#textArea");

// var color = document.querySelectorAll('row time-block present past future');

// var futureTime = daysjs(time).toNow();
// var pastTime = daysjs(reformat).isBefore(time);


// var hidden = document.querySelectorAll('fas fa-save');


$(function (e) {
    e.target =
        date = setInterval(function () {
            $('#currentDay').text(reformat);
        }, 1000);

    currentTime = (function () {
        if (calendarTime == time) {
            style.textArea = present;
            console.log("text working");
        } else if (calendarTime == pastTime) {
            style.textArea = past;
        } else {
            style.textArea = future;
        }

    })


    saveBtn.addEventListener("click", function (event) {
        if (event.target.buttonDelete === 'click') {
        }
        buttonDelete.addEventListener("click", (event) => {
            textArea = JSON.parse(localStorage.getItem("#textArea")) || []
            var userInput = document.createElement("h2");
            userInput.textContent = textArea.value;

            localStorage.setItem("#textArea", JSON.stringify(textArea));

            for (var i = 0; i < textArea.length; i++) {
                textArea.push({ userInput: textArea.value })

            }
        })
    })

});







//set each button to have a data attribute.
//on a click it deletes the item in the list.

// function displayTime() {
//     var rightNow = now.format('dddd, MMMM D YYYY, h:mm:ss a');
//     timeDisplayEl.text(rightNow);
// }
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page

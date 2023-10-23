// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveBtn = document.querySelectorAll('btn saveBtn col-2 col-md-1');
var date = dayjs('#currentDay');
var reformat = dayjs().format('dddd, MMMM D YYYY');
var time = dayjs().format('h');
console.log(time);
var calendarTime = $(["9", "10", "11", "12", "1", "2", "3", "4", "5"]);
var textArea = $("#textArea");
var color = $('.row time-block');
// var hidden = document.querySelectorAll('fas fa-save');

$(document).ready(function () {
    // $(function (events) {

    date = setInterval(function () {
        $('#currentDay').text(reformat);
    }, 1000);

    currentTime = function () {
        $('.row time-block').each(function () {

        }
        )
    }
    console.log('calendarTime:' + JSON.stringify(calendarTime));
    console.log('time:' + time)
    for (var i = 0; i < JSON.stringify(calendarTime); i++) {
        var id = $(this).attr("#id");
        var splitId = id.split('-');
        // textArea.push({ userInput: textArea.value })
        if (splitId == calendarTime) {
            color.addClass('.present');
        } else if (splitId > calendarTime) {
            color.addClass('.future');
        } else {
            // textArea.css('background-color', 'd3d3d3');
            color.addClass('.past');
            document();
        }

    }

    currentTime();
});


function enterEvents(event) {
    var saveBtn = $(event.target);
    var storage = $('.storage');
    var eventList = $('#textArea').val();
    var eventListItemEl = $('col-8 col-md-10 description');
    saveBtn.getItem(eventList).append(storage);
    eventListItemEl.text(eventList);
    // eventList.append(storage);
    $('#textArea').val('');

    if (event.target.saveBtn === 'click') {
        textArea = JSON.parse(localStorage.getItem("#textArea")) || []

        userInput.textContent = textArea.value;

        localStorage.setItem("#textArea", JSON.stringify(textArea));

    }

    for (var i = 0; i < textArea.length; i++) {
        textArea.push({ userInput: textArea.value })

    }
    eventList.on('click', '.btn saveBtn col-2 col-md-1', enterEvents)
}







//set each button to have a data attribute.
//on a click it deletes the item in the list.
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

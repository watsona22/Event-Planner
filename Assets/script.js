
var date = dayjs('#currentDay');
var reformat = dayjs().format('dddd, MMMM D YYYY');
var time = dayjs().format('h');
var calendarTime = $(".time-block");
var saveBtn = $(".saveBtn")


$(document).ready(function () {

    //function to display current day in preferred format on the area of the page designated, #currentDay.
    date = setInterval(function () {
        $('#currentDay').text(reformat);
    }, 1000);

    //function to iterate over every row time-block and associated id to determine which style class displays based on conditional statement below.
    currentTime = function () {
        $('.row time-block').each(function () {

        }
        )
    }
    //function to iterate over each id attribute 
    calendarTime.each(function () {
        var id = $(this).attr("id");
        //variables to choose, split, and display the second value of the id were created so that it could be compared to current time. Because the split id was not a number, I had to use parseInt to return that type of value.
        var timeBlockHour = parseInt(id.split('-')[1]);
        var currentHour = dayjs().hour();
        //created conditional statement that compared currentHour to the timeBlockHour we created above to display classes accordingly.
        if (timeBlockHour === currentHour) {
            $(this).addClass("present");
        } else if (timeBlockHour < currentHour) {
            $(this).addClass("past");
        } else {
            $(this).addClass("future");
        }
        var savedNote = localStorage.getItem(id) || '';
        $(this).children(".description").val(savedNote);
    })
    currentTime();

    //function to save contents of the textbox area using the saveBtn to traverse the DOM and identify attribues/values.
    var printEvent = function (event) {
        event.preventDefault();
        var saveBtn = $(event.target);
        var noteKey = saveBtn.parent().attr("id");
        var noteText = saveBtn.siblings(".description").val();
        //set those values to local storage for continued access.
        localStorage.setItem(noteKey, noteText);
    }
    //created a click event to call the printEvent function so that text entered by the user would be saved to local storage, even after a refresh.
    saveBtn.on('click', printEvent)

});
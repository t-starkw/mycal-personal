$(document).ready(function() {
    // Set variables with current date and time with moment.js
    var currentMoment = moment().format('dddd, MMMM Do YYYY');
    var displayDate = $('#currentDay');
    displayDate.append(currentMoment);
    var currentHour = moment().format("HH");
    console.log(currentHour);

    // Compare currentHour with timeDivs and assign past, present, and future ids for color change
    $(".time-div").each(function() {
        currentHour = 11;
        var timeDiv = $(this).attr("id").split("-")[1];
        console.log(timeDiv);
        if (currentHour == timeDiv ) {
            $(this).addClass("present");
        } else if(currentHour < timeDiv) {
            $(this).addClass("future");
        } else if(currentHour > timeDiv) {
            $(this).addClass("past");
        }
    });

// Save time and schedule entry to local storage/ "eventlistener" for save button
    $(".saveBtn").click(function(event) {
        event.preventDefault();
        var time = $(this).parent().attr("id");
        var value = $(this).siblings(".time-block").val();
        console.log(time);
        console.log(value);
        localStorage.setItem(time, value);
        console.log(localStorage);
    });
// Load saved data from local storage
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));

// Reset schedule button (clear local storage)
    $("#resetSchedule").click(function(event) {
        event.preventDefault;
        $("textarea").val("");
        localStorage.clear();
    })    
});

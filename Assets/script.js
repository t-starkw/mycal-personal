$(document).ready(function() {
    var currentMoment = moment().format('dddd, MMMM Do YYYY');
    var displayDate = $('#currentDay');
    displayDate.append(currentMoment);
    var currentHour = moment().format("HH");
    console.log(currentHour);

    $(".time-div").each(function() {
        var timeDiv = $(this).attr("id").split("-")[1];
        console.log(timeDiv);
        if (currentHour == timeDiv ) {
            $(this).addClass("present");
        } else if(currentHour < timeDiv) {
            $(this).addClass("future");
        } else if(currentHour > timeDiv) {
            $(this).addClass("past");
        }
    })
});

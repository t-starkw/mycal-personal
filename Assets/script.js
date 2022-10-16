$(document).ready(function() {
    var currentMoment = moment().format('dddd, MMMM Do YYYY');
    var displayDate = $('#currentDay');
    displayDate.append(currentMoment);
    var currentHour = moment().format("HH");
    console.log(currentHour);
});
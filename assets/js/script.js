

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Resource: http://learn.jquery.com/using-jquery-core/document-ready/
// Resource: https://stackoverflow.com/questions/71781877/get-data-value-of-parent-of-clicked-child
// Respurce: https://stackoverflow.com/questions/70470393/how-select-a-sibling-of-parent-element-of-this-in-jquery

//var currentDayEl = moment().format('dddd MMM Do YYYY');
//$('#currentDay').html(currentDayEl);
//console.log("Does it diplay?");

// TODO: Add code to display the current date in the header of the page.


$(document).ready(function () {

  //Display day and time in header
  var currentTimeEl = dayjs();
  $('#currentDay').text(currentTimeEl.format('dddd, MMMM D YYYY, h:mm:ss a'));

  //Button to save data in local storage

  $('.saveBtn').on('click', function () {
    var textEl = $(this).siblings(".description").val();
    var timeEl = $(this).parent().attr("id");

    localStorage.setItem(timeEl, textEl);  // Save in local storage

    console.log('did it save?'); // Yes it saved!

  });


  //Track hours and change colors past present and future

  trackHour();

  function trackHour() {

    var hourEl = dayjs().format('H')

    $('.time-block').each(function () {
      var currentHourEl = parseInt($(this).attr('id').split('-')[1]);
      console.log(currentHourEl);

      if (currentHourEl < hourEl) {
        $(this).removeclass('present');
        $(this).removeClass('future');
        $(this).addClass('past');
      } else if (currentHourEl === hourEl) {
        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }



    });
  }
});


$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));





  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // To do: research about past, present and future class and how to ocmpare the id of current hour,
  // time-block, how to add or remove?


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // https://www.geeksforgeeks.org/moment-js-moment-hour-method/




  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?






// Resource: http://learn.jquery.com/using-jquery-core/document-ready/
// Resource: https://stackoverflow.com/questions/71781877/get-data-value-of-parent-of-clicked-child
// Respurce: https://stackoverflow.com/questions/70470393/how-select-a-sibling-of-parent-element-of-this-in-jquery


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
  // Asked AskBot for help, i had a spelling error addclass instead of addClass
  trackHour();

  function trackHour() {

    var hourEl = dayjs().format('H')

    $('.time-block').each(function () {
      var currentHourEl = parseInt($(this).attr('id').split('-')[1]);
      console.log(currentHourEl);

      if (currentHourEl < hourEl) {
        $(this).removeClass('present');
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

//Local Storage

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));












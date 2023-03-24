// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Resource: http://learn.jquery.com/using-jquery-core/document-ready/
// Resource: https://stackoverflow.com/questions/71781877/get-data-value-of-parent-of-clicked-child
// Respurce: https://stackoverflow.com/questions/70470393/how-select-a-sibling-of-parent-element-of-this-in-jquery

$(document).ready(function () {

  $('.saveBtn').on('click', function () {
    var textEl = $(this).siblings(".description").val();
    var timeEl = $(this).parent().attr("id");

    localStorage.setItem(timeEl, textEl);

    console.log('did it save?'); // Yes it saved!
  })

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
    // To do: research about past, present and future class and how to ocmpare the id of current hour,
    // time-block, how to add or remove?

  


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

//var currentTimeEl = 12;
  

var timeBlockEl = $('.time-block');
console.log(timeBlockEl);

 timeBlockEl.each(function () {

  console.log(this.id);
  var timeBlockId = parseInt(this.id.split('-')[1]);
  console.log(timeBlockId);

  if (timeBlockId < currentDayEl) {
    $(this).addClass('past');
  } else if (timeBlockId === currentDayEl) {
    $(this).addClass('present');
  } else {
    $(this).addClass('futute');
  }
 });


  // TODO: Add code to display the current date in the header of the page.

  var currentDayEl = document.querySelector('#currentDay'); // selects current day(time)

  function displayTime() {
    currentDayEl.textContent = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a'); // function to display day, month, year and time
}

displayTime(); // call function
setInterval(displayTime, 1000);  //calls function at specified intervals in milliseconds

});

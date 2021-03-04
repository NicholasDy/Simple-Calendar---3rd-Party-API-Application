var timeDisplay = $('#currentDay');
var timeBlocks = $('.input-group')
var saveBtn = $('.saveaction')
var textArea = $('.textarea')


function color (){
    var currentTime = parseInt(moment().hours())
    timeBlocks.each(function() {
         var hour = parseInt($(this).data('hour'))
              if (hour === currentTime){
                  $(this).children("textarea").css('background-color', "red")
              } else if (hour < currentTime){
                $(this).children("textarea").css('background-color', "#A9A9A9")
              } else {
                $(this).children("textarea").css('background-color', "green")
              }
      });
}


function showDate() {
    var today = moment().format('MMM DD, YYYY: hh:mm:ss');
    timeDisplay.text(today)
}

// function saveText(){
//     // localStorage.getItem()
//     var key = $(this).parent().parent().data('hour')
//     console.log(key)
//     var value1 =$.trim($(this).siblings().textArea.value)
    
//     console.log(value1)
//     localStorage.setItem($(timeBlocks).data('hour'), JSON.stringify(value1))
//     // showEvent
//     }

function showEvent() {
    textArea.innerHTML = ''
    var newEvent = 
    textArea.text = newEvent
    // create a for each similar to the color and grab the local storage for each of the cells
}

color()
showDate()
setInterval(showDate, 1000)
// $(".btnside").on('click', saveBtn, saveText)
   
$( saveBtn ).click(function(e) {
    $(this) 
    var key = $(this).parent().parent().data('hour')
    console.log(key)
    var value1 =$(this).siblings().value
    console.log(value1)
    
    localStorage.setItem($($(this).parent().parent().data('hour')), JSON.stringify(value1))
 });

// this was suggested from the TA over slack 
// https://api.jquery.com/attr/
// https://api.jquery.com/text/
    // have to use the .val() method in order to get the information 


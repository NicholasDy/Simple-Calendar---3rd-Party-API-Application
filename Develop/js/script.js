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

function saveText(){
    // localStorage.getItem()
    var key = $('').first("id")
    // var value = what is in the text area 
    console.log(key)
    localStorage.setItem($(timeBlocks).data('hour'), JSON.stringify($('textarea').text))
    // showEvent
}

function showEvent() {
    textArea.innerHTML = ''
    var newEvent = 
    textArea.text = newEvent
}

color()
showDate()
setInterval(showDate, 1000)
$(".btnside").on('click', saveBtn, saveText)
   
// $( "#target" ).click(function(event) {
//     $(this), 
//  });

// this was suggested from the TA over slack 
// https://api.jquery.com/attr/
// https://api.jquery.com/text/



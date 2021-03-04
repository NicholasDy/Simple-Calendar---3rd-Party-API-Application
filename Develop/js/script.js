var timeDisplay = $('#currentDay');
var timeBlocks = $('.input-group')
var saveBtn = $('#saveaction')
// var textArea = $('.textarea')


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
    alert('test')
    localStorage.setItem('hour', JSON.stringify(timeBlocks))
    showEvent
}

function showEvent() {
    textArea.innerHTML = ''
    var newEvent = 
    textArea.text = newEvent
}

color()
showDate()
setInterval(showDate, 1000)
$("#btnside").on('click', saveBtn, saveText)
   

// adding event listener for the save button 


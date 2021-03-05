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

function showEvent() {

    for (var i=0; i<localStorage.length; i++){
        console.log(localStorage.getItem(localStorage.key(i)));
        textArea.value = localStorage.key(i)
        // if((localStorage.key(i)) === ($(this).data('hour'))) {
            // $('textarea').text = localStorage.val(i)
    }
}
   
$( saveBtn ).click(function() { 
    // var key = $(this).parent().parent().data('hour')
    // var value1 = $(this).parent().siblings(textArea).val()
    // var value1 = $.trim(textArea.val())
    var value1 = $.trim($(this).parent().siblings('textarea').val())
    localStorage.setItem($(this).parent().parent().data('hour'), JSON.stringify(value1))
 });

color()
showDate()
showEvent()
setInterval(showDate, 1000)
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
    //loops through each time block
    timeBlocks.each(function(){
        //gets the key
        var keyPair = $(this).data('hour')
        console.log('keypair: ', keyPair);
        //gets the stored value for that key
        var savedValue = localStorage.getItem(keyPair);
        console.log('saved value: ', savedValue);
        //checks if value is true, note: if the value doesnt exist, it will be null
        if (savedValue){
            //Then update value
            $(this).children("textarea").val(savedValue);
        }
    })
}

$( saveBtn ).click(function() { 
    var value1 = $.trim($(this).parent().siblings('textarea').val())
    localStorage.setItem($(this).parent().parent().data('hour'), JSON.stringify(value1))
 });

color()
showDate()
showEvent()
setInterval(showDate, 1000)
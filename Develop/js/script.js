// moment to set the time on the header of the page
    // using an if statement to change the colour of the bar based on the time of day 
var timeDisplay = $('#currentDay');

function showDate() {
    var today = moment().format('MMM DD, YYYY: hh:mm:ss');
    timeDisplay.text(today)
}

// using bootstrap to sort the information on the page 


// function for save btn to save to local storage 
function saveInfo(e){

}

// having function display the local storage 



showDate()
setInterval(showDate, 1000)
// adding event listener for the save button 


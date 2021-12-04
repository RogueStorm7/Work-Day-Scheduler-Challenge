// Variables
var saveBtn = $(".saveBtn");
var currentHour = moment().format("HH"); // Variable for current hour 
var currentHourInt = parseInt(currentHour); // Parse so hours return as integers
//var timeElid = document.getElementById(eventsArri[i].scheduleedTime)
//timeElid.querySelector("description".textContent = eventsArri[i].scheduleedTime)

//Set data attricutes for ea. hr input element then the function below can assign color to ea. for thr current hr.
$("#8Row").attr("data-time", moment("8:00 am", "h:mm a").format("HH"));
$("#9Row").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#10Row").attr("data-time", moment("10:00 am", "h:mm a").format("HH"));
$("#11Row").attr("data-time", moment("11:00 am", "h:mm a").format("HH"));
$("#12Row").attr("data-time", moment("12:00 pm", "h:mm a").format("HH"));
$("#1Row").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$("#2Row").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$("#3Row").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$("#4Row").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));

//jQuery start
$(document).ready(function () {
    //Function to store inputted data
    renderPlans();
    //Show time & date in Header
    $('#currentDay').append();

    function addDate() {
        $("#currentDay").html(moment().format('MMMM/DD/YYYY,h:mm a'));

    } setInterval(addDate, 1000);

    //change color in ea row by adding in the "am" attribute for ea input line (above) in order for ea to reflect the current hr (you learned this in class)
    for (var i = 0; i <= 12; i++) {

        //variable for the hour of the row
        var inputHour = $("#" + i + "Row").attr("data-time");

        //parse= so the hour returns as an integer
        var inputHourInt = parseInt(inputHour);

        //applies red color to row if it is in the "present" hr
        if (currentHourInt === inputHourInt) {
            $("#" + i + "Row").addClass("present");
        }
        //applies red color to row if it is in the "past" hr
        if (currentHourInt === inputHourInt) {
            $("#" + i + "Row").addClass("past");
            //applies red color to row if it is in the "future" hr
            if (currentHourInt === inputHourInt) {
                $("#" + i + "Row").addClass("future");
            }
        }
        //function that allows triggering of data to be stored in local storage once saved button is clicked
        saveBtn.on("click", function () {
            //this is variable that references the hour row assigned in the html doc
            var rowHour = $(this).attr("data-hour");
            //saves the text that was entered into the input column
            var input = $("#" + rowHour + "Row").val();
            //local storage saves input
            localStorage.setItem(rowHour, input);
        });

        //each input that was saved is retrieved with this function
        function renderPlans() {
            for (var i = 0; i <= 12; i++) {
                $("#" + i + "Row").val(localStorage.getItem(i));
            }
        }
    }
});


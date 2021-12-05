// Get current day using moment.js
var currentDay = moment().format("dddd, MMMM Do ,HH:mm:ss");

// Set each timeblock in the daily schedule using moment.js
var hour8 = moment().hour(8);
var hour9 = moment().hour(9);
var hour10 = moment().hour(10);
var hour11 = moment().hour(11);
var hour12 = moment().hour(12);
var hour13 = moment().hour(13);
var hour14 = moment().hour(14);
var hour15 = moment().hour(15);
var hour16 = moment().hour(16);
var hour17 = moment().hour(17);


// Create an array of hour blocks for code generation
var hours = [hour8, hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16];

// Get local storage data or set to empty
var events8 = JSON.parse(localStorage.getItem('hour8')) || "";
var events9 = JSON.parse(localStorage.getItem('hour9')) || "";
var events10 = JSON.parse(localStorage.getItem('hour10')) || "";
var events11 = JSON.parse(localStorage.getItem('hour11')) || "";
var events12 = JSON.parse(localStorage.getItem('hour12')) || "";
var events13 = JSON.parse(localStorage.getItem('hour13')) || "";
var events14 = JSON.parse(localStorage.getItem('hour14')) || "";
var events15 = JSON.parse(localStorage.getItem('hour15')) || "";
var events16 = JSON.parse(localStorage.getItem('hour16')) || "";

// Display current day at top of planner
$("#currentDay").text(currentDay);

// Audit each time block to display past, entent and future timeblocks
var auditTime = function () {
    currentTime = moment().format("HH:mm:ss");
    // extract the currentTime string, split with ':', get the first index as the hour, and psrse as Integer
    var hour = parseInt(currentTime.split(":")[0])
    console.log (currentTime)
    
    var row8= $("#8Row")
     if (hour == 8) { 
         row8.addClass("present");
        // mark as present
    } else if (hour > 8) {
        row8.addClass("future");
        // mark timeblock as past
    } else {
        row8.addClass("past");
        // mark as future
    }

    var row9= $("#9Row")
     if (hour == 9) { 
         row9.addClass("present");
        // mark as present
    } else if (hour > 9) {
        row9.addClass("future");
        // mark timeblock as past
    } else {
        row9.addClass("past");
        // mark as future
    }

    var row10= $("#10Row")
    console.log (hour)
     if (hour == 10) { 
         row10.addClass("present");
        // mark as present
    } else if (hour > 10) {
        row10.addClass("future");
        // mark timeblock as past
    } else {
        row10.addClass("past");
        // mark as future
    }

    var row11= $("#11Row")
     if (hour == 11) { 
         row11.addClass("present");
        // mark as present
    } else if (hour > 11) {
        row11.addClass("future");
        // mark timeblock as past
    } else {
        row11.addClass("past");
        // mark as future
    }

    var row12= $("#12Row")
    if (hour == 12) { 
        row12.addClass("present");
       // mark as present
   } else if (hour > 12) {
       row12.addClass("future");
       // mark timeblock as past
   } else {
       row12.addClass("past");
       // mark as future
   }

   var row13= $("#13Row")
   if (hour == 13) { 
       row13.addClass("present");
      // mark as present
  } else if (hour > 13) {
      row13.addClass("future");
      // mark timeblock as past
  } else {
      row13.addClass("past");
      // mark as future
  }

  var row14= $("#14Row")
  if (hour == 14) { 
      row14.addClass("present");
     // mark as present
 } else if (hour > 14) {
     row14.addClass("future");
     // mark timeblock as past
 } else {
     row14.addClass("past");
     // mark as future
 }

 var row15= $("#15Row")
 if (hour == 15) { 
     row15.addClass("present");
    // mark as present
} else if (hour > 15) {
    row15.addClass("future");
    // mark timeblock as past
} else {
    row15.addClass("past");
    // mark as future
}

var row16= $("#16Row")
if (hour == 16) { 
    row11.addClass("present");
   // mark as present
} else if (hour > 16) {
   row16.addClass("future");
   // mark timeblock as past
} else {
   row16.addClass("past");
   // mark as future

}  
// End Audit Timeblock



// Add delete event function for each time block
$("#save-delete8").on("click", function () {
    localStorage.removeItem("hour8");
    $("#eventblock8").val("");
    console.log(8)
})
$("#save-delete9").on("click", function () {
    localStorage.removeItem("hour9");
    $("#eventblock9").val("");
})
$("#save-delete10").on("click", function () {
    localStorage.removeItem("hour10");
    $("#eventblock10").val("");
})
$("#save-delete11").on("click", function () {
    localStorage.removeItem("hour11");
    $("#eventblock11").val("");
})
$("#save-delete12").on("click", function () {
    localStorage.removeItem("hour12");
    $("#eventblock12").val("");
})
$("#save-delete13").on("click", function () {
    localStorage.removeItem("hour13");
    $("#eventblock13").val("");
})
$("#save-delete14").on("click", function () {
    localStorage.removeItem("hour14");
    $("#eventblock14").val("");
})
$("#save-delete15").on("click", function () {
    localStorage.removeItem("hour15");
    $("#eventblock15").val("");
})
$("#save-delete16").on("click", function () {
    localStorage.removeItem("hour16");
    $("#eventblock16").val("");
})

// End delete event functions


// Add save event function for each time block
$("#save-delete8").on("click", "i.fa-save", function () {
    var event9 = $("#eventblock8").val().trim();
    localStorage.setItem('hour8', JSON.stringify(event8));
})
$("#save-delete9").on("click", "i.fa-save", function () {
    var event9 = $("#eventblock9").val().trim();
    localStorage.setItem('hour9', JSON.stringify(event9));
})
$("#save-delete10").on("click", "i.fa-save", function () {
    var event10 = $("#eventblock10").val().trim();
    localStorage.setItem('hour10', JSON.stringify(event10));
})
$("#save-delete11").on("click", "i.fa-save", function () {
    var event11 = $("#eventblock11").val().trim();
    localStorage.setItem('hour11', JSON.stringify(event11));
})
$("#save-delete12").on("click", "i.fa-save", function () {
    var event12 = $("#eventblock12").val().trim();
    localStorage.setItem('hour12', JSON.stringify(event12));
})
$("#save-delete13").on("click", "i.fa-save", function () {
    var event13 = $("#eventblock13").val().trim();
    localStorage.setItem('hour13', JSON.stringify(event13));
})
$("#save-delete14").on("click", "i.fa-save", function () {
    var event14 = $("#eventblock14").val().trim();
    localStorage.setItem('hour14', JSON.stringify(event14));
})
$("#save-delete15").on("click", "i.fa-save", function () {
    var event15 = $("#eventblock15").val().trim();
    localStorage.setItem('hour15', JSON.stringify(event15));
})
$("#save-delete16").on("click", "i.fa-save", function () {
    var event16 = $("#eventblock16").val().trim();
    localStorage.setItem('hour16', JSON.stringify(event16));
})

// End save event functions


// This function runs but the time is never refreshed?
setInterval(function () {
    $(".event-group .events").each(function (index, el) {
        auditTime(el);
        console.log(currentTime);
    });

}, (1000 * 60)); // 1000ms x 60 = 1 minute x 30 = 30 minutes

}
auditTime();

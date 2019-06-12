// Homework Due 6.13.19

//global variables
var sports = ["baseball", "soccer", "ping pong", "volleyball"]; 
var state = true;      //not sure how to deal with state... can't find it in data

//button and search bar on load //search/submit - click //adds a button //function button create a button?? on click...
function makeButtons() {
    $("#show-buttons").empty();                                // Deletes the buttons prior to adding new buttons - will duplicate if not done
                                                              
    for (var i = 0; i < sports.length; i++) {                  // Looping through the array of sports                                                              
      var button = $("<button>");                              // Generates buttons for each sport in the array                                                              
      button.addClass("sport");                                // Adding a class of sport to our button                                                             
      button.attr("data-name", sports[i]);                     // Adding a data-attribute                                                             
      button.text(sports[i]);                                  // Providing the initial button text                                                             
      $("#show-buttons").append(button);                       // Adding the button to the HTML
    }
  }
    
  //on click that gets event value and calls button creation function
  $("#select-sport").on("click", function(event) {                                                                        
    event.preventDefault();                                    // Prevents autosubmit/reload when clicked                                                       
    var sport = $("#select-movie").val().trim();               // Grabs the input from the textbox                                                         
    sports.push(sport);                                        // Adds the sport to the array
                                                                                                   
    makeButtons();                                             // Calls the makeButton function to make the buttons
  });
 
//pull from ajax function and puts gifs on the html
function sportSearch(x) {

    var APIKey = "e6FP22HDQPcqQDR3do3pn5gSH5lOXbrc";

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=" + APIKey + "&limit=10"; 

    $.ajax({
        url: queryURL,
        method: "GET"
    }) .then(function(response) {
        console.log(response);

        var data = response.data;

        for (var i=0; i < data.length; i++) {
        var gifImage = $("<img>");
        gifImage.addClass("gif");
        gifImage.attr("src", data[i].images.fixed_height_small_still.url);
        $("#show-gifs").append(gifImage);
    }})
}

//click event //onclick - gets value of button //pull info through ajax //display gifs //initially still
$(document).on("click", ".button", function() {
    var search = $(this).attr("data-sport");                          //pulls data from data-sport
    console.log(search);

    sportSearch(search);
})

//click event //alternates gifs from still to animated when clicked
$(".gif").on("click", function() {

    console.log("click gifs good");

    //var state = $(this).attr("data-state"); 
    var stillUrl = $(this).attr("data-images-fixed_height_still"); 
    var animateUrl = $(this).attr("data-images-fixed_height");                     //this will give the value of button clicked

    if (state === true) {
        $(this).attr("src", animateUrl);
        //$(this).attr("data-state", "animate");                         //state and url always need to be in sinc

    } else  {
        $(this).attr("src", stillUrl);
       // $(this).attr("data-state", "still");  
    };
});

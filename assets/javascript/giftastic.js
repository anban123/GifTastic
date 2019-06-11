// Homework Due 6.13.19

//global variables
var sports = ["baseball", "soccer", "ping pong", "volleyball"]; //??

//button and search bar on load

//search/submit - click
    //adds a button //function button create a button?? on click...
$("add-button").on("click", function() {
    var sport = $(this).attr("data-sport");

    console.log(sport);
})
 
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
        gifImage.attr("src", data[i].images.fixed_height_small_still.url);
        $("#show-gifs").append(gifImage);
    }})
}

//click event
    //onclick - gets value of button
    //pull info through ajax
    //display gifs
        //initially still
$(document).on("click", ".button", function() {
    var search = $(this).attr("data-sport");                          //pulls data from data-sport
    console.log(search);

    sportSearch(search);
})

//click event
    //alternates gifs from still to animated when clicked
$("#show-gifs").on("click", function() {

    //var state = $(this).attr("data-state"); 
    var stillUrl = $(this).attr("data-images-fixed_height_still"); 
    var animateUrl = $(this).attr("data-images-fixed_height");                     //this will give the value of button clicked

    if (state === "still") {
        $(this).attr("src", animateUrl);
        $(this).attr("data-state", "animate");                         //state and url always need to be in sinc

    } else  {
        $(this).attr("src", stillUrl);
        $(this).attr("data-state", "still");  
    };
});

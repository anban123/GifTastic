// Homework Due 6.13.19

//global variables

//button and search bar on load

//search/submit - click
    //adds a button

//click event
    //onclick - gets value of button
    //pull infor through ajax
    //display gifs
        //initially still

//click event
    //alternates gifs from still to animated when clicked

//function button creation

var i = 0;
//pull from ajax
function sportSearch(x) {

    var APIKey = "e6FP22HDQPcqQDR3do3pn5gSH5lOXbrc";

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=" + APIKey + "&limit=10"; 

    $.ajax({
        url: queryURL,
        method: "GET"
    }) .then(function(response) {
        console.log(response);

        var data = response.data;

        for (var i=0; i < data.length; i++) {
        var gifImage = $("<img>");
        gifImage.attr("src", data[i].url);
        $("#show-gifs").append(gifImage);
    }})
}



$(document).on("click", ".button", function() {
    var search = $(this).attr("data-sport");                          //pulls data from data-sport
    console.log(search);

    sportSearch(search);
})


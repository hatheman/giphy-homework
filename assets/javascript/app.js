var topics= ["U.S.A", "Korea", "Japan", "Mexico", "Germany", "Canada", "China", "Hong Kong", "Taiwan", "Italy", "France", "Spain", "Portugal"]

var addbutton = function() {
    for(var i=0; i < topics.length; i++) {
        
             
                
var gifDiv = $("<button>")
gifDiv.addClass("btn btn-danger")
var p = topics[i]
gifDiv.prepend(p)

$("#buttons").prepend(gifDiv)
}} 






var gifButtons = function() {
    $("button").on("click", function() {
    var country = $(this).text();
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=9KRoNBV0uyFy5q1EKfa5DK1wI47ZjSdZ&q=" +
      country + "&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
      })
     .then(function(response) {
         $("#images-list").empty()
        var results = response.data
        for(var i=0; i < results.length; i++) {
            var countryImages = $("<li class='list-group-item'>")
            var images = $("<img>")
            var rating = $("<p>")
            rating.text("This Gif's rating is:" + results[i].rating)
            images.addClass("gif")
            images.attr("src", results[i].images.fixed_height_still.url)
            images.attr("data-still", results[i].images.fixed_height_still.url)
            images.attr("data-animate", results[i].images.fixed_height.url)
            

            countryImages.append(images)
            countryImages.append(rating)
           
            $("#images-list").prepend(countryImages)
           
             $(".gif").on("click", function(){
              console.log("clicked")
            
            var currentState = $(this).attr("src") 
            var stillState = $(this).attr("data-still")
            if(currentState === stillState) {
               $(this).attr("src", $(this).attr("data-animate"));
            }
            else {
                $(this).attr("src", $(this).attr("data-still"));
               
            }
           
           
        })
        
    }})
})
}



// var giffState = function() {
//     $("#images-list").on("click", function(){
//         console.log("clicked")
    
//     var state = images.attr("src") 
//     if(state === "results[i].images.fixed_height.url") {
//         $(this).attr("src", $(this).attr("results[i].images.fixed_height_still.url"));

//     } else {
//         $(this).attr("src", $(this).attr("results[i].images.fixed_height.url"));
       
//     }
// })}
$(document).ready(function() {
addbutton()
$("#submit-button").on("click", function(event) {
        event.preventDefault()
      
       
        var input = ($('form').find('input').eq(0).val())
        var gifDiv = $("<button>")
        gifDiv.addClass("btn btn-danger")
        gifDiv.prepend(input)
        $("#buttons").prepend(gifDiv)
        gifButtons()
})
gifButtons()
    

    
})


    



    


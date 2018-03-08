var topics= ["U.S.A", "Korea", "Japan", "Mexico", "Germany", "Canada", "China", "Hong Kong", "Taiwan", "Italy", "France", "Spain", "Portugal"]

// ("#input").submit(function(event) {
//     event.preventDefault()
// if ($("input:first").val()==="correct") {
//         topics.push($("input:first").val())
//         console.log("correct")
    
//     } 
//     else[
//         console.log("not correct")
//     ]
// })

    for(var i=0; i < topics.length; i++) {
    var gifDiv = $("<button>")
    gifDiv.addClass("btn btn-danger")
    var p = topics[i]
    gifDiv.prepend(p)
    console.log(p)

   $("#buttons").prepend(gifDiv)
}

$


 $("button").on("click", function() {
    var country = $(this).text();
    console.log(country)
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
            var personImages = $("<li class='list-group-item'>")
            var images = $("<img>")
            images.attr("src", results[i].images.fixed_height.url)

            personImages.prepend(images)
           
            $("#images-list").prepend(personImages)
        
        } 
    })
})
        

$(document).ready(function(){
    // "&begin_date=" + startYear + "&end_date=" + endYear +
    var apiKey = "N7TjPA0Be6WfOQzEgqi6pu5mJpAsgXe7";
    var searchTerm = "Obama";
    var articleAmount = "10";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=" + apiKey;
    
    $.ajax({
        url : queryURL,
        method : 'GET'
    }).then(function(response){
        console.log(response);
        for(var i = 0; i < 10; i++)
        {
            var headlines = response.response.docs[i].headline.main;
            var author = response.response.docs[i].byline.original;
            console.log(headlines);
            console.log(author);

            $("#benResults").append($("<div>",{"id" : "article"}));
            $("#article").append($("<p>",{"text" : headlines, "id" : "headline" + i}));
            $("#headline" + i).append($("<p>",{"text" : author}));
        }
    });


});
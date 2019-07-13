$(document).ready(function(){
    // "&begin_date=" + startYear + "&end_date=" + endYear +
    var apiKey = "N7TjPA0Be6WfOQzEgqi6pu5mJpAsgXe7";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=" + apiKey + "&fl=" + numRecordsChosen;
    var searchTerm = "New York Times";
    var numRecords = ["1", "5", "10"];
    var numRecordsChosen = numRecords[0];
    var startYear = "2018";
    var endYear = "2019";

    $.ajax({
        url : "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=george+washingtons&api-key=N7TjPA0Be6WfOQzEgqi6pu5mJpAsgXe7",
        method : 'GET'
    }).then(function(response){
        console.log(response);
    });


});
var news = (function() {

  var HttpClient = function() {
      this.get = function(aUrl, aCallback) {
          var httpRequest = new XMLHttpRequest();
          httpRequest.onreadystatechange = function() {
              if (httpRequest.readyState == 4 && httpRequest.status == 200)
                  aCallback(httpRequest.responseText);
          };

          httpRequest.open( "GET", aUrl, true );
          httpRequest.send( null );
      };
  };

var http = new HttpClient();

return {
  getHeadlines: function() {
    http.get('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/uk-news', function(response) {
      console.log(JSON.parse(response));
      console.log(JSON.parse(response).response);
      // console.log(JSON.parse(response).response.results);
      results = JSON.parse(response).response.results;
      console.log(results);
      view.renderAll(JSON.parse(response));
    });

  }

};

})();

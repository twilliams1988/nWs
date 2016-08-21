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
      results = JSON.parse(response).response.results;
      view.renderAll(JSON.parse(response));
    });
  },

    getArticle: function(id, callback) {
      http.get('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/' + id + '?show-fields=body', function(response) {
        body = JSON.parse(response).response.content.fields.body;
        callback(JSON.parse(response));
      });
    },

    summariseArticle: function(id, callback) {
      http.get('http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=https://www.theguardian.com/' + id, function(response) {
        callback(JSON.parse(response));
      });
    },
  };
})();

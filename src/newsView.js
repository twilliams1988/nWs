var view = (function () {

  return {
    renderAll: function(headlines) {
      headlines = headlines.response.results;
      var headlineLinks = '';
      headlines.forEach(function(headline) {
        headlineLinks += "<a id='" + headline.id +"' href='#" + headline.id + "'><p>"+ headline.webTitle.substring(0, 40)+"...</p></a>";
      });
      document.getElementById('headlines').innerHTML = headlineLinks;
    },
    renderSummarisedArticle: function(response) {
      sentencesArray = response.sentences;
      var sentences = '';
      sentencesArray.forEach(function(sentence) {
        sentences += "<p>"+ sentence + "</p>";
      });
      document.getElementById('focusNews').innerHTML = sentences;
    },
    renderArticle: function(response) {
      document.getElementById('expandNews').innerHTML = response.response.content.fields.body;
    }
  };

})();

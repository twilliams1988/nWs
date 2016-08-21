var view = (function () {

  return {
    renderAll: function(headlines) {
      console.log(headlines.response.results);
      headlines = headlines.response.results;
      var notes = '';
      headlines.forEach(function(headline) {
        headlines += "<a id='" + headline.id +"' href='#" + headline.id + "'><p>"+ headline.webTitle.substring(0, 40)+"...</p></a>";
      });
      document.getElementById('headlines').innerHTML = headlines;
    },
    renderFocus: function(headline) {
      document.getElementById('focusNews').innerHTML = headline.webTitle;
    }
  };

})();

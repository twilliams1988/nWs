function getArticleLinkFromUrl (callback) {
  callback(location.hash.split('#')[1]);
}

window.addEventListener('load', function() {
  view.renderAll(news.getHeadlines());
});

window.addEventListener('hashchange', function() {
  getArticleLinkFromUrl( function (id) {
    news.summariseArticle(id, function (article) {
      view.renderSummarisedArticle(article);
    });
  });
});
setTimeout(function() {
document.getElementById('expand').addEventListener('click', function() {
  console.log('clicked button');
  getArticleLinkFromUrl( function (id) {
    news.getArticle(id, function (article) {
      view.renderArticle(article);
    });
  });
});
}, 1000);

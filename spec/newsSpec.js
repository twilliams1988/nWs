describe('News', function () {
  var news;

  beforeEach(function () {
    news = new News();
  });

  it('displays todays headlines in a list', function () {
    expect(news.getHeadlines()).toInclude('response');
  });
});

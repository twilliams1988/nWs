var watson = require('watson-developer-cloud');

var tone_analyzer = watson.tone_analyzer({
  username: '../config.json.credentials.username',
  password: '../config.json.credentials.password',
  version: 'v3',
  version_date: '2016-05-19'
});

tone_analyzer.tone({ text: 'A word is dead when it is said, some say. Emily Dickinson' },
  function(err, tone) {
    if (err)
      console.log(err);
    else
      console.log(JSON.stringify(tone, null, 2));
});

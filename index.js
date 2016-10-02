var axios = require('axios');

var ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

module.exports = function (options, callback) {
  if (!options.key) {
    throw new Error('Provide valid youtube developer key to trigger search.');
  }

  var params = {
    part: 'snippet',
    key: options.key,
    term: options.term,
    type: 'video',
    maxResults: options.maxResults?options.maxResults:10
  };

  axios.get(ROOT_URL, { params: params })
    .then(function(response) {
      if (callback) { callback(response.data.items); }
    })
    .catch(function(error) {
      console.error(error);
    });
};

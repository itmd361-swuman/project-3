var API500px = require('500px'),
    api500px = new API500px(consumer_key);

api500px.photos.getPopular({'sort': 'created_at', 'rpp': '100'},  function(error, results) {
  if (error) {
    // Error! 
    return;
  }
 
  // Do something 
});
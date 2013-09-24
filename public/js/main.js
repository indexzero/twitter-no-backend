$(function () {
  $('.main').append('<h3>jQuery is ready</h3>');
  $('.main').append('<hr/>');

  var matchers = [
    'consumer_key',
    'consumer_secret',
    'access_token',
    'access_token_secret'
  ].map(function (name) {
    return new RegExp('^(' + name + ')=([\\w-]+)$')
  });
  
  var values = window.location.search.slice(1).split('&')
    .reduce(function (all, value) {
      matchers.forEach(function (re) {
        var match
        if ((match = re.exec(value))) {
          all[match[1]] = match[2];
        }
      });

      return all;
    }, {});
  
  $('.main').append(
    '<h3>Using Twitter credentials</h3>' + 
    '<ul>' + Object.keys(values).map(function (param) {
      return '<li><b>' + param + '</b>: ' + values[param] + '</li>'
    }).join('') + '</ul>' + '<hr/>'
  );
  
  var client = new Codebird;
  client.setConsumerKey(values.consumer_key, values.consumer_secret);
  client.setToken(values.access_token, values.access_token_secret);
  
  $('.main').append('<h3>Requesting users_show for indexzero</h3>');
  client.__call(
    "users_show",
    { screen_name: 'indexzero' },
    function (reply) {
      
      $('.main').append(
        '<h4>Response from Twitter:</h4>'+
        '<pre><code>' + JSON.stringify(reply, null, 2) + '</code></pre>'
      )
    }
  );
});

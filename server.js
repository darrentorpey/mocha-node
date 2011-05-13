var app, express;
express = require('express');
app = express.createServer();
app.configure(function() {
  app.use(express.logger());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.errorHandler({
    showStack: true,
    dumpExceptions: true
  }));
  return app.use(express.static(__dirname + '/public'));
});
app.set('view engine', 'jade');
app.get('/play', function(req, res) {
  return res.render('play', {
    title: 'My Site'
  });
});
this.property = require('./lib/property.js');
app.dynamicHelpers({
  page_title: function() {
    return this.property.create();
  }
});
app.listen(3000);
console.log('Express server started on port %s', app.address().port);
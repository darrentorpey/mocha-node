(function() {
  var app, express;
  express = require('express');
  app = express.createServer();
  app.use(express.logger());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.errorHandler({
    showStack: true,
    dumpExceptions: true
  }));
  app.use(express.static(__dirname + '/public'));
  app.configure(function() {
    return app.use(express.static(__dirname + '/public'));
  });
  app.set('view engine', 'jade');
  app.get('/play', function(req, res) {
    return res.render('play', {
      title: 'My Site'
    });
  });
  app.listen(3000);
  console.log('Express server started on port %s', app.address().port);
}).call(this);

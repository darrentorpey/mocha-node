var app, express;
express = require('express');
app = express.createServer();
app.use(express.logger());
app.use(express.static(__dirname + '/public'));
app.listen(3001);
console.log('Express server started on port %s', app.address().port);
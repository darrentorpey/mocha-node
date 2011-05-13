express = require 'express'
app = express.createServer()

app.configure ->
  app.use express.logger()
  app.use express.bodyParser()
  app.use express.methodOverride()
  app.use express.errorHandler showStack: true, dumpExceptions: true
  app.use express.static(__dirname + '/public')

app.set 'view engine', 'jade'

# app.get '/', (req, res) ->
#   res.send 'Hello World'

app.get '/play', (req, res) ->
  res.render 'play', { title: 'My Site' }

# app.get '/:id', (req, res) ->
  # res.send 'Hello, ' + req.params.id

@property = require './lib/property.js'
app.dynamicHelpers(
  page_title: ->
    @property.create()
)

app.listen 3000
console.log 'Express server started on port %s', app.address().port
exports.create = ->
  @value = null;
  {
    get: ->
       @value
    set: (new_value) ->
       value = new_value
  }
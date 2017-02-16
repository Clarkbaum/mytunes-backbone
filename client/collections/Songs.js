// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  initialize: function(){
    this.fetch();
  },

  fetch: function() {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.atx.hackreactor.com/mytunes/classes/songs',
      type: 'GET',
      contentType: 'application/json',
      success: function (data) {
        this.reset(data.results);

      }.bind(this),
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('Failed to receieve data', data);
      }
    });
  
  },




});
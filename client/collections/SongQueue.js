// SongQueue.js - Defines a backbone model class for the song queue.
//collection of song modles
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('ended', this.removePlayedSong);

    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this)

    this.on('dequeue', function(event){
      console.log("teventf: ",event)
      this.remove(event.cid)
    });
  },

  playFirst: function(){
    this.at(0).play();
  },

  removePlayedSong: function(){
    this.shift();
    if (this.length === 1){
        this.playFirst();
      }
  }



});
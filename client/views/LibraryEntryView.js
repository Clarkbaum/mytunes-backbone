// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      //this.model.play();
      this.model.enqueue();
    }
  },

  render: function() {
    console.log(this.model.attributes.artwork_url)
    if (this.model.attributes.artwork_url) {
      return this.$el.html(this.template(this.model.attributes))
      .prepend('<td><img width=80 height=80 src="' + this.model.attributes.artwork_url + '"></td>');
    }
    return this.$el.html(this.template(this.model.attributes));
  }

});

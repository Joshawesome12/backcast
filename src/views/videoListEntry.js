var VideoListEntryView = Backbone.View.extend({


  initialize: function() {
    this.videos = new Videos();
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});

var VideoListView = Backbone.View.extend({


  initialize: function() {
    this.videos = new Videos();
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    // this.collection.forEach(this.renderVideo, this);
    return this;
  },

  renderVideo: function(video){
    var videoListEntryView = new VideoListEntryView({model:Video});
    this.$el.append(videoListEntryView.render());
  },

  template: templateURL('src/templates/videoList.html')

});

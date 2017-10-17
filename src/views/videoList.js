var VideoListView = Backbone.View.extend({


  initialize: function() {
    this.videos = new Videos();
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    console.log('this.collection', this.collection);
    //exampleVideoData.forEach(this.renderVideo);
    return this;
  },

  renderVideo: function(video) {
    var videoListEntryView = new VideoListEntryView({model: video});
    this.$el.append(videoListEntryView.render());
  },

  template: templateURL('src/templates/videoList.html')

});

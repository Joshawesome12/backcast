var VideoListView = Backbone.View.extend({

  initialize: function() {
    // this.videos = new Videos();
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    var videoArray = [];

    for (var i = 0; i < this.collection.models.length; i++) {
      videoArray.push(new VideoListEntryView({model: this.collection.models[i]}).render());
    }

    videoArray.forEach(video => {
      this.$el.append(video.el);
    });
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});

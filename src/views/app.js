var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    //this.videoPlayer = new VideoPlayerView();
    //this.videoList = new VideoListView();
    this.render();
  },

  model: Video,


  render: function() {
    this.$el.html(this.template());

    new VideoListView({el: '.list', collection: this.videos});

    new VideoPlayerView({el: this.$('.player'), collection: this.videos, model: Video});

    new SearchView({el: this.$('.navbar')}).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});

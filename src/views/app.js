var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },

  model: Video,


  render: function() {
    this.$el.html(this.template());

    new VideoListView({el: '.list', collection: this.videos}).render();

    new VideoPlayerView({el: this.$('.player'), collection: this.videos, model: this.videos.at(0)}).render();

    new SearchView({el: this.$('.search')}).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});

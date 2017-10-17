var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    // this.videos = new Videos();
    // // this.collection.on('sync', this.render, this);
    // this.render();
    this.collection.on('select', this.handleSelect, this);
  }, 

  // this.collection.on('sync', function(response) {
  //   this.this.model = response[0];
  //   this.render();
  // }, this);

  //   this.collection.on('select', this.handleSelect, this);
  // },    
  
  handleSelect: function(video) {
    this.model = video;
    this.render();
  },

  
  render: function() {
    if (this.model) {
      this.$el.html(this.template(this.model.attributes));
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});

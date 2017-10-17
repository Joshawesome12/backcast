var VideoListView = Backbone.View.extend({


  initialize: function() {
    // this.videos = new Videos();
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    var videoArray = [];
    // console.log('this.model.attributes',this.model.attributes);
    for (var i = 0; i < this.collection.models.length; i++) {

      // this.$el.html(this.template(this.collection.models));
      // videoArray.push(this.renderVideo(this.collection.models[i].attributes));
      //console.log('this.collection.models[i] ~~~~~~~~~~~ ', i,  this.collection.models[i]);
      // this.renderVideo(this.collection.models[i])
      videoArray.push(new VideoListEntryView({model: this.collection.models[i]}).render());
    }

    console.log('videoArray', videoArray);
    videoArray.forEach(video => {
      // this.$el.append('<h1>asdaf</h1>');
      console.log('each video: ', video);
      this.$el.append(video.el);
    });
    return this;
  },

  // renderVideo: function(video) {
  //   //console.log('running in renderVideo');
  //   var videoListEntryView = new VideoListEntryView({model: video});
  //   return videoListEntryView.render();
  // },

  template: templateURL('src/templates/videoList.html')

});

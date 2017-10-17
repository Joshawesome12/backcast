var VideoListEntryView = Backbone.View.extend({
  // el: '.video-list',
  
  initialize: function() {

    // console.log('el', this.$el);
    //this.videos = new Videos();
    // this.render();
  },

  render: function() {
    // console.log('this.model.attributes', this.model.attributes);
    // console.log('aaaaa', this.$el);
    this.$el.html(this.template(this.model.attributes));
    return this;
  },




  template: templateURL('src/templates/videoListEntry.html')

});



// %= snippet.description %
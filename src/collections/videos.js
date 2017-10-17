var Videos = Backbone.Collection.extend({

  model: Video,

  initialize: function() {

  },

  search: function(query) {
    this.fetch(
      {data: {
        query: query,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
      }}
    );
  },

  parse: function(results) {
    return results.items;
  },

});
